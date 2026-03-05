// 페이지 태그 진단 (정적 파싱 + 다중 프록시)
(function () {
    const TRACKERS = [
        {
            name: 'GTM',
            icon: '🏷️',
            idRegexes: [
                /GTM-[A-Z0-9-]+/gi,
                /googletagmanager\.com\/gtm\.js\?id=(GTM-[^"'\s&]+)/gi,
                /googletagmanager\.com\/ns\.html\?id=(GTM-[^"'\s&]+)/gi
            ]
        },
        {
            name: 'GA4',
            icon: '📊',
            idRegexes: [
                /googletagmanager\.com\/gtag\/js\?id=(G-[^"'\s&]+)/gi,
                /gtag\(['"]config['"],\s*['"](G-[^'"]+)['"]/gi
            ]
        },
        {
            name: 'Google Ads',
            icon: '🎯',
            idRegexes: [
                /googletagmanager\.com\/gtag\/js\?id=(AW-[^"'\s&]+)/gi,
                /gtag\(['"]config['"],\s*['"](AW-[^'"]+)['"]/gi
            ]
        },
        {
            name: 'Meta Pixel',
            icon: '📘',
            idRegexes: [
                /fbq\(['"]init['"],\s*['"](\d+)['"]/gi,
                /connect\.facebook\.net\/en_US\/fbevents\.js/gi
            ]
        },
        {
            name: 'TikTok Pixel',
            icon: '🎵',
            idRegexes: [
                /ttq\.load\(['"]([^'"]+)['"]/gi,
                /analytics\.tiktok\.com\/i18n\/pixel\/events\.js/gi
            ]
        },
        {
            name: 'Kakao Pixel',
            icon: '💬',
            idRegexes: [
                /kakaoPixel\(['"](\d+)['"]/gi,
                /t1\.daumcdn\.net\/kas\/static\/kp\.js/gi
            ]
        }
    ];

    function normalizeUrl(input) {
        const trimmed = input.trim();
        if (!trimmed) return '';
        if (/^https?:\/\//i.test(trimmed)) return trimmed;
        return `https://${trimmed}`;
    }

    function decodeHtml(html) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = html;
        return textarea.value;
    }

    async function fetchWithTimeout(resource, options, timeoutMs) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error(`Timeout: ${resource}`)), timeoutMs);
            fetch(resource, options).then(response => {
                clearTimeout(timer);
                resolve(response);
            }).catch(err => {
                clearTimeout(timer);
                reject(err);
            });
        });
    }

    async function fetchHtmlWithFallbacks(inputUrl) {
        let normalized = normalizeUrl(inputUrl);
        if (!normalized) throw new Error('invalid_url');

        const candidates = [
            u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
            u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
            u => `https://r.jina.ai/http://${u.replace(/^https?:\/\//i, '')}`,
            u => `https://r.jina.ai/https://${u.replace(/^https?:\/\//i, '')}`,
            u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u.replace(/^https:\/\//i, 'http://'))}`
        ];

        let lastError = null;
        for (let i = 0; i < candidates.length; i += 1) {
            const endpoint = candidates[i](normalized);
            try {
                const res = await fetchWithTimeout(endpoint, { method: 'GET' }, 20000);
                if (!res.ok) {
                    lastError = new Error(`HTTP ${res.status}`);
                    continue;
                }
                const text = await res.text();
                if (text && text.length > 0) {
                    return { html: text, source: endpoint };
                }
                lastError = new Error('Empty response');
            } catch (error) {
                lastError = error;
            }
        }
        throw lastError || new Error('fetch_failed');
    }

    function collectIds(regex, source, ids) {
        const r = new RegExp(regex.source, regex.flags.includes('i') ? 'gi' : 'g');
        let match;
        while ((match = r.exec(source)) !== null) {
            ids.add(match[1] || match[0]);
        }
    }

    function analyzeTrackerPatterns(html) {
        const decoded = decodeHtml(html);
        const results = TRACKERS.map(tracker => {
            const ids = new Set();

            tracker.idRegexes.forEach(regex => {
                collectIds(regex, html, ids);
                collectIds(regex, decoded, ids);
            });

            return {
                name: tracker.name,
                icon: tracker.icon,
                detected: ids.size > 0,
                ids: Array.from(ids)
            };
        });

        return results;
    }

    function createTrackerCard(tracker) {
        const card = document.createElement('div');
        card.className = `tracker-card ${tracker.detected ? 'detected' : 'not-detected'}`;

        const status = tracker.detected ? '검출됨' : '미검출';
        const statusClass = tracker.detected ? 'detected' : 'not-detected';

        card.innerHTML = `
            <div class="tracker-header">
                <div class="tracker-title">
                    <span class="tracker-icon">${tracker.icon}</span>
                    <span class="tracker-name">${tracker.name}</span>
                </div>
                <span class="status-badge ${statusClass}">${status}</span>
            </div>
            ${tracker.detected ? `
                <div class="tracker-details">
                    <div class="detail-section">
                        <div class="detail-label">매체 ID:</div>
                        <div class="ids-container">
                            ${tracker.ids.map(id => `<span class="id-tag">${id}</span>`).join('')}
                        </div>
                    </div>
                </div>
            ` : '<div class="no-details">상세 정보를 찾을 수 없습니다.</div>'}
        `;

        return card;
    }

    function displayResults(url, trackers, elements) {
        const { urlInfo, resultsHeader, trackerGrid, resultsSection, emptyState, advancedGuide } = elements;
        const detectedCount = trackers.filter(t => t.detected).length;

        urlInfo.innerHTML = `
            <strong>분석 URL:</strong>
            <a href="${url}" target="_blank" rel="noopener noreferrer">${url} 🔗</a>
        `;

        resultsHeader.textContent = `검출된 트래킹 태그 (${detectedCount}/${trackers.length})`;
        trackerGrid.innerHTML = '';
        trackers.forEach(tracker => trackerGrid.appendChild(createTrackerCard(tracker)));

        const gtmDetected = trackers.find(t => t.name === 'GTM')?.detected;
        if (gtmDetected) {
            elements.advancedGuide?.classList.remove('hidden');
        } else {
            elements.advancedGuide?.classList.add('hidden');
        }

        const ga4Detected = trackers.find(t => t.name === 'GA4')?.detected;
        if (ga4Detected) {
            elements.ga4Guide?.classList.remove('hidden');
        } else {
            elements.ga4Guide?.classList.add('hidden');
        }

        elements.resultsSection.style.display = 'block';
        elements.emptyState.style.display = 'none';
    }

    function saveResultsToSession(url, trackers) {
        try {
            const payload = {
                url,
                trackers,
                timestamp: Date.now()
            };
            sessionStorage.setItem('pageTagDiagnosticResults', JSON.stringify(payload));
        } catch (error) {
            // ignore storage errors
        }
    }

    function restoreResults(elements, urlInput) {
        try {
            const stored = sessionStorage.getItem('pageTagDiagnosticResults');
            if (!stored) return;
            const data = JSON.parse(stored);
            if (!data || !data.url || !Array.isArray(data.trackers)) return;
            urlInput.value = data.url;
            displayResults(data.url, data.trackers, elements);
        } catch (error) {
            // ignore parsing errors
        }
    }

    function resetResults(elements, urlInput, errorMessage) {
        sessionStorage.removeItem('pageTagDiagnosticResults');
        if (urlInput) {
            urlInput.value = '';
        }
        if (errorMessage) {
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
        }
        elements.urlInfo.innerHTML = '';
        elements.resultsHeader.textContent = '';
        elements.trackerGrid.innerHTML = '';
        elements.resultsSection.style.display = 'none';
        elements.emptyState.style.display = 'block';
        elements.advancedGuide?.classList.add('hidden');
        elements.ga4Guide?.classList.add('hidden');
    }

    function createTrackerPreview(previewGrid) {
        previewGrid.innerHTML = '';
        TRACKERS.forEach(tracker => {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            previewItem.innerHTML = `
                <div class="preview-icon">${tracker.icon}</div>
                <div class="preview-name">${tracker.name}</div>
            `;
            previewGrid.appendChild(previewItem);
        });
    }

    window.pageInitHandlers = window.pageInitHandlers || {};
    window.pageInitHandlers['page-tag'] = function () {
        const root = document.getElementById('page-tag-diagnostic');
        if (!root) return;

        const urlInput = root.querySelector('#urlInput');
        const analyzeBtn = root.querySelector('#analyzeBtn');
        const btnText = root.querySelector('#btnText');
        const progressWrap = root.querySelector('[data-role="progress-wrap"]');
        const progressFill = root.querySelector('[data-role="progress-fill"]');
        const progressText = root.querySelector('[data-role="progress-text"]');
        const errorMessage = root.querySelector('#errorMessage');
        const resultsSection = root.querySelector('#resultsSection');
        const urlInfo = root.querySelector('#urlInfo');
        const resultsHeader = root.querySelector('#resultsHeader');
        const trackerGrid = root.querySelector('#trackerGrid');
        const emptyState = root.querySelector('#emptyState');
        const trackerPreviewGrid = root.querySelector('#trackerPreviewGrid');
        const advancedGuide = root.querySelector('[data-role="advanced-guide"]');
        const ga4Guide = root.querySelector('[data-role="ga4-guide"]');
        const openExtensions = root.querySelector('[data-role="open-extensions"]');
        const openGa4Experience = root.querySelector('[data-role="open-ga4-experience"]');
        const resetButton = root.querySelector('[data-role="results-reset"]');

        if (!urlInput || !analyzeBtn || !btnText || !progressWrap || !progressFill || !progressText || !errorMessage || !resultsSection || !urlInfo || !resultsHeader || !trackerGrid || !emptyState || !trackerPreviewGrid || !advancedGuide || !openExtensions || !resetButton) return;

        openExtensions.addEventListener('click', () => {
            if (window.navigationInstance && typeof window.navigationInstance.navigateToPage === 'function') {
                window.navigationInstance.navigateToPage('page-tag-extensions', 'quick-menu');
            }
        });

        if (openGa4Experience) {
            openGa4Experience.addEventListener('click', () => {
                if (window.navigationInstance && typeof window.navigationInstance.navigateToPage === 'function') {
                    window.navigationInstance.navigateToPage('ga4-experience', 'quick-menu');
                }
            });
        }

        resetButton.addEventListener('click', () => {
            resetResults({ urlInfo, resultsHeader, trackerGrid, resultsSection, emptyState, advancedGuide, ga4Guide }, urlInput, errorMessage);
        });

        createTrackerPreview(trackerPreviewGrid);
        restoreResults({ urlInfo, resultsHeader, trackerGrid, resultsSection, emptyState, advancedGuide, ga4Guide }, urlInput);

        urlInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') analyzeBtn.click();
        });

        analyzeBtn.addEventListener('click', async () => {
            const url = urlInput.value.trim();
            if (!url) {
                alert('분석할 URL을 입력해주세요.');
                return;
            }

            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
            resultsSection.style.display = 'none';
            emptyState.style.display = 'block';

            analyzeBtn.disabled = true;
            btnText.textContent = '분석 중 (최대 20초)';
            progressWrap.classList.remove('hidden');
            progressFill.style.width = '0%';
            progressText.textContent = '0%';

            const totalMs = 20000;
            const startedAt = Date.now();
            const timer = setInterval(() => {
                const elapsed = Date.now() - startedAt;
                const percent = Math.min(95, Math.round((elapsed / totalMs) * 100));
                progressFill.style.width = `${percent}%`;
                progressText.textContent = `${percent}%`;
            }, 200);

            try {
                const { html } = await fetchHtmlWithFallbacks(url);
                const trackers = analyzeTrackerPatterns(html);
                displayResults(url, trackers, { urlInfo, resultsHeader, trackerGrid, resultsSection, emptyState, advancedGuide, ga4Guide });
                saveResultsToSession(url, trackers);
            } catch (error) {
                errorMessage.textContent = '페이지를 불러올 수 없습니다. URL 또는 보안 정책을 확인해주세요.';
                errorMessage.style.display = 'block';
            } finally {
                analyzeBtn.disabled = false;
                btnText.textContent = '분석하기';
                clearInterval(timer);
                progressFill.style.width = '100%';
                progressText.textContent = '100%';
                setTimeout(() => {
                    progressWrap.classList.add('hidden');
                }, 600);
            }
        });
    };
})();
