// 전자상거래 태그 생성 페이지 컨텐츠 및 초기화
(function () {
    const pageId = 'tag-ecommerce';
    const rootId = 'tag-generator-tag-ecommerce';

    const contentHTML = `
        <div class="page-content tag-generator-page" id="${rootId}">
            <div class="content-hero-box">
                <h1>🛒 전자상거래 태그 생성</h1>
                <p>전자상거래 이벤트에 필요한 태그를 생성합니다.</p>
            </div>

            <div class="tag-generator-layout">
                <section class="tag-input-panel">
                    <h3>태그 정보 입력</h3>
                    <div class="ecommerce-event-card">
                        <h4>전자상거래 이벤트 선택</h4>
                        <div class="ecommerce-event-grid">
                            <label class="ecommerce-event-item">
                                <input type="checkbox" data-role="ecommerce-event" value="view_item">
                                상품 조회
                            </label>
                            <label class="ecommerce-event-item">
                                <input type="checkbox" data-role="ecommerce-event" value="add_to_cart">
                                장바구니 추가
                            </label>
                            <label class="ecommerce-event-item">
                                <input type="checkbox" data-role="ecommerce-event" value="begin_checkout">
                                결제 시작
                            </label>
                            <label class="ecommerce-event-item">
                                <input type="checkbox" data-role="ecommerce-event" value="add_payment_info">
                                결제 정보 입력
                            </label>
                            <label class="ecommerce-event-item">
                                <input type="checkbox" data-role="ecommerce-event" value="purchase">
                                구매 완료
                            </label>
                        </div>
                    </div>
                    <div class="media-selection" data-role="media-selection"></div>
                    <div class="media-id-area" data-role="media-id-area"></div>
                    <button class="primary-button tag-generate-button" data-role="generate-button">태그 생성하기</button>
                </section>

                <section class="tag-output-panel">
                    <h3>생성된 태그</h3>
                    <div class="tag-output-list" data-role="tag-output-list"></div>
                </section>
            </div>
        </div>
    `;

    window.pageContentsOverrides = window.pageContentsOverrides || {};
    window.pageContentsOverrides[pageId] = {
        title: '전자상거래 태그 생성',
        content: contentHTML
    };

    window.pageInitHandlers = window.pageInitHandlers || {};
    window.pageInitHandlers[pageId] = function () {
        if (typeof window.initTagGeneratorPage !== 'function') {
            console.error('태그 생성기 초기화 함수가 없습니다.');
            return;
        }

        window.initTagGeneratorPage(rootId, {
            tagTypeLabel: '전자상거래 태그',
            mode: 'ecommerce',
            enableGoogleAdsSample: true,
            storageKey: pageId
        });
    };
})();
