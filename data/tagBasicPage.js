// 기본 태그 생성 페이지 컨텐츠 및 초기화
(function () {
    const pageId = 'tag-basic';
    const rootId = 'tag-generator-tag-basic';

    const contentHTML = `
        <div class="page-content tag-generator-page" id="${rootId}">
            <div class="content-hero-box">
                <h1>📋 기본 태그 생성</h1>
                <p>선택한 매체 기준으로 기본 태그를 빠르게 생성하세요.</p>
            </div>

            <div class="tag-generator-layout">
                <section class="tag-input-panel">
                    <h3>태그 정보 입력</h3>
                    <div class="basic-info-card">
                        <h4>기본 정보 입력</h4>
                        <div class="basic-info-table">
                            <div class="basic-info-row basic-info-head">
                                <div class="basic-info-col basic-info-label">항목</div>
                                <div class="basic-info-col">값</div>
                            </div>
                            <div class="basic-info-row">
                                <div class="basic-info-col basic-info-label">웹사이트 URL</div>
                                <div class="basic-info-col">
                                    <input type="text" id="basic-site-url" data-role="basic-site-url" placeholder="https://example.com (선택항목)" />
                                </div>
                            </div>
                            <div class="basic-info-row">
                                <div class="basic-info-col basic-info-label">사이트명</div>
                                <div class="basic-info-col">
                                    <input type="text" id="basic-site-name" data-role="basic-site-name" placeholder="My Website (선택항목)" />
                                </div>
                            </div>
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
        title: '기본 태그 생성',
        content: contentHTML
    };

    window.pageInitHandlers = window.pageInitHandlers || {};
    window.pageInitHandlers[pageId] = function () {
        if (typeof window.initTagGeneratorPage !== 'function') {
            console.error('태그 생성기 초기화 함수가 없습니다.');
            return;
        }

        window.initTagGeneratorPage(rootId, {
            tagTypeLabel: '기본 태그'
        });
    };
})();
