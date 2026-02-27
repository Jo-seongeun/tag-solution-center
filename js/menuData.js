// 메뉴 데이터 구조
const menuData = {
    // 퀵 도구 카테고리
    'quick-menu': {
        title: '🔧 퀵 도구',
        subtitle: '광고 운영에 필요한 핵심 도구를 빠르게 실행합니다.',
        sectionTitle: '도구 목록',
        items: [
            {
                id: 'page-tag',
                name: '페이지 태그 진단',
                icon: '🔍'
            },
            {
                id: 'tag-total-sample',
                name: '매체별 태그 샘플',
                icon: '🏷️'
            },
            {
                id: 'tag-basic',
                name: '기본 태그 설정',
                icon: '📋'
            },
            {
                id: 'tag-advanced',
                name: '전환 태그 설정',
                icon: '⚙️'
            },
            {
                id: 'tag-ecommerce',
                name: '전자상거래 태그 설정',
                icon: '🔗'
            }
        ]
    },

    // 지식 센터 카테고리
    'data-center': {
        title: '💡 지식 센터',
        subtitle: '분석과 태그 지식의 기초부터 심화까지 제공합니다.',
        sectionTitle: '학습 콘텐츠',
        items: [
            {
                id: 'ga4-setup',
                name: 'GA4 기초 및 심화',
                icon: '📊'
            },
            {
                id: 'gtm-setup',
                name: 'GTM 기초 및 심화',
                icon: '🏷️'
            },
            {
                id: 'data-layer',
                name: '데이터 레이어 설계',
                icon: '🗂️'
            },
            {
                id: 'troubleshooting',
                name: '트러블슈팅 & QA',
                icon: '🔧'
            }
        ]
    },

    // 설정 및 가이드 카테고리
    'guide': {
        title: '📝 설정 및 가이드',
        subtitle: '실무에서 바로 쓰는 체크리스트와 가이드를 모았습니다.',
        sectionTitle: '가이드 목록',
        items: [
            {
                id: 'program-guide',
                name: '필수 확장 프로그램 가이드',
                icon: '💡'
            }
        ]
    }
};

// 페이지별 사이드바 오버라이드 (필요한 페이지에만 추가해서 사용)
// 예: pageSidebarOverrides['page-tag'] = { title, subtitle, sectionTitle, items }
const tagCreationSidebarData = {
    title: '광고 태그 도구',
    subtitle: '광고 태그 맞춤 자동 생성',
    sectionTitle: '태그 생성',
    items: [
        { id: 'tag-basic', name: '기본 태그 생성', icon: '📋' },
        { id: 'tag-advanced', name: '전환 태그 생성', icon: '⚙️' },
        { id: 'tag-ecommerce', name: '전자상거래 태그 생성', icon: '🛒' }
    ]
};

const ga4SidebarData = {
    title: 'Google Analytics4',
    subtitle: '사용자 분석과 비즈니스 인사이트 발견',
    sectionTitle: 'GA4',
    items: [
        { id: 'ga4-setup', name: 'GA4 개요', icon: '📊', category: 'data-center' },
        { id: 'ga4-intro', name: 'Intro', icon: '🧭', category: 'data-center' },
        { id: 'ga4-understanding', name: 'GA4 이해', icon: '📘', category: 'data-center' },
        { id: 'ga4-install', name: '가입 및 설치', icon: '📝', category: 'data-center' },
        { id: 'ga4-events', name: '이벤트 설정', icon: '⚡', category: 'data-center' },
        { id: 'ga4-integrations', name: '연동 메뉴얼', icon: '🔗', category: 'data-center' },
        { id: 'ga4-ecommerce', name: '전자상거래 태그', icon: '🛒', category: 'data-center' },
        { id: 'ga4-conversion', name: '전환(주요 이벤트)', icon: '🎯', category: 'data-center' },
        { id: 'ga4-audience', name: '잠재고객 설정', icon: '👥', category: 'data-center' },
        { id: 'ga4-case', name: '사례 연구', icon: '📌', category: 'data-center' }
    ]
};

