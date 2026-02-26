// 전환 태그 생성 페이지 컨텐츠 및 초기화
(function () {
    const pageId = 'tag-advanced';
    const rootId = 'tag-generator-tag-advanced';

    const contentHTML = `
        <div class="page-content tag-generator-page" id="${rootId}">
            <div class="content-hero-box">
                <h1>⚙️ 전환 태그 생성</h1>
                <p>전환 태그 생성에 필요한 매체 정보를 입력해 주세요.</p>
            </div>

            <div class="tag-generator-layout">
                <section class="tag-input-panel">
                    <h3>태그 정보 입력</h3>
                    <div class="conversion-event-card">
                        <h4>전환 이벤트 목록</h4>
                        <div class="conversion-event-input">
                            <input type="text" data-role="conversion-event-input" placeholder="전환 이벤트 명 (예 : scroll, btn_click)" />
                            <button class="secondary-button" data-role="conversion-event-add">추가</button>
                        </div>
                        <p class="conversion-event-note">영문으로 시작하고 영문과 숫자, 일부 특수 문자만 사용 가능합니다. (예: purchase, signup, scroll_25)</p>
                        <div class="conversion-event-list" data-role="conversion-event-list"></div>
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
        title: '전환 태그 생성',
        content: contentHTML
    };

    window.pageInitHandlers = window.pageInitHandlers || {};
    window.pageInitHandlers[pageId] = function () {
        if (typeof window.initTagGeneratorPage !== 'function') {
            console.error('태그 생성기 초기화 함수가 없습니다.');
            return;
        }

        window.initTagGeneratorPage(rootId, {
            tagTypeLabel: '전환 태그',
            mode: 'conversion',
            enableGoogleAdsSample: true,
            eventStorageKey: pageId
        });
    };
})();
