// GA4 실전 연동 체험관 페이지
(function () {
    const pageId = 'ga4-experience';

    const contentHTML = `
        <div class="page-content ga4-experience-page">
            <div class="content-hero-box">
                <h1>🧪 GA4 실전 연동 체험관</h1>
                <p>Google OAuth로 실제 GA4 데이터를 연결해, 기본 리포트를 대시보드 형태로 확인합니다.</p>
            </div>

            <div class="article-section">
                <h2>실제 데이터로 배우기</h2>
                <p>구글 OAuth를 통해 실제 GA4 데이터에 접근하여 실무에서 바로 활용할 수 있는 분석 경험을 제공합니다.</p>
                <div class="ga4-feature-grid">
                    <div class="ga4-feature-card">
                        <div class="ga4-feature-icon">🔐</div>
                        <div class="ga4-feature-title">안전한 OAuth 인증</div>
                        <div class="ga4-feature-desc">구글 계정으로 안전하게 로그인하여 GA4 데이터에 접근</div>
                    </div>
                    <div class="ga4-feature-card">
                        <div class="ga4-feature-icon">📊</div>
                        <div class="ga4-feature-title">실시간 대시보드</div>
                        <div class="ga4-feature-desc">실제 GA4 데이터를 기반으로 한 실시간 분석 대시보드</div>
                    </div>
                    <div class="ga4-feature-card">
                        <div class="ga4-feature-icon">📈</div>
                        <div class="ga4-feature-title">인터랙티브 차트</div>
                        <div class="ga4-feature-desc">사용자, 세션, 디바이스별 데이터를 시각화한 차트</div>
                    </div>
                </div>
            </div>

            <div class="article-section">
                <h2>🚀 GA4 Analytics Dashboard</h2>
                <p>구글 애널리틱스 데이터를 실시간으로 확인하세요.</p>

                <div class="ga4-status-indicator" id="ga4Status">API 로딩 중... ⏳</div>

                <div class="ga4-auth-section" id="ga4AuthSection">
                    <h3>시작하기</h3>
                    <p>구글 계정으로 로그인하여 GA4 데이터에 접근하세요.</p>
                    <button class="primary-button ga4-login-button" id="ga4LoginBtn" disabled>Google로 로그인</button>
                    <div class="ga4-error-message" id="ga4ErrorMessage">OAuth 연동 준비 중입니다.</div>
                </div>

                <div class="ga4-account-section" id="ga4AccountSection">
                    <h3>GA4 계정 및 속성 선택</h3>
                    <div class="ga4-select-row">
                        <div class="ga4-select-group">
                            <label for="ga4AccountSelect">계정 선택</label>
                            <select id="ga4AccountSelect">
                                <option value="">계정을 선택하세요</option>
                            </select>
                        </div>
                        <div class="ga4-select-group">
                            <label for="ga4PropertySelect">속성 선택</label>
                            <select id="ga4PropertySelect">
                                <option value="">먼저 계정을 선택하세요</option>
                            </select>
                        </div>
                    </div>
                    <div class="ga4-date-row">
                        <div class="ga4-select-group">
                            <label for="ga4StartDate">시작일</label>
                            <input type="date" id="ga4StartDate" />
                        </div>
                        <div class="ga4-select-group">
                            <label for="ga4EndDate">종료일</label>
                            <input type="date" id="ga4EndDate" />
                        </div>
                        <button class="secondary-button" id="ga4Quick7">최근 7일</button>
                        <button class="secondary-button" id="ga4Quick30">최근 30일</button>
                        <button class="secondary-button" id="ga4Quick90">최근 90일</button>
                    </div>
                    <button class="primary-button" id="ga4LoadReportBtn" disabled>📊 리포트 불러오기</button>
                    <button class="secondary-button" id="ga4LogoutBtn">로그아웃</button>
                </div>

                <div class="ga4-dashboard-preview" id="ga4Dashboard">
                    <div class="ga4-metrics-grid">
                        <div class="ga4-metric-card">
                            <h4>총 사용자</h4>
                            <div class="ga4-metric-value" id="ga4TotalUsers">-</div>
                            <div class="ga4-metric-meta">조회 기간 합계</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>신규 사용자</h4>
                            <div class="ga4-metric-value" id="ga4NewUsers">-</div>
                            <div class="ga4-metric-meta">조회 기간 합계</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>세션수</h4>
                            <div class="ga4-metric-value" id="ga4Sessions">-</div>
                            <div class="ga4-metric-meta">조회 기간 합계</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>조회수</h4>
                            <div class="ga4-metric-value" id="ga4PageViews">-</div>
                            <div class="ga4-metric-meta">조회 기간 합계</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>참여율</h4>
                            <div class="ga4-metric-value" id="ga4EngagementRate">-</div>
                            <div class="ga4-metric-meta">조회 기간 평균</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>이탈률</h4>
                            <div class="ga4-metric-value" id="ga4BounceRate">-</div>
                            <div class="ga4-metric-meta">조회 기간 평균</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>세션당 페이지 뷰</h4>
                            <div class="ga4-metric-value" id="ga4PagesPerSession">-</div>
                            <div class="ga4-metric-meta">조회 기간 평균</div>
                        </div>
                        <div class="ga4-metric-card">
                            <h4>평균 세션 시간</h4>
                            <div class="ga4-metric-value" id="ga4AvgSessionDuration">-</div>
                            <div class="ga4-metric-meta">조회 기간 평균</div>
                        </div>
                    </div>

                    <div class="ga4-chart-grid">
                        <div class="ga4-chart-card">
                            <h4>📅 일별 사용자 및 세션 추이</h4>
                            <div class="ga4-table-placeholder" id="ga4TrendTable">데이터 없음</div>
                        </div>
                        <div class="ga4-chart-card">
                            <h4>📱 디바이스별 분석</h4>
                            <div class="ga4-table-placeholder" id="ga4DeviceTable">데이터 없음</div>
                        </div>
                    </div>

                    <div class="ga4-table-card">
                        <h4>🌐 유입 채널 분석</h4>
                        <div class="ga4-table-placeholder" id="ga4ChannelTable">데이터 없음</div>
                    </div>

                    <div class="ga4-table-card">
                        <h4>🔥 인기 페이지 TOP 10</h4>
                        <div class="ga4-table-placeholder" id="ga4PageTable">데이터 없음</div>
                    </div>

                    <div class="ga4-table-card">
                        <h4>🎯 주요 이벤트 TOP 10</h4>
                        <div class="ga4-table-placeholder" id="ga4EventTable">데이터 없음</div>
                    </div>

                    <div class="ga4-table-card">
                        <h4>🌍 지역별 사용자 분포</h4>
                        <div class="ga4-table-placeholder" id="ga4GeoTable">데이터 없음</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    window.pageContentsOverrides = window.pageContentsOverrides || {};
    window.pageContentsOverrides[pageId] = {
        title: 'GA4 실전 연동 체험관',
        content: contentHTML
    };

    window.pageInitHandlers = window.pageInitHandlers || {};
    window.pageInitHandlers[pageId] = function () {
        const statusEl = document.getElementById('ga4Status');
        const loginBtn = document.getElementById('ga4LoginBtn');
        const errorEl = document.getElementById('ga4ErrorMessage');
        const accountSection = document.getElementById('ga4AccountSection');
        const accountSelect = document.getElementById('ga4AccountSelect');
        const propertySelect = document.getElementById('ga4PropertySelect');
        const loadBtn = document.getElementById('ga4LoadReportBtn');
        const logoutBtn = document.getElementById('ga4LogoutBtn');
        const startDateInput = document.getElementById('ga4StartDate');
        const endDateInput = document.getElementById('ga4EndDate');
        const quick7 = document.getElementById('ga4Quick7');
        const quick30 = document.getElementById('ga4Quick30');
        const quick90 = document.getElementById('ga4Quick90');

        const metrics = {
            totalUsers: document.getElementById('ga4TotalUsers'),
            newUsers: document.getElementById('ga4NewUsers'),
            sessions: document.getElementById('ga4Sessions'),
            pageViews: document.getElementById('ga4PageViews'),
            engagementRate: document.getElementById('ga4EngagementRate'),
            bounceRate: document.getElementById('ga4BounceRate'),
            pagesPerSession: document.getElementById('ga4PagesPerSession'),
            avgSessionDuration: document.getElementById('ga4AvgSessionDuration')
        };

        const tables = {
            trend: document.getElementById('ga4TrendTable'),
            device: document.getElementById('ga4DeviceTable'),
            channel: document.getElementById('ga4ChannelTable'),
            page: document.getElementById('ga4PageTable'),
            event: document.getElementById('ga4EventTable'),
            geo: document.getElementById('ga4GeoTable')
        };

        if (!statusEl || !loginBtn || !errorEl || !accountSection || !accountSelect || !propertySelect || !loadBtn || !logoutBtn || !startDateInput || !endDateInput || !quick7 || !quick30 || !quick90) {
            return;
        }

        const setStatus = (message, isError = false) => {
            statusEl.textContent = message;
            statusEl.style.backgroundColor = isError ? '#fee2e2' : '#f1f5f9';
            statusEl.style.borderColor = isError ? '#fecaca' : '#e2e8f0';
            statusEl.style.color = isError ? '#b91c1c' : '#374151';
        };

        const showError = (message) => {
            errorEl.textContent = message;
        };

        const formatNumber = value => value ? Number(value).toLocaleString() : '-';
        const formatPercent = value => value ? (Number(value) * 100).toFixed(2) + '%' : '-';
        const formatTime = seconds => {
            if (!seconds) return '-';
            const s = Number(seconds);
            const m = Math.floor(s / 60);
            const r = Math.floor(s % 60);
            return `${m}분 ${r}초`;
        };
        const formatDecimal = value => value ? Number(value).toFixed(2) : '-';

        const renderListTable = (container, rows, columns) => {
            if (!container) return;
            if (!rows || rows.length === 0) {
                container.textContent = '데이터 없음';
                return;
            }
            const header = `<thead><tr>${columns.map(col => `<th>${col.label}</th>`).join('')}</tr></thead>`;
            const body = rows.map(row => `<tr>${columns.map(col => `<td>${row[col.key]}</td>`).join('')}</tr>`).join('');
            container.innerHTML = `<table class="ga4-simple-table">${header}<tbody>${body}</tbody></table>`;
        };

        const setQuickRange = days => {
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - days + 1);
            startDateInput.value = start.toISOString().slice(0, 10);
            endDateInput.value = end.toISOString().slice(0, 10);
        };

        const initDate = () => {
            setQuickRange(7);
        };

        const isLoggedIn = async () => {
            try {
                const res = await fetch('/api/oauth/userinfo');
                return res.ok;
            } catch {
                return false;
            }
        };

        const loadAccounts = async () => {
            const res = await fetch('/api/ga4/accounts');
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || '계정 로드 실패');
            }
            accountSelect.innerHTML = '<option value="">계정을 선택하세요</option>';
            (data.accounts || []).forEach(account => {
                const option = document.createElement('option');
                option.value = account.name;
                option.textContent = account.displayName || account.name;
                accountSelect.appendChild(option);
            });
        };

        const loadProperties = async () => {
            const account = accountSelect.value;
            propertySelect.innerHTML = '<option value="">먼저 계정을 선택하세요</option>';
            loadBtn.disabled = true;
            if (!account) return;
            const res = await fetch(`/api/ga4/properties?account=${encodeURIComponent(account)}`);
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || '속성 로드 실패');
            }
            propertySelect.innerHTML = '<option value="">속성을 선택하세요</option>';
            (data.properties || []).forEach(property => {
                const option = document.createElement('option');
                option.value = property.name.split('/')[1];
                option.textContent = property.displayName || property.name;
                propertySelect.appendChild(option);
            });
        };

        const loadReport = async () => {
            const propertyId = propertySelect.value;
            if (!propertyId) return;
            loadBtn.disabled = true;
            setStatus('리포트 불러오는 중...');
            const res = await fetch('/api/ga4/report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    propertyId,
                    startDate: startDateInput.value,
                    endDate: endDateInput.value
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setStatus('리포트 불러오기 실패', true);
                showError(data.error || '리포트 불러오기 실패');
                loadBtn.disabled = false;
                return;
            }

            const metricRow = data.metricsReport?.rows?.[0]?.metricValues || [];
            metrics.totalUsers.textContent = formatNumber(metricRow[0]?.value);
            metrics.newUsers.textContent = formatNumber(metricRow[1]?.value);
            metrics.sessions.textContent = formatNumber(metricRow[2]?.value);
            metrics.pageViews.textContent = formatNumber(metricRow[3]?.value);
            metrics.engagementRate.textContent = formatPercent(metricRow[4]?.value);
            metrics.bounceRate.textContent = formatPercent(metricRow[5]?.value);
            metrics.pagesPerSession.textContent = formatDecimal(metricRow[6]?.value);
            metrics.avgSessionDuration.textContent = formatTime(metricRow[7]?.value);

            const trendRows = (data.trendReport?.rows || []).map(row => ({
                date: row.dimensionValues[0].value,
                users: formatNumber(row.metricValues[0].value),
                sessions: formatNumber(row.metricValues[1].value)
            }));
            renderListTable(tables.trend, trendRows, [
                { key: 'date', label: '날짜' },
                { key: 'users', label: '사용자' },
                { key: 'sessions', label: '세션' }
            ]);

            const deviceRows = (data.deviceReport?.rows || []).map(row => ({
                device: row.dimensionValues[0].value,
                users: formatNumber(row.metricValues[0].value)
            }));
            renderListTable(tables.device, deviceRows, [
                { key: 'device', label: '디바이스' },
                { key: 'users', label: '사용자' }
            ]);

            const channelRows = (data.channelReport?.rows || []).map(row => ({
                channel: row.dimensionValues[0].value,
                sessions: formatNumber(row.metricValues[0].value)
            }));
            renderListTable(tables.channel, channelRows, [
                { key: 'channel', label: '채널' },
                { key: 'sessions', label: '세션' }
            ]);

            const pageRows = (data.pageReport?.rows || []).map(row => ({
                path: row.dimensionValues[0].value,
                views: formatNumber(row.metricValues[0].value)
            }));
            renderListTable(tables.page, pageRows, [
                { key: 'path', label: '페이지 경로' },
                { key: 'views', label: '조회수' }
            ]);

            const eventRows = (data.eventReport?.rows || []).map(row => ({
                event: row.dimensionValues[0].value,
                count: formatNumber(row.metricValues[0].value)
            }));
            renderListTable(tables.event, eventRows, [
                { key: 'event', label: '이벤트' },
                { key: 'count', label: '횟수' }
            ]);

            const geoRows = (data.geoReport?.rows || []).map(row => ({
                country: row.dimensionValues[0].value,
                users: formatNumber(row.metricValues[0].value)
            }));
            renderListTable(tables.geo, geoRows, [
                { key: 'country', label: '국가' },
                { key: 'users', label: '사용자' }
            ]);

            setStatus('리포트 로드 완료 ✅');
            loadBtn.disabled = false;
        };

        loginBtn.addEventListener('click', () => {
            const returnTo = `${window.location.pathname}?page=ga4-experience&category=quick-menu`;
            window.location.href = `/api/oauth/start?returnTo=${encodeURIComponent(returnTo)}`;
        });

        logoutBtn.addEventListener('click', async () => {
            await fetch('/api/oauth/logout');
            window.location.reload();
        });

        accountSelect.addEventListener('change', () => {
            loadProperties().catch(err => showError(err.message));
        });

        propertySelect.addEventListener('change', () => {
            loadBtn.disabled = !propertySelect.value;
        });

        loadBtn.addEventListener('click', () => {
            loadReport().catch(err => showError(err.message));
        });

        quick7.addEventListener('click', () => setQuickRange(7));
        quick30.addEventListener('click', () => setQuickRange(30));
        quick90.addEventListener('click', () => setQuickRange(90));

        const init = async () => {
            initDate();
            setStatus('API 로딩 완료 ✅');
            const loggedIn = await isLoggedIn();
            if (loggedIn) {
                loginBtn.disabled = true;
                loginBtn.textContent = '로그인 완료';
                accountSection.style.display = 'block';
                try {
                    await loadAccounts();
                } catch (err) {
                    showError(err.message);
                }
            } else {
                loginBtn.disabled = false;
                loginBtn.textContent = 'Google로 로그인';
                accountSection.style.display = 'none';
            }
        };

        init().catch(() => {
            setStatus('API 준비 실패', true);
        });
    };
})();