const gtmSidebarData = {
    title: 'Google Tag Manager',
    subtitle: '태그를 효율적으로 관리',
    sectionTitle: 'GTM',
    items: [
        { id: 'gtm-setup', name: 'GTM 개요', icon: '🏷️', category: 'data-center' },
        { id: 'gtm-intro', name: 'Intro', icon: '🧭', category: 'data-center' },
        { id: 'gtm-install', name: '가입 및 설치', icon: '📝', category: 'data-center' },
        { id: 'gtm-operations', name: '운영 방법', icon: '🛠️', category: 'data-center' }
    ]
};

const dataLayerSidebarData = {
    title: '데이터 레이어 설계',
    subtitle: '웹사이트와 GTM 간의 안전한 데이터 바구니',
    sectionTitle: '데이터 레이어',
    items: [
        { id: 'data-layer-intro', name: '데이터 레이어란?', icon: '📋', category: 'data-center' },
        { id: 'data-layer', name: '데이터 레이어 실전', icon: '💡', category: 'data-center' }
    ]
};

const troubleshootingSidebarData = {
    title: '트러블슈팅 & QA',
    subtitle: '가장 자주 일어나는 문제',
    sectionTitle: '문제 해결',
    items: [
        { id: 'troubleshooting', name: '트러블슈팅', icon: '🔧', category: 'data-center' },
        { id: 'troubleshooting-qa', name: 'QA', icon: '✅', category: 'data-center' }
    ]
};

const pageSidebarOverrides = {
    // 퀵 도구 > 페이지 태그 진단
    'page-tag': {
        title: '광고 트래킹 태그 분석',
        subtitle: 'URL 내 매체 태그 진단',
        sectionTitle: '분석 도구',
        items: [
            { id: 'page-tag', name: '페이지 태그 진단', icon: '🔍' },
            { id: 'page-tag-extensions', name: '확장 프로그램', icon: '🧩', category: 'quick-menu' },
            { id: 'ga4-experience', name: 'GA4 실전 연동 체험관', icon: '📊', category: 'quick-menu' }
        ]
    },
    'page-tag-extensions': {
        title: '광고 트래킹 태그 분석',
        subtitle: 'URL 내 매체 태그 진단',
        sectionTitle: '분석 도구',
        items: [
            { id: 'page-tag', name: '페이지 태그 진단', icon: '🔍' },
            { id: 'page-tag-extensions', name: '확장 프로그램', icon: '🧩', category: 'quick-menu' },
            { id: 'ga4-experience', name: 'GA4 실전 연동 체험관', icon: '📊', category: 'quick-menu' }
        ]
    },

    // 퀵 도구 > 태그 생성 (동일 사이드바)
    'tag-basic': tagCreationSidebarData,
    'tag-advanced': tagCreationSidebarData,
    'tag-ecommerce': tagCreationSidebarData,

    // 퀵 도구 > GA4 실전 연동 체험관
    'ga4-experience': {
        title: '광고 트래킹 태그 분석',
        subtitle: 'URL 내 매체 태그 진단',
        sectionTitle: '분석 도구',
        items: [
            { id: 'page-tag', name: '페이지 태그 진단', icon: '🔍' },
            { id: 'page-tag-extensions', name: '확장 프로그램', icon: '🧩', category: 'quick-menu' },
            { id: 'ga4-experience', name: 'GA4 실전 연동 체험관', icon: '📊', category: 'quick-menu' }
        ]
    },

    // 지식 센터 > GA4 기초 및 심화
    'ga4-setup': ga4SidebarData,
    'ga4-intro': ga4SidebarData,
    'ga4-understanding': ga4SidebarData,
    'ga4-install': ga4SidebarData,
    'ga4-events': ga4SidebarData,
    'ga4-integrations': ga4SidebarData,
    'ga4-ecommerce': ga4SidebarData,
    'ga4-conversion': ga4SidebarData,
    'ga4-audience': ga4SidebarData,
    'ga4-case': ga4SidebarData,

    // 지식 센터 > GTM 기초 및 심화
    'gtm-setup': gtmSidebarData,
    'gtm-intro': gtmSidebarData,
    'gtm-install': gtmSidebarData,
    'gtm-operations': gtmSidebarData,

    // 지식 센터 > 데이터 레이어 설계
    'data-layer': dataLayerSidebarData,
    'data-layer-intro': dataLayerSidebarData,

    // 지식 센터 > 트러블 슈팅 & QA
    'troubleshooting': troubleshootingSidebarData,
    'troubleshooting-qa': troubleshootingSidebarData,

    // 설정 및 가이드 > 필수 확장 프로그램 가이드
    'program-guide': {
        title: '확장 프로그램',
        subtitle: '브라우저 프로그램',
        sectionTitle: '확장 프로그램',
        items: [
            { name: 'Intro', icon: '🧭' },
            { name: '추천 확장 프로그램', icon: '⭐' }
        ]
    }
};

