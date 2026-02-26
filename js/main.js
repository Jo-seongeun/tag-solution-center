// 메인 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('태그 솔루션 센터 초기화 완료');
    
    // 대시보드 기능 카드 버튼 이벤트
    initDashboardButtons();
    
    // 가이드 카드 클릭 이벤트
    initGuideCards();
});

// 대시보드 기능 버튼 초기화
function initDashboardButtons() {
    // 페이지 태그 진단 버튼
    const diagnosticBtn = document.querySelector('.feature-button-primary');
    if (diagnosticBtn) {
        diagnosticBtn.addEventListener('click', () => {
            navigationInstance.navigateToPage('page-tag', 'quick-menu');
        });
    }

    // GA4 체험관 버튼
    const ga4Btn = document.querySelector('.feature-button-secondary');
    if (ga4Btn) {
        ga4Btn.addEventListener('click', () => {
            navigationInstance.navigateToPage('ga4-experience', 'quick-menu');
        });
    }
}

// 가이드 카드 클릭 이벤트 초기화
function initGuideCards() {
    const guideItems = document.querySelectorAll('.guide-item');
    
    guideItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // 각 가이드 카드와 매칭되는 페이지로 이동
            const pageMapping = [
                { page: 'tag-basic', category: 'quick-menu' },         // 기본 & 전환 태그 생성
                { page: 'page-tag-extensions', category: 'quick-menu' }, // 필수 확장 프로그램
                { page: 'ga4-setup', category: 'data-center' },          // GA4/GTM 심화 원리
                { page: 'troubleshooting', category: 'data-center' }     // 트러블슈팅 & QA
            ];

            if (pageMapping[index]) {
                navigationInstance.navigateToPage(
                    pageMapping[index].page, 
                    pageMapping[index].category
                );
            }
        });
    });
}

// 유틸리티 함수들
const Utils = {
    // 로딩 표시
    showLoading(element) {
        if (element) {
            element.innerHTML = '<div class="loading">로딩 중...</div>';
        }
    },

    // 에러 메시지 표시
    showError(element, message) {
        if (element) {
            element.innerHTML = `
                <div class="error-message">
                    <p>⚠️ ${message}</p>
                </div>
            `;
        }
    },

    // 성공 메시지 표시
    showSuccess(element, message) {
        if (element) {
            element.innerHTML = `
                <div class="success-message">
                    <p>✅ ${message}</p>
                </div>
            `;
        }
    },

    // 날짜 포맷팅
    formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    // 디바운스 함수
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 로컬 스토리지 저장
    saveToStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('로컬 스토리지 저장 실패:', e);
            return false;
        }
    },

    // 로컬 스토리지 불러오기
    loadFromStorage(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('로컬 스토리지 불러오기 실패:', e);
            return null;
        }
    }
};

// 코드 복사 함수
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) return;

    const code = codeElement.textContent || '';
    const button = codeElement.closest('.code-block')?.querySelector('.copy-button') || null;
    const originalText = button ? button.textContent : '';

    // 복사 성공 UI 처리
    const handleCopySuccess = () => {
        if (!button) return;
        button.classList.add('copied');
        button.textContent = '✓복사됨';
        setTimeout(() => {
            button.classList.remove('copied');
            button.textContent = originalText;
        }, 2000);
    };

    // 클립보드 복사 (권한/지원 여부 처리)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(() => {
            handleCopySuccess();
        }).catch(err => {
            console.error('복사 실패:', err);
            alert('복사에 실패했습니다. 브라우저 권한을 확인해주세요.');
        });
        return;
    }

    // fallback: execCommand 사용
    try {
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = code;
        tempTextarea.setAttribute('readonly', '');
        tempTextarea.style.position = 'absolute';
        tempTextarea.style.left = '-9999px';
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(tempTextarea);

        if (success) {
            handleCopySuccess();
        } else {
            alert('복사에 실패했습니다. 브라우저 권한을 확인해주세요.');
        }
    } catch (err) {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 브라우저 권한을 확인해주세요.');
    }
}

// 전역으로 Utils와 copyCode 노출
window.Utils = Utils;
window.copyCode = copyCode;
