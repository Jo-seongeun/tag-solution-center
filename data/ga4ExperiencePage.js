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
                    <p>GA4 계정으로 로그인해서 데이터를 직접 확인하실 수 있습니다.</p>
                    <div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
                        <button class="primary-button ga4-login-button" id="ga4LoginBtn" style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; height: 44px;" disabled>Google로 로그인</button>
                        <button class="secondary-button" id="ga4LogoutBtn" style="display: none; box-sizing: border-box; align-items: center; justify-content: center; height: 44px; background-color: #f3f4f6; color: #4b5563; border-color: #d1d5db; margin: 0;">로그아웃</button>
                    </div>
                    <div class="ga4-error-message" id="ga4ErrorMessage" style="color: #dc2626; margin-top: 10px;"></div>
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
                    <div style="display: flex; gap: 10px; margin-top: 15px;">
                        <button class="primary-button" id="ga4LoadReportBtn" disabled>📊 리포트 불러오기</button>
                        <button class="secondary-button" id="ga4ResetBtn" style="display: none;">초기화</button>
                    </div>
                </div>

                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 30px; margin-bottom: 15px; display: none;" id="ga4DashboardHeader">
                        <h3 style="margin: 0; font-size: 1.25rem;">GA4 리포트 대시보드</h3>
                        <span style="color: #6b7280; font-size: 13px;" id="ga4LastUpdate">마지막 업데이트: -</span>
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

                        <div class="ga4-table-card">
                            <h4>📅 일별 사용자 및 세션 추이</h4>
                            <div class="ga4-table-placeholder" id="ga4TrendTable">데이터 없음</div>
                        </div>

                        <div class="ga4-chart-grid">
                            <div class="ga4-chart-card">
                                <h4>📱 디바이스별 분석</h4>
                                <div class="ga4-table-placeholder" id="ga4DeviceTable">데이터 없음</div>
                            </div>
                            <div class="ga4-chart-card">
                                <h4>🌐 브라우저 분석</h4>
                                <div class="ga4-table-placeholder" id="ga4BrowserTable">데이터 없음</div>
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
        const resetBtn = document.getElementById('ga4ResetBtn');
        const startDateInput = document.getElementById('ga4StartDate');
        const endDateInput = document.getElementById('ga4EndDate');
        const quick7 = document.getElementById('ga4Quick7');
        const quick30 = document.getElementById('ga4Quick30');
        const quick90 = document.getElementById('ga4Quick90');
        const headerEl = document.getElementById('ga4DashboardHeader');
        const lastUpdateEl = document.getElementById('ga4LastUpdate');

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
            browser: document.getElementById('ga4BrowserTable'),
            channel: document.getElementById('ga4ChannelTable'),
            page: document.getElementById('ga4PageTable'),
            event: document.getElementById('ga4EventTable'),
            geo: document.getElementById('ga4GeoTable')
        };

        if (!statusEl || !loginBtn || !accountSection || !accountSelect || !propertySelect || !loadBtn || !logoutBtn || !startDateInput || !endDateInput || !quick7 || !quick30 || !quick90 || !resetBtn || !headerEl || !lastUpdateEl) {
            return;
        }

        const setStatus = (message, isError = false) => {
            statusEl.textContent = message;
            statusEl.style.backgroundColor = isError ? '#fee2e2' : '#f1f5f9';
            statusEl.style.borderColor = isError ? '#fecaca' : '#e2e8f0';
            statusEl.style.color = isError ? '#b91c1c' : '#374151';
        };

        const showError = (message) => {
            if (errorEl) {
                errorEl.textContent = message;
            } else {
                console.error(message);
            }
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

            const maxValues = {};
            columns.forEach(col => {
                if (col.isBar) {
                    maxValues[col.key] = Math.max(...rows.map(r => Number(r[col.key].toString().replace(/,/g, '')) || 0), 1);
                }
            });

            const header = `<thead><tr>${columns.map(col => `<th style="${col.align ? 'text-align:' + col.align : ''}">${col.label}</th>`).join('')}</tr></thead>`;
            const body = rows.map(row => `<tr>${columns.map(col => {
                if (col.isBar) {
                    const valStr = row[col.key];
                    const valNum = Number(valStr.toString().replace(/,/g, '')) || 0;
                    const percent = maxValues[col.key] > 0 ? (valNum / maxValues[col.key]) * 100 : 0;
                    return `<td>
                        <div style="position: relative; width: 100%; min-width: 80px; display: flex; align-items: center; justify-content: flex-end;">
                            <div style="position: absolute; right: 0; top: 10%; bottom: 10%; height: 80%; width: ${percent}%; background-color: rgba(59, 130, 246, 0.15); border-radius: 4px; z-index: 0;"></div>
                            <span style="position: relative; z-index: 1; padding: 4px;">${valStr}</span>
                        </div>
                    </td>`;
                }
                return `<td style="${col.align ? 'text-align:' + col.align + ';' : ''}${col.bold ? 'font-weight:bold;' : ''}">${row[col.key]}</td>`;
            }).join('')}</tr>`).join('');
            container.innerHTML = `<table class="ga4-simple-table">${header}<tbody>${body}</tbody></table>`;
        };

        const renderPieChart = (container, rows, valueKey, labelKey) => {
            if (!container || !rows || rows.length === 0) return;
            const total = rows.reduce((sum, r) => sum + (Number(r[valueKey].toString().replace(/,/g, '')) || 0), 0);
            if (total === 0) return;

            const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
            let currentAngle = 0;
            const gradientStops = [];
            const legendHtml = [];

            rows.slice(0, 5).forEach((row, i) => { // Top 5 for chart
                const val = Number(row[valueKey].toString().replace(/,/g, '')) || 0;
                const percent = (val / total) * 100;
                const degrees = (percent / 100) * 360;
                gradientStops.push(`${colors[i]} ${currentAngle}deg ${currentAngle + degrees}deg`);
                legendHtml.push(`
                    <div style="display: flex; align-items: center; gap: 4px; font-size: 12px; margin-bottom: 4px;">
                        <div style="width: 12px; height: 12px; background-color: ${colors[i]}; border-radius: 2px;"></div>
                        <span>${row[labelKey]}: ${row[valueKey]} (${percent.toFixed(1)}%)</span>
                    </div>
                `);
                currentAngle += degrees;
            });
            // Other logic for remaining rows if needed, but top 5 is fine.

            const pieChartHtml = `
                <div style="display: flex; gap: 20px; align-items: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <div style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(${gradientStops.join(', ')});"></div>
                    <div>
                        ${legendHtml.join('')}
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', pieChartHtml);
        };

        const renderLineChart = (container, rows) => {
            if (!container || !rows || rows.length === 0) {
                container.textContent = '데이터 없음';
                return;
            }

            // Sort rows by date ascending
            rows.sort((a, b) => new Date(a.date) - new Date(b.date));

            const maxUsers = Math.max(...rows.map(r => Number(r.users.toString().replace(/,/g, '')) || 0), 10);
            const maxSessions = Math.max(...rows.map(r => Number(r.sessions.toString().replace(/,/g, '')) || 0), 10);
            const absoluteMax = Math.max(maxUsers, maxSessions);

            const width = 800;
            const height = 300;
            const padding = { top: 20, right: 20, bottom: 40, left: 50 };
            const chartWidth = width - padding.left - padding.right;
            const chartHeight = height - padding.top - padding.bottom;

            const getX = (index) => padding.left + (index * (chartWidth / Math.max(rows.length - 1, 1)));
            const getY = (value) => padding.top + chartHeight - ((value / absoluteMax) * chartHeight);

            let usersPath = '';
            let sessionsPath = '';
            let circlesHtml = '';
            let xAxisHtml = '';

            rows.forEach((row, index) => {
                const uVal = Number(row.users.toString().replace(/,/g, '')) || 0;
                const sVal = Number(row.sessions.toString().replace(/,/g, '')) || 0;

                const x = getX(index);
                const uy = getY(uVal);
                const sy = getY(sVal);

                if (index === 0) {
                    usersPath += `M ${x} ${uy}`;
                    sessionsPath += `M ${x} ${sy}`;
                } else {
                    usersPath += ` L ${x} ${uy}`;
                    sessionsPath += ` L ${x} ${sy}`;
                }

                circlesHtml += `
                    <circle cx="${x}" cy="${uy}" r="4" fill="#3b82f6" stroke="#fff" stroke-width="2">
                        <title>${row.date}: 사용자 ${row.users}</title>
                    </circle>
                    <circle cx="${x}" cy="${sy}" r="4" fill="#10b981" stroke="#fff" stroke-width="2">
                        <title>${row.date}: 세션 ${row.sessions}</title>
                    </circle>
                `;

                // Add date labels (skip some if too many)
                if (rows.length <= 10 || index % Math.ceil(rows.length / 7) === 0 || index === rows.length - 1) {
                    const shortDate = row.date.substring(4, 6) + '/' + row.date.substring(6, 8); // YYYYMMDD -> YYYY-MM-DD -> MM/DD (assuming format like 20231024 or similar, if standard Date string just slice)
                    let displayDate = row.date;
                    if (row.date.length === 8 && !row.date.includes('-')) displayDate = `${row.date.substring(4, 6)}/${row.date.substring(6, 8)}`;
                    else if (row.date.includes('-')) displayDate = row.date.substring(5);

                    xAxisHtml += `
                        <text x="${x}" y="${height - 10}" font-size="12" fill="#6b7280" text-anchor="middle">${displayDate}</text>
                    `;
                }
            });

            // Grid lines (y-axis)
            let gridHtml = '';
            for (let i = 0; i <= 4; i++) {
                const stepVal = (absoluteMax / 4) * i;
                const y = getY(stepVal);
                gridHtml += `
                    <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="#e5e7eb" stroke-dasharray="4" />
                    <text x="${padding.left - 10}" y="${y + 4}" font-size="12" fill="#6b7280" text-anchor="end">${Math.round(stepVal).toLocaleString()}</text>
                `;
            }

            const svgHtml = `
                <div style="width: 100%; overflow-x: auto; margin-top: 10px;">
                    <div style="display: flex; gap: 15px; justify-content: flex-end; margin-bottom: 10px; font-size: 13px;">
                        <span style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 3px; background: #3b82f6;"></div>사용자</span>
                        <span style="display: flex; align-items: center; gap: 5px;"><div style="width: 12px; height: 3px; background: #10b981;"></div>세션</span>
                    </div>
                    <svg viewBox="0 0 ${width} ${height}" style="width: 100%; min-width: 500px; height: auto;">
                        ${gridHtml}
                        <path d="${usersPath}" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="${sessionsPath}" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        ${xAxisHtml}
                        ${circlesHtml}
                    </svg>
                </div>
            `;

            container.innerHTML = svgHtml;
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

            sessionStorage.setItem('ga4__reportData', JSON.stringify(data));
            sessionStorage.setItem('ga4__accountId', accountSelect.value);
            sessionStorage.setItem('ga4__propertyId', propertySelect.value);
            sessionStorage.setItem('ga4__startDate', startDateInput.value);
            sessionStorage.setItem('ga4__endDate', endDateInput.value);

            const now = new Date();
            const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            sessionStorage.setItem('ga4__lastUpdate', timestamp);

            renderReportData(data, timestamp);
            loadBtn.disabled = false;
        };

        const renderReportData = (data, timestampOptions) => {
            const metricRow = data.metricsReport?.rows?.[0]?.metricValues || [];
            const ttUsers = Number(metricRow[0]?.value) || 1;
            const ttSessions = Number(metricRow[2]?.value) || 1;
            const ttPageViews = Number(metricRow[3]?.value) || 1;

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
            renderLineChart(tables.trend, trendRows);

            const deviceRows = (data.deviceReport?.rows || []).map((row, i) => {
                const val = Number(row.metricValues[0].value) || 0;
                return {
                    rank: i + 1,
                    device: row.dimensionValues[0].value,
                    users: formatNumber(val),
                    ratio: ((val / ttUsers) * 100).toFixed(1) + '%'
                };
            }).slice(0, 10);
            renderListTable(tables.device, deviceRows, [
                { key: 'rank', label: '순위', align: 'center', bold: true },
                { key: 'device', label: '디바이스' },
                { key: 'users', label: '사용자 수', isBar: true },
                { key: 'ratio', label: '비율', align: 'right' }
            ]);
            renderPieChart(tables.device, deviceRows, 'users', 'device');

            const browserRows = (data.browserReport?.rows || []).map((row, i) => {
                const val = Number(row.metricValues[0].value) || 0;
                return {
                    rank: i + 1,
                    browser: row.dimensionValues[0].value,
                    sessions: formatNumber(val),
                    ratio: ((val / ttSessions) * 100).toFixed(1) + '%'
                };
            }).slice(0, 10);
            renderListTable(tables.browser, browserRows, [
                { key: 'rank', label: '순위', align: 'center', bold: true },
                { key: 'browser', label: '브라우저' },
                { key: 'sessions', label: '세션 수', isBar: true },
                { key: 'ratio', label: '비율', align: 'right' }
            ]);

            const channelRows = (data.channelReport?.rows || []).map((row, i) => {
                const val = Number(row.metricValues[0].value) || 0;
                return {
                    rank: i + 1,
                    channel: row.dimensionValues[0].value,
                    sessions: formatNumber(val),
                    ratio: ((val / ttSessions) * 100).toFixed(1) + '%'
                };
            }).slice(0, 10);
            renderListTable(tables.channel, channelRows, [
                { key: 'rank', label: '순위', align: 'center', bold: true },
                { key: 'channel', label: '채널' },
                { key: 'sessions', label: '세션 수', isBar: true },
                { key: 'ratio', label: '비율', align: 'right' }
            ]);

            const pageRows = (data.pageReport?.rows || []).map((row, i) => {
                const val = Number(row.metricValues[0].value) || 0;
                return {
                    rank: i + 1,
                    path: row.dimensionValues[0].value,
                    views: formatNumber(val),
                    ratio: ((val / ttPageViews) * 100).toFixed(1) + '%'
                };
            }).slice(0, 10);
            renderListTable(tables.page, pageRows, [
                { key: 'rank', label: '순위', align: 'center', bold: true },
                { key: 'path', label: '페이지 경로' },
                { key: 'views', label: '페이지뷰', isBar: true },
                { key: 'ratio', label: '비율', align: 'right' }
            ]);

            const getEventBadge = (eventName) => {
                const defaultEvents = ['session_start', 'first_visit', 'page_view', 'user_engagement', 'scroll', 'click', 'file_download', 'video_start', 'video_progress', 'video_complete', 'view_search_results', 'form_start', 'form_submit'];
                const ecommerceEvents = ['view_item', 'view_item_list', 'select_item', 'add_to_cart', 'remove_from_cart', 'view_cart', 'begin_checkout', 'add_shipping_info', 'add_payment_info', 'purchase', 'refund', 'generate_lead'];

                if (defaultEvents.includes(eventName)) {
                    return `<span style="padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: 500; background-color: #e0f2fe; color: #0369a1;">기본 이벤트</span>`;
                }
                if (ecommerceEvents.includes(eventName)) {
                    return `<span style="padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: 500; background-color: #f3e8ff; color: #7e22ce;">전자상거래</span>`;
                }
                return `<span style="padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: 500; background-color: #dcfce7; color: #15803d;">커스텀</span>`;
            };

            const eventRows = (data.eventReport?.rows || []).map((row, i) => ({
                rank: i + 1,
                event: row.dimensionValues[0].value,
                count: formatNumber(row.metricValues[0].value),
                note: getEventBadge(row.dimensionValues[0].value)
            })).slice(0, 10);
            renderListTable(tables.event, eventRows, [
                { key: 'rank', label: '순위', align: 'center', bold: true },
                { key: 'event', label: '이벤트명' },
                { key: 'count', label: '발생횟수', isBar: true },
                { key: 'note', label: '비고', align: 'center' }
            ]);

            const geoRows = (data.geoReport?.rows || []).map((row, i) => {
                const val = Number(row.metricValues[0].value) || 0;
                return {
                    rank: i + 1,
                    country: row.dimensionValues[0].value,
                    users: formatNumber(val),
                    ratio: ((val / ttUsers) * 100).toFixed(1) + '%'
                };
            }).slice(0, 10);
            renderListTable(tables.geo, geoRows, [
                { key: 'rank', label: '순위', align: 'center', bold: true },
                { key: 'country', label: '국가' },
                { key: 'users', label: '사용자 수', isBar: true },
                { key: 'ratio', label: '비율', align: 'right' }
            ]);

            setStatus('리포트 로드 완료 ✅');
            showError('');
            resetBtn.style.display = 'inline-block';
            headerEl.style.display = 'flex';
            lastUpdateEl.textContent = `마지막 업데이트: ${timestampOptions || '-'}`;
        };

        loginBtn.addEventListener('click', () => {
            const returnTo = `${window.location.origin}${window.location.pathname}?page=ga4-oauth-success`;
            const authUrl = `${window.location.origin}/api/oauth/start?returnTo=${encodeURIComponent(returnTo)}`;

            const width = 500;
            const height = 600;
            const left = (window.innerWidth / 2) - (width / 2);
            const top = (window.innerHeight / 2) - (height / 2);

            const authWindow = window.open(
                authUrl,
                'ga4_oauth_window',
                `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,status=yes,resizable=yes`
            );

            if (!authWindow || authWindow.closed || typeof authWindow.closed === 'undefined') {
                alert('팝업 차단이 감지되었습니다. 원활한 로그인을 위해 현재 사이트의 팝업 차단을 해제해 주세요.');
                // 팝업 차단 시 기본 페이지 이동 (대시보드로 복귀하도록)
                const fallbackReturnTo = `${window.location.origin}${window.location.pathname}?page=ga4-experience&category=quick-menu`;
                window.location.href = `/api/oauth/start?returnTo=${encodeURIComponent(fallbackReturnTo)}`;
                return;
            }

            const timer = setInterval(async () => {
                if (authWindow.closed) {
                    clearInterval(timer);
                    const loggedIn = await isLoggedIn();
                    if (loggedIn) {
                        window.location.reload();
                    }
                }
            }, 500);
        });

        logoutBtn.addEventListener('click', async () => {
            await fetch('/api/oauth/logout');
            sessionStorage.removeItem('ga4__reportData');
            sessionStorage.removeItem('ga4__accountId');
            sessionStorage.removeItem('ga4__propertyId');
            sessionStorage.removeItem('ga4__startDate');
            sessionStorage.removeItem('ga4__endDate');
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

        resetBtn.addEventListener('click', () => {
            sessionStorage.removeItem('ga4__reportData');
            sessionStorage.removeItem('ga4__accountId');
            sessionStorage.removeItem('ga4__propertyId');
            sessionStorage.removeItem('ga4__startDate');
            sessionStorage.removeItem('ga4__endDate');
            sessionStorage.removeItem('ga4__lastUpdate');

            accountSelect.value = '';
            propertySelect.innerHTML = '<option value="">먼저 계정을 선택하세요</option>';
            initDate();
            loadBtn.disabled = true;
            resetBtn.style.display = 'none';
            headerEl.style.display = 'none';

            Object.values(metrics).forEach(el => el.textContent = '-');
            Object.values(tables).forEach(el => el.textContent = '데이터 없음');

            showError('');
            setStatus('초기화 완료. 계정과 속성을 다시 선택해주세요.');
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
                logoutBtn.style.display = 'flex';
                accountSection.style.display = 'block';
                try {
                    await loadAccounts();
                    showError('');

                    const savedReportData = sessionStorage.getItem('ga4__reportData');
                    const savedAccountId = sessionStorage.getItem('ga4__accountId');
                    const savedPropertyId = sessionStorage.getItem('ga4__propertyId');
                    const savedStart = sessionStorage.getItem('ga4__startDate');
                    const savedEnd = sessionStorage.getItem('ga4__endDate');
                    const savedLastUpdate = sessionStorage.getItem('ga4__lastUpdate');

                    if (savedReportData && savedAccountId) {
                        accountSelect.value = savedAccountId;
                        await loadProperties();
                        if (savedPropertyId) propertySelect.value = savedPropertyId;
                        if (savedStart) startDateInput.value = savedStart;
                        if (savedEnd) endDateInput.value = savedEnd;

                        loadBtn.disabled = !propertySelect.value;
                        renderReportData(JSON.parse(savedReportData), savedLastUpdate);
                    }
                } catch (err) {
                    showError(err.message);
                }
            } else {
                loginBtn.disabled = false;
                loginBtn.textContent = 'Google로 로그인';
                logoutBtn.style.display = 'none';
                accountSection.style.display = 'none';
            }
        };

        init().catch(() => {
            setStatus('API 준비 실패', true);
        });
    };
})();