// 매체별 태그 샘플 전용 사이드바 데이터 연결
const resolvedTagSampleSidebarData = window.tagSampleSidebarData || {
    title: '매체별 태그 샘플',
    subtitle: '매체별 기본 태그와 전환 태그 예시를 제공합니다.',
    sectionTitle: '매체 목록',
    items: [
        { id: 'tag-sample-gtm', name: 'GTM', icon: '🏷️' },
        { id: 'tag-sample-ga4', name: 'GA4', icon: '📊' },
        { id: 'tag-sample-google-ads', name: 'Google Ads', icon: '🧩' },
        { id: 'tag-sample-meta', name: 'Meta', icon: '📘' },
        { id: 'tag-sample-tiktok', name: 'Tiktok', icon: '🎵' },
        { id: 'tag-sample-kakao', name: 'Kakao', icon: '💬' }
    ]
};

menuData['tag-sample'] = resolvedTagSampleSidebarData;

// 페이지 컨텐츠 템플릿
const pageContents = {
    'page-tag': {
        title: '페이지 태그 진단',
        content: `
            <div class="page-content url-check-page" id="page-tag-diagnostic">
                <div class="url-check-header">
                    <h1>🔍 광고 트래킹 태그 분석기</h1>
                    <p>페이지 URL을 입력하면 사용 중인 광고 매체 트랙 태그를 실시간으로 분석합니다</p>
                </div>

                <div class="usage-guide tag-section">
                    <h3>💡 사용 방법</h3>
                    <ul class="info-list">
                        <li>분석하려는 웹페이지의 전체 URL을 입력하세요 (https:// 포함)</li>
                        <li>페이지의 HTML 소스코드에서 트래킹 코드를 실시간으로 검색합니다</li>
                        <li>각 매체의 ID와 호출되는 이벤트 이름을 확인할 수 있습니다</li>
                        <li>일부 사이트는 CORS 정책으로 분석이 제한될 수 있습니다</li>
                    </ul>
                </div>

                <div class="input-section">
                    <div class="input-group">
                        <input type="text" id="urlInput" class="url-input" placeholder="https://example.com" />
                        <button id="analyzeBtn" class="analyze-btn">
                            <span id="btnText">분석하기</span>
                        </button>
                    </div>
                    <div class="progress-wrap hidden" data-role="progress-wrap">
                        <div class="progress-bar">
                            <div class="progress-fill" data-role="progress-fill"></div>
                        </div>
                        <div class="progress-text" data-role="progress-text">0%</div>
                    </div>
                    <div id="errorMessage" class="error-message"></div>
                </div>

                <div id="resultsSection" class="results-section">
                    <div id="urlInfo" class="url-info"></div>
                    <div class="results-header-row">
                        <h2 id="resultsHeader" class="results-header"></h2>
                        <button type="button" class="secondary-button reset-button" data-role="results-reset">초기화</button>
                    </div>
                    <div id="trackerGrid" class="tracker-grid"></div>
                </div>

                <div id="emptyState" class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <p>URL을 입력하고 분석하기 버튼을 눌러주세요</p>
                    <p class="empty-state-sub">예: https://www.example.com</p>
                    <div class="tracker-preview">
                        <h3>🔍 검출 가능한 트래킹 매체</h3>
                        <div class="preview-grid" id="trackerPreviewGrid"></div>
                    </div>
                </div>

                <div class="advanced-guide hidden" data-role="advanced-guide">
                    <h3>고급 진단 안내</h3>
                    <p>GTM이 확인되었습니다.<br>GTM으로 삽입되는 태그는 페이지가 열릴 때 추가로 로딩되어,기본 진단에서 놓칠 수 있습니다.<br>더 정확한 확인을 위해 고급 진단을 권장합니다.</p>
                    <div class="advanced-actions">
                        <button class="secondary-button" data-role="open-extensions">확장 프로그램 설치</button>
                        <a class="secondary-button" href="mailto:XX@XX.xxx">XX@XX.xxx 에 문의하기</a>
                    </div>
                </div>

            </div>
        `
    },
    'tag-total-sample': {
        title: '매체별 태그 샘플',
        content: `
            <div class="page-content">
                <h1>🏷️ 매체별 태그 샘플</h1>
                <p>주요 매체별 기본/전환 태그 샘플을 빠르게 확인하세요.</p>
                
                <div class="tool-section">
                    <h3>샘플 보기</h3>
                    <div class="card-grid">
                        <div class="card">
                            <h4>Google Ads</h4>
                            <p>전환 추적 태그 기본 구성 예시</p>
                        </div>
                        <div class="card">
                            <h4>Meta Pixel</h4>
                            <p>기본 이벤트/맞춤 이벤트 예시</p>
                        </div>
                        <div class="card">
                            <h4>Kakao/Kakao Moment</h4>
                            <p>픽셀 설치 및 전환 설정 예시</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'ga4-setup': {
        title: 'GA4 기초 및 설정',
        content: `
            <div class="page-content">
                <h1>📊 GA4 기초 및 설정</h1>
                <p>Google Analytics 4의 기본 개념과 설정 방법을 학습합니다.</p>
                
                <div class="article-section">
                    <h2>GA4란?</h2>
                    <p>Google Analytics 4는 구글의 차세대 웹 분석 플랫폼입니다...</p>
                </div>

                <div class="article-section">
                    <h2>기본 설정 체크리스트</h2>
                    <ul class="info-list">
                        <li>데이터 스트림 생성</li>
                        <li>향상된 측정 활성화</li>
                        <li>내부 트래픽 필터 설정</li>
                    </ul>
                </div>
            </div>
        `
    },
    'gtm-setup': {
        title: 'GTM 기초 및 설정',
        content: `
            <div class="page-content">
                <h1>🏷️ GTM 기초 및 설정</h1>
                <p>Google Tag Manager의 기본 개념과 설정 방법을 학습합니다.</p>

                <div class="article-section">
                    <h2>추천 구성</h2>
                    <ul class="info-list">
                        <li>기본 태그 템플릿 구성</li>
                        <li>변수/트리거 표준화</li>
                        <li>버전 관리 규칙</li>
                    </ul>
                </div>
            </div>
        `
    },
    'data-layer': {
        title: '데이터 레이어 설계',
        content: `
            <div class="page-content">
                <h1>🗂️ 데이터 레이어 설계</h1>
                <p>효과적인 데이터 레이어 구조를 설계하는 방법을 학습합니다.</p>

                <div class="article-section">
                    <h2>설계 원칙</h2>
                    <ul class="info-list">
                        <li>이벤트 단위로 구조화</li>
                        <li>표준 네이밍 규칙 사용</li>
                        <li>문서화 및 버전 관리</li>
                    </ul>
                </div>
            </div>
        `
    },
    'troubleshooting': {
        title: '트러블슈팅 & QA',
        content: `
            <div class="page-content">
                <div class="content-hero-box">
                    <h1>🔧 트러블슈팅 & QA</h1>
                    <p>태그 동작 오류 및 데이터 이상 발생 시 해결 방법을 제공합니다.</p>
                </div>
                
                <div class="faq-section">
                    <h3>자주 묻는 질문</h3>
                    <div class="faq-item">
                        <h4>태그가 로딩되지 않을 때</h4>
                        <p>GTM/스크립트 삽입 위치와 차단 확장 프로그램을 확인하세요.</p>
                    </div>
                    <div class="faq-item">
                        <h4>전환이 잡히지 않을 때</h4>
                        <p>이벤트 명/파라미터가 플랫폼 요구사항과 일치하는지 점검하세요.</p>
                    </div>
                </div>
            </div>
        `
    },
    'page-tag-extensions': {
        title: '확장 프로그램',
        content: `
            <div class="page-content">
                <div class="content-hero-box">
                    <h1>💡 확장 프로그램</h1>
                    <p>디버깅에 필요한 필수 확장 프로그램 설치 및 사용 방법을 안내합니다.</p>
                </div>
                
                <div class="tag-section">
                    <h2>1. Tag Assistant</h2>
                    <p class="section-description">Google 태그(GA4, Google Ads, GTM 등)가 웹사이트에서 어떻게 작동하는지 실시간으로 확인하고 디버깅할 수 있는 공식 확장 프로그램입니다.</p>
                    <div class="notice-box notice-point">
                        <p class="notice-title">주요 기능</p>
                        <ul class="notice-list">
                            <li>GTM 미리보기 및 디버그 모드와 연동</li>
                            <li>실행된 태그 및 발생한 이벤트(DataLayer) 순차적 확인</li>
                            <li>태그 실행 오류 및 중복 설치 진단</li>
                        </ul>
                    </div>
                    <h3>💡 사용 방법</h3>
                    <ol class="info-list">
                        <li>Chrome 웹 스토어에서 <strong>Tag Assistant</strong>를 설치합니다.</li>
                        <li>GTM 작업 공간에서 [미리보기(Preview)] 버튼을 클릭하거나, Tag Assistant 사이트(tagassistant.google.com)에 접속합니다.</li>
                        <li>분석할 웹사이트 URL을 입력하고 <strong>[Connect]</strong>를 클릭합니다.</li>
                        <li>새 창으로 열린 웹사이트에서 행동(클릭, 페이지 이동 등)을 수행합니다.</li>
                        <li>Tag Assistant 창에서 왼쪽 타임라인에 발생한 이벤트를 클릭하여 어떤 태그가 실행(Fired)되었는지 확인합니다.</li>
                    </ol>
                    <div class="advanced-actions" style="margin-top: 1rem;">
                        <a class="secondary-button" href="https://chromewebstore.google.com/detail/tag-assistant/kejbdjndbnbjgmefkgdddjlbokphdefk" target="_blank" rel="noopener noreferrer">Chrome 웹 스토어에서 설치 ↗</a>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>2. Meta Pixel Helper</h2>
                    <p class="section-description">현재 웹페이지에 Meta(Facebook) 픽셀이 정상적으로 설치되어 있는지 확인하고, 이벤트가 올바른 파라미터와 함께 전송되는지 검증하는 공식 도구입니다.</p>
                    <div class="notice-box notice-point">
                        <p class="notice-title">주요 기능</p>
                        <ul class="notice-list">
                            <li>설치된 픽셀 ID 확인</li>
                            <li>전송된 표준 이벤트(PageView, Purchase 등) 및 맞춤 이벤트 확인</li>
                            <li>이벤트 누락, 파라미터 오류 등 문제 해결 팁 제공</li>
                        </ul>
                    </div>
                    <h3>💡 사용 방법</h3>
                    <ol class="info-list">
                        <li>Chrome 웹 스토어에서 <strong>Meta Pixel Helper</strong>를 설치합니다.</li>
                        <li>픽셀이 설치된 웹사이트에 접속합니다.</li>
                        <li>브라우저 우측 상단의 확장 프로그램 아이콘 <code>&lt;/ &gt;</code>이 파란색으로 활성화되는지 확인합니다. (뱃지의 숫자는 발생한 이벤트의 수를 의미합니다.)</li>
                        <li>아이콘을 클릭하여 로드된 픽셀 ID와 이벤트 리스트(예: PageView)를 확인합니다.</li>
                        <li>장바구니 담기, 구매 등의 행동을 한 후, 이벤트 목록에 해당 행동 결과가 잘 수집되는지 점검합니다.</li>
                    </ol>
                    <div class="advanced-actions" style="margin-top: 1rem;">
                        <a class="secondary-button" href="https://chromewebstore.google.com/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc" target="_blank" rel="noopener noreferrer">Chrome 웹 스토어에서 설치 ↗</a>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>3. Omnibug</h2>
                    <p class="section-description">GA4, GTM, Meta, TikTok 등 광범위한 트래킹 태그 네트워크 요청을 캡처하고 디코딩해 주는 강력한 서드파티 디버깅 도구입니다.</p>
                    <div class="notice-box notice-point">
                        <p class="notice-title">주요 기능</p>
                        <ul class="notice-list">
                            <li>페이지 이동(Navigation) 시에도 이전 이벤트 로그 보존(Preserve log) 옵션 제공</li>
                            <li>다양한 매체(Google, Meta, TikTok, Adobe 등)의 태그 자동 파싱 및 시각화</li>
                            <li>GTM 미리보기 모드 없이도 실시간 파라미터 및 데이터 레이어 분석</li>
                        </ul>
                    </div>
                    <h3>💡 사용 방법</h3>
                    <ol class="info-list">
                        <li>Chrome 웹 스토어에서 <strong>Omnibug</strong>를 설치합니다.</li>
                        <li>키보드의 <code>F12</code>를 눌러 브라우저 개발자 도구를 엽니다.</li>
                        <li>개발자 도구 상단의 여러 탭(Elements, Console 등) 중 <strong>[Omnibug]</strong> 탭을 클릭하여 엽니다. (탭이 안 보일 경우 <code>&gt;&gt;</code> 아이콘 클릭)</li>
                        <li>웹페이지를 새로고침(F5) 하거나 클릭 이벤트를 발생시키면, Omnibug 탭에 다양한 매체로 전송되는 태그들이 실시간으로 기록됩니다.</li>
                        <li>기록된 로그를 클릭하면 전송된 이벤트 파라미터를 표 형태로 쉽게 확인할 수 있습니다.</li>
                    </ol>
                    <div class="advanced-actions" style="margin-top: 1rem;">
                        <a class="secondary-button" href="https://chromewebstore.google.com/detail/omnibug/bknpehncffejahipecakbfkomebjmokl" target="_blank" rel="noopener noreferrer">Chrome 웹 스토어에서 설치 ↗</a>
                    </div>
                </div>
            </div>
        `
    },
    'program-guide': {
        title: '필수 확장 프로그램 가이드',
        content: `
            <div class="page-content">
                <h1>💡 필수 확장 프로그램 가이드</h1>
                <p>해당 콘텐츠는 퀵도구 &gt; 페이지 태그 진단 &gt; 확장 프로그램에서 확인하세요.</p>
            </div>
        `
    }
};

// 외부 페이지 컨텐츠 오버라이드 병합
if (window.pageContentsOverrides) {
    Object.assign(pageContents, window.pageContentsOverrides);
}

// 매체별 태그 샘플 컨텐츠 데이터 병합
if (window.tagSampleContents) {
    Object.assign(pageContents, window.tagSampleContents);
}
