// GNB 드롭다운 기능
class GNB {
    constructor() {
        this.currentOpenDropdown = null;
        this.init();
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        // 드롭다운 토글
        document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
            const button = trigger.querySelector('.gnb-button');
            
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(trigger);
            });
        });

        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-trigger')) {
                this.closeAllDropdowns();
            }
        });

        // ESC 키로 드롭다운 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllDropdowns();
            }
        });
    }

    toggleDropdown(trigger) {
        const isOpen = trigger.classList.contains('open');
        
        // 다른 드롭다운 모두 닫기
        this.closeAllDropdowns();
        
        // 현재 드롭다운 토글
        if (!isOpen) {
            trigger.classList.add('open');
            this.currentOpenDropdown = trigger;
        }
    }

    closeAllDropdowns() {
        document.querySelectorAll('.dropdown-trigger.open').forEach(trigger => {
            trigger.classList.remove('open');
        });
        this.currentOpenDropdown = null;
    }

    setActiveItem(pageId) {
        // 모든 GNB 아이템에서 active 제거
        document.querySelectorAll('.gnb-item').forEach(item => {
            item.classList.remove('active');
        });

        // 모든 드롭다운 아이템에서 active 제거
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
        });

        // 대시보드인 경우
        if (pageId === 'dashboard') {
            const dashboardItem = document.querySelector('[data-page="dashboard"]');
            if (dashboardItem) {
                dashboardItem.classList.add('active');
            }
            return;
        }

        // 다른 페이지인 경우 해당 드롭다운 아이템 활성화
        const activeItem = document.querySelector(`[data-page="${pageId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
            
            // 부모 카테고리도 활성화
            const parentDropdown = activeItem.closest('.dropdown-trigger');
            if (parentDropdown) {
                parentDropdown.classList.add('active');
            }
        }
    }
}

// GNB 인스턴스 생성 (전역)
let gnbInstance;

document.addEventListener('DOMContentLoaded', () => {
    gnbInstance = new GNB();
});
