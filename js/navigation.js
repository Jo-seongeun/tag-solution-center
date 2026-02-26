// 페이지 네비게이션 관리
class Navigation {
    constructor() {
        this.currentPage = 'dashboard';
        this.currentCategory = null;
        this.init();
    }

    init() {
        this.attachEventListeners();
        this.handleInitialLoad();
    }

    attachEventListeners() {
        // 대시보드 버튼 클릭
        const dashboardBtn = document.querySelector('[data-page="dashboard"] .gnb-button');
        if (dashboardBtn) {
            dashboardBtn.addEventListener('click', () => {
                this.navigateToPage('dashboard');
            });
        }

        // 드롭다운 메뉴 아이템 클릭
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = item.getAttribute('data-page');
                const category = item.getAttribute('data-category');
                this.navigateToPage(pageId, category);
            });
        });

        // 브라우저 뒤로가기/앞으로가기
        window.addEventListener('popstate', (e) => {
            if (e.state) {
                this.loadPage(e.state.page, e.state.category, false);
            }
        });
    }

    handleInitialLoad() {
        // URL 파라미터 확인
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page') || 'dashboard';
        const category = urlParams.get('category');
        
        this.loadPage(page, category, false);
    }

    navigateToPage(pageId, category = null) {
        this.loadPage(pageId, category, true);
    }

    loadPage(pageId, category = null, pushState = true) {
        // 페이지별 기본 라우팅/카테고리 보정
        const resolved = this.resolvePage(pageId, category);
        const resolvedPageId = resolved.pageId;
        const resolvedCategory = resolved.category;
        const gnbPageId = resolved.gnbPageId;

        this.currentPage = resolvedPageId;
        this.currentCategory = resolvedCategory;

        // URL 업데이트
        if (pushState) {
            const url = resolvedPageId === 'dashboard' 
                ? window.location.pathname 
                : `?page=${resolvedPageId}${resolvedCategory ? `&category=${resolvedCategory}` : ''}`;
            
            window.history.pushState(
                { page: resolvedPageId, category: resolvedCategory }, 
                '', 
                url
            );
        }

        // 페이지 내용 렌더링
        this.renderPage(resolvedPageId, resolvedCategory);

        // GNB 활성화 상태 업데이트
        if (gnbInstance) {
            gnbInstance.setActiveItem(gnbPageId);
            gnbInstance.closeAllDropdowns();
        }
    }

    renderPage(pageId, category) {
        const dashboardContent = document.getElementById('dashboard-content');
        const dynamicContent = document.getElementById('dynamic-content');
        const sidebar = document.getElementById('sidebar');

        if (pageId === 'dashboard') {
            // 대시보드 표시
            dashboardContent.classList.remove('hidden');
            dynamicContent.classList.add('hidden');
            sidebar.classList.add('hidden');
        } else {
            // 다른 페이지 표시
            dashboardContent.classList.add('hidden');
            dynamicContent.classList.remove('hidden');
            
            // 사이드바 표시 (카테고리가 있는 경우)
            const sidebarData = this.getSidebarData(pageId, category);
            if (sidebarData) {
                this.renderSidebar(sidebarData, pageId, category);
                sidebar.classList.remove('hidden');
            } else {
                sidebar.classList.add('hidden');
            }

            // 컨텐츠 로드
            this.loadContent(pageId);
        }

        // 스크롤 최상단으로
        window.scrollTo(0, 0);
    }

    renderSidebar(categoryData, activePageId, categoryKey) {
        const sidebar = document.getElementById('sidebar');

        if (!categoryData) return;

        const sidebarHTML = `
            <div class="sidebar-header">
                <h2 class="sidebar-category-title">${categoryData.title}</h2>
                ${categoryData.subtitle ? `<p class="sidebar-subtitle">${categoryData.subtitle}</p>` : ''}
            </div>
            ${categoryData.sectionTitle ? `<div class="sidebar-section-title">${categoryData.sectionTitle}</div>` : ''}
            <nav class="sidebar-nav">
                ${categoryData.items.map(item => {
                    const iconHTML = item.icon ? `<span class="sidebar-icon">${item.icon}</span>` : '';
                    const textHTML = `<span class="sidebar-text">${item.name}</span>`;
                    const resolvedCategory = item.category || categoryKey || '';
                    if (item.id) {
                        return `
                            <a href="#"
                               class="sidebar-item ${item.id === activePageId ? 'active' : ''}"
                               data-page="${item.id}"
                               data-category="${resolvedCategory}">
                                ${iconHTML}
                                ${textHTML}
                            </a>
                        `;
                    }
                    return `
                        <div class="sidebar-item static">
                            ${iconHTML}
                            ${textHTML}
                        </div>
                    `;
                }).join('')}
            </nav>
        `;

        sidebar.innerHTML = sidebarHTML;

        // 사이드바 아이템 클릭 이벤트
        sidebar.querySelectorAll('.sidebar-item[data-page]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = item.getAttribute('data-page');
                const cat = item.getAttribute('data-category');
                this.navigateToPage(pageId, cat);
            });
        });
    }

    // 페이지별 사이드바 우선 적용 후 카테고리 사이드바로 fallback
    getSidebarData(pageId, category) {
        if (pageSidebarOverrides && pageSidebarOverrides[pageId]) {
            return pageSidebarOverrides[pageId];
        }

        const resolvedCategory = category || this.findCategoryByPageId(pageId);
        if (resolvedCategory && menuData[resolvedCategory]) {
            return menuData[resolvedCategory];
        }

        return null;
    }

    loadContent(pageId) {
        const dynamicContent = document.getElementById('dynamic-content');
        const pageData = pageContents[pageId];

        if (pageData) {
            dynamicContent.innerHTML = pageData.content;
            document.title = `${pageData.title} - 태그 솔루션 센터`;

            const applyHeroBox = () => {
                const root = dynamicContent.querySelector('.page-content');
                if (!root) return;
                root.classList.add('has-hero-box');
                if (root.querySelector('.content-hero-box')) return;
                const heading = root.querySelector('h1');
                if (!heading) return;
                const nextParagraph = heading.nextElementSibling && heading.nextElementSibling.tagName === 'P'
                    ? heading.nextElementSibling
                    : null;
                const heroBox = document.createElement('div');
                heroBox.className = 'content-hero-box';
                heading.parentNode.insertBefore(heroBox, heading);
                heroBox.appendChild(heading);
                if (nextParagraph) {
                    heroBox.appendChild(nextParagraph);
                }
            };

            // 태그 생성 페이지는 전체 폭을 사용하도록 클래스 토글
            const fullWidthPageIds = ['tag-basic', 'tag-advanced', 'tag-ecommerce'];
            if (fullWidthPageIds.includes(pageId)) {
                dynamicContent.classList.add('full-width');
            } else {
                dynamicContent.classList.remove('full-width');
            }

            // 지식 센터 페이지는 전용 스타일 적용
            const isDataCenterPage = pageId.startsWith('ga4-') || pageId.startsWith('gtm-') || pageId.startsWith('data-layer');
            if (isDataCenterPage) {
                dynamicContent.classList.add('data-center');
            } else {
                dynamicContent.classList.remove('data-center');
            }

            const isQuickToolPage = fullWidthPageIds.includes(pageId)
                || pageId === 'page-tag'
                || pageId === 'tag-total-sample'
                || pageId === 'ga4-experience'
                || pageId.startsWith('tag-sample-');
            if (isDataCenterPage || isQuickToolPage) {
                applyHeroBox();
            }

            // 페이지별 초기화 핸들러 실행
            if (window.pageInitHandlers && typeof window.pageInitHandlers[pageId] === 'function') {
                try {
                    window.pageInitHandlers[pageId]();
                } catch (error) {
                    console.error('페이지 초기화 중 오류 발생:', error);
                }
            }
        } else {
            dynamicContent.innerHTML = `
                <div class="page-content">
                    <h1>페이지를 찾을 수 없습니다</h1>
                    <p>요청하신 페이지가 존재하지 않습니다.</p>
                    <button onclick="navigationInstance.navigateToPage('dashboard')" class="primary-button">
                        대시보드로 돌아가기
                    </button>
                </div>
            `;
        }
    }

    // 페이지 아이디에 맞는 카테고리 검색
    findCategoryByPageId(pageId) {
        if (!pageId) return null;
        return Object.keys(menuData).find(categoryKey => {
            const categoryData = menuData[categoryKey];
            return categoryData?.items?.some(item => item.id === pageId);
        }) || null;
    }

    // 페이지 라우팅 규칙
    resolvePage(pageId, category) {
        let resolvedPageId = pageId;
        let resolvedCategory = category;
        let gnbPageId = pageId;

        // 매체별 태그 샘플 기본 진입 시 GTM으로 이동
        if (pageId === 'tag-total-sample') {
            resolvedPageId = 'tag-sample-gtm';
            resolvedCategory = 'tag-sample';
            gnbPageId = 'tag-total-sample';
        }

        // 매체별 태그 샘플 하위 페이지는 GNB에서 상위 메뉴 활성화
        if (resolvedPageId && resolvedPageId.startsWith('tag-sample-')) {
            gnbPageId = 'tag-total-sample';
        }

        // 카테고리가 없으면 메뉴 데이터에서 자동 추정
        if (!resolvedCategory) {
            resolvedCategory = this.findCategoryByPageId(resolvedPageId);
        }

        // 지식 센터 상세 페이지 자동 분류
        if (!resolvedCategory && resolvedPageId) {
            const isGa4Page = resolvedPageId.startsWith('ga4-');
            const isGtmPage = resolvedPageId.startsWith('gtm-');
            const isDataLayerPage = resolvedPageId === 'data-layer' || resolvedPageId.startsWith('data-layer-');
            if (isGa4Page || isGtmPage || isDataLayerPage) {
                resolvedCategory = 'data-center';
            }
        }

        return {
            pageId: resolvedPageId,
            category: resolvedCategory,
            gnbPageId: gnbPageId
        };
    }
}

// Navigation 인스턴스 생성 (전역)
let navigationInstance;

document.addEventListener('DOMContentLoaded', () => {
    navigationInstance = new Navigation();
    window.navigationInstance = navigationInstance;
});
