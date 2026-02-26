// 지식 센터 페이지 컨텐츠 오버라이드
(function () {
    const pageContentsOverrides = {
        // GA4
        'ga4-setup': {
            title: 'GA4 기초 및 심화',
            content: `
                <div class="page-content">
                    <h1>📊 GA4 기초 및 심화</h1>
                    <p>GA4의 전체 구조와 실무 적용 흐름을 한 번에 정리합니다.</p>

                    <div class="article-section">
                        <h2>GA4 핵심 특징</h2>
                        <ul class="info-list">
                            <li>이벤트 기반 데이터 모델</li>
                            <li>사용자 중심 측정(크로스 디바이스)</li>
                            <li>자동/향상된 측정 이벤트 제공</li>
                            <li>탐색(Exploration) 기반의 심층 분석</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>실무 적용 체크리스트</h2>
                        <ul class="info-list">
                            <li>측정 ID 및 설치 위치 확인</li>
                            <li>핵심 전환 이벤트 정의</li>
                            <li>데이터 레이어 구조 표준화</li>
                            <li>Google Ads 연동 및 전환 공유</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>코드 예시 (GA4 기본 설치)</h2>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-basic-install')">복사</button>
                            <pre><code id="ga4-basic-install">&lt;!-- GA4 기본 설치 --&gt;
&lt;script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"&gt;&lt;/script&gt;
&lt;script&gt;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
&lt;/script&gt;</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <ol class="info-list">
                            <li>GA4 관리 &gt; 데이터 스트림 화면</li>
                            <li>측정 ID 복사 위치 확인</li>
                            <li>디버그뷰에서 실시간 이벤트 확인</li>
                        </ol>
                    </div>

                    <div class="faq-section">
                        <h3>FAQ</h3>
                        <div class="faq-item">
                            <h4>측정 ID가 여러 개일 때 어떻게 하나요?</h4>
                            <p>서비스별 스트림을 분리한 경우입니다. 페이지별로 올바른 스트림 ID를 매핑하세요.</p>
                        </div>
                        <div class="faq-item">
                            <h4>데이터가 늦게 보입니다</h4>
                            <p>표준 리포트는 최대 24시간 지연될 수 있습니다. 디버그뷰로 먼저 확인하세요.</p>
                        </div>
                    </div>
                </div>
            `
        },
        'ga4-intro': {
            title: 'GA4 Intro',
            content: `
                <div class="page-content">
                    <h1>🧭 Intro</h1>
                    <p>GA4는 Universal Analytics의 후속 버전으로, 이벤트 기반 측정과 머신러닝 인사이트를 제공하는 차세대 분석 플랫폼입니다.</p>

                    <div class="article-section">
                        <h2>주요 특징</h2>
                        <ul class="info-list">
                            <li>이벤트 기반 모델: 모든 상호작용을 이벤트로 추적</li>
                            <li>머신러닝 인사이트: 자동 생성 인사이트 제공</li>
                            <li>향상된 개인정보 보호: 쿠키 없는 측정 옵션</li>
                            <li>크로스 플랫폼 추적: 웹+앱 통합</li>
                            <li>사용자 중심 측정: 세션이 아닌 사용자 중심 수집</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>GA4 시작하기</h2>
                        <ol class="info-list">
                            <li>계정 생성: Google 계정으로 GA4 시작</li>
                            <li>속성 설정: 웹사이트 정보 입력</li>
                            <li>태그 설치: 추적 코드 삽입</li>
                            <li>데이터 수집: 실시간 분석 시작</li>
                        </ol>
                    </div>

                    <div class="article-section">
                        <h2>GA4 vs Universal Analytics</h2>
                        <ul class="info-list">
                            <li>데이터 모델: GA4(이벤트 기반) / UA(세션 기반)</li>
                            <li>사용자 추적: GA4(사용자 중심) / UA(세션 중심)</li>
                            <li>크로스 플랫폼: GA4(웹+앱) / UA(웹 전용)</li>
                            <li>머신러닝: GA4(자동 인사이트) / UA(제한적)</li>
                        </ul>
                    </div>

                </div>
            `
        },
        'ga4-understanding': {
            title: 'GA4 이해',
            content: `
                <div class="page-content">
                    <h1>📘 GA4 이해</h1>
                    <p>GA4는 이벤트 기반 데이터 모델을 사용해 모든 사용자 상호작용을 추적합니다.</p>

                    <div class="article-section">
                        <h2>GA4 데이터 모델</h2>
                        <ul class="info-list">
                            <li>세션: 사용자의 연속된 활동 기간</li>
                            <li>사용자: 웹사이트를 방문하는 개인</li>
                            <li>매개변수: 이벤트에 대한 추가 정보</li>
                            <li>이벤트: 페이지뷰, 클릭, 구매 등 모든 행동</li>
                        </ul>
                        <p class="section-description">GA4에서는 모든 것이 이벤트이며, 매개변수로 상세 정보를 전달합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>측정 프로토콜 (Measurement Protocol)</h2>
                        <ul class="info-list">
                            <li>배치 전송: 대량 데이터 효율적 전송</li>
                            <li>오프라인 추적: 서버 로그, CRM 데이터 연동</li>
                            <li>실시간 전송: 즉시 GA4 반영</li>
                            <li>HTTP 요청: REST API 기반 전송</li>
                        </ul>
                        <p class="section-description">Reporting API로 외부 대시보드나 보고서를 구성할 수 있습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>사용자 중심 측정</h2>
                        <ul class="info-list">
                            <li>User-ID: 로그인 사용자 활동 연결</li>
                            <li>Google Signals: 크로스 디바이스 추적</li>
                            <li>Enhanced Measurement: 자동 스크롤/클릭/동영상 이벤트</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>데이터 수집 원리</h2>
                        <ul class="info-list">
                            <li>데이터 보존 기간 설정</li>
                            <li>Consent Mode 기반 수집</li>
                            <li>쿠키 없는 측정 옵션</li>
                            <li>쿠키 기반 기본 식별</li>
                        </ul>
                        <p class="section-description">GA4는 실시간으로 데이터를 처리하고 머신러닝으로 품질을 보정합니다.</p>
                    </div>
                </div>
            `
        },
        'ga4-install': {
            title: '가입 및 설치',
            content: `
                <div class="page-content">
                    <h1>📝 가입 및 설치</h1>
                    <p>GA4 계정 생성부터 데이터 스트림, 태그 설치까지 단계별로 진행합니다.</p>

                    <div class="article-section">
                        <h2>GA4 계정 생성</h2>
                        <ul class="info-list">
                            <li>계정 이름 입력 및 데이터 공유 설정</li>
                            <li>측정 시작 → Google 계정 로그인</li>
                            <li><a href="https://analytics.google.com/" target="_blank" rel="noopener">Google Analytics4</a> 접속</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>속성 생성</h2>
                        <ul class="info-list">
                            <li>속성 이름 설정</li>
                            <li>시간대 및 통화 설정</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>비즈니스 정보</h2>
                        <ul class="info-list">
                            <li>업종 선택</li>
                            <li>규모 선택</li>
                            <li>사용 목적 선택</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>데이터 스트림 설정</h2>
                        <ul class="info-list">
                            <li>웹 선택 → URL/스트림 이름 입력</li>
                            <li>향상된 측정 활성화</li>
                        </ul>
                        <p class="section-description">자동 추적: 페이지뷰, 스크롤, 아웃바운드 클릭, 사이트 검색, 동영상, 파일 다운로드</p>
                    </div>

                    <div class="article-section">
                        <h2>태그 설치</h2>
                        <ul class="info-list">
                            <li>Google Tag Manager (권장): 코드 수정 없이 관리, 디버깅/버전관리</li>
                            <li>직접 설치 (gtag.js): 빠른 설치, 외부 의존성 없음</li>
                            <li>플러그인(CMS): WordPress는 Site Kit, MonsterInsights 등</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>설치 확인</h2>
                        <ul class="info-list">
                            <li>실시간 보고서: 실시간 메뉴에서 방문 데이터 확인</li>
                            <li>개발자 도구: Console 오류/Network 요청 확인</li>
                        </ul>
                        <p class="section-description">실시간 반영까지 지연될 수 있으므로 개발/운영 환경을 구분하세요.</p>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">GA4 데이터 스트림 화면</div>
                            <div class="screenshot-placeholder">실시간 보고서 확인</div>
                        </div>
                    </div>
                </div>
            `
        },
        'ga4-events': {
            title: '이벤트 설정',
            content: `
                <div class="page-content">
                    <h1>⚡ 이벤트 설정</h1>
                    <p>GA4에서는 모든 사용자 행동이 이벤트로 추적됩니다.</p>

                    <div class="article-section">
                        <h2>이벤트 유형</h2>
                        <ul class="info-list">
                            <li>권장 이벤트: Google이 권장하는 이벤트</li>
                            <li>커스텀 이벤트: 직접 정의하는 이벤트</li>
                            <li>향상된 측정 이벤트: 설정으로 활성화</li>
                            <li>자동 수집 이벤트: GA4가 자동 추적</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>클릭 이벤트</h2>
                        <ul class="info-list">
                            <li>버튼 클릭: CTA/다운로드 버튼</li>
                            <li>링크 클릭: 내부/외부 링크</li>
                            <li>이미지 클릭: 배너/상품 이미지</li>
                        </ul>
                        <p class="section-description">GTM에서 클릭 트리거를 설정해 이벤트로 전송합니다.</p>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-click-gtm-sample')">복사</button>
                            <pre><code id="ga4-click-gtm-sample">// GTM에서 클릭 트리거 설정
// CSS 선택자: .cta-button, .download-link
// 이벤트 이름: button_click, link_click</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>스크롤 이벤트</h2>
                        <ul class="info-list">
                            <li>90% 스크롤</li>
                            <li>75% 스크롤</li>
                            <li>50% 스크롤</li>
                            <li>25% 스크롤</li>
                        </ul>
                        <p class="section-description">스크롤 데이터로 콘텐츠 참여도를 분석합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>동영상 이벤트</h2>
                        <ul class="info-list">
                            <li>동영상 시작</li>
                            <li>일시정지</li>
                            <li>완료</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>폼 이벤트</h2>
                        <ul class="info-list">
                            <li>form_error</li>
                            <li>form_success</li>
                            <li>form_submit</li>
                            <li>form_start</li>
                        </ul>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-form-event-sample')">복사</button>
                            <pre><code id="ga4-form-event-sample">// 폼 제출 이벤트
gtag('event', 'form_submit', {
  'form_name': 'contact_form',
  'form_id': 'contact'
});</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>이벤트 디버깅</h2>
                        <ul class="info-list">
                            <li>GA4 실시간 보고서에서 이벤트/파라미터 확인</li>
                            <li>브라우저 개발자 도구에서 gtag 요청 확인</li>
                            <li>GTM 미리보기로 실시간 이벤트 검수</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">GA4 실시간 이벤트 화면</div>
                            <div class="screenshot-placeholder">GTM 미리보기 화면</div>
                        </div>
                    </div>
                </div>
            `
        },
        'ga4-integrations': {
            title: '연동 메뉴얼',
            content: `
                <div class="page-content">
                    <h1>🔗 연동 메뉴얼</h1>
                    <p>GA4 데이터를 광고/데이터/CRM 플랫폼과 연동해 활용도를 높입니다.</p>

                    <div class="article-section">
                        <h2>Google Ads 연동</h2>
                        <ol class="info-list">
                            <li>링크 생성 완료</li>
                            <li>데이터 공유 설정 구성</li>
                            <li>Google Ads 계정 선택</li>
                            <li>“링크” 버튼 클릭</li>
                            <li>GA4 관리 → Google Ads 링크</li>
                        </ol>
                        <p class="section-description">광고 클릭부터 구매까지의 여정을 추적하고 전환 최적화를 지원합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>Google Search Console 연동</h2>
                        <ol class="info-list">
                            <li>연동 완료</li>
                            <li>데이터 스트림 연결</li>
                            <li>Search Console 속성 선택</li>
                            <li>“링크” 버튼 클릭</li>
                            <li>GA4 관리 → Search Console 링크</li>
                        </ol>
                        <ul class="info-list">
                            <li>평균 순위</li>
                            <li>클릭 수</li>
                            <li>검색 노출</li>
                            <li>검색 쿼리</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>Facebook Pixel 연동</h2>
                        <p class="section-description">GTM을 통해 Pixel 태그를 구성합니다.</p>
                        <ol class="info-list">
                            <li>GTM에서 Facebook Pixel 태그 생성</li>
                            <li>Pixel ID 입력</li>
                            <li>트리거 조건 구성</li>
                            <li>이벤트 매핑 설정</li>
                            <li>태그 게시</li>
                        </ol>
                        <ul class="info-list">
                            <li>Purchase / AddToCart / ViewContent / PageView</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>CRM 시스템 연동</h2>
                        <ul class="info-list">
                            <li>Salesforce: 리드 → 전환 여정 추적</li>
                            <li>HubSpot: 마케팅 자동화 연동</li>
                            <li>Pipedrive: 영업 파이프라인 분석</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>이메일 마케팅 연동</h2>
                        <ul class="info-list">
                            <li>SendGrid / Campaign Monitor</li>
                            <li>Constant Contact / Mailchimp</li>
                        </ul>
                        <p class="section-description">UTM 파라미터로 이메일 캠페인 성과를 추적합니다.</p>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-utm-sample')">복사</button>
                            <pre><code id="ga4-utm-sample">https://example.com?utm_source=email&utm_medium=newsletter&utm_campaign=summer_sale</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>API 연동 (Reporting API)</h2>
                        <ol class="info-list">
                            <li>API 호출로 데이터 수집</li>
                            <li>서비스 계정 권한 부여</li>
                            <li>서비스 계정 생성 및 키 다운로드</li>
                            <li>GA4 Reporting API 활성화</li>
                            <li>Google Cloud 프로젝트 생성</li>
                        </ol>
                        <ul class="info-list">
                            <li>데이터 웨어하우스 연동</li>
                            <li>자동화된 보고서 생성</li>
                            <li>커스텀 대시보드 구축</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">Google Ads 링크 설정</div>
                            <div class="screenshot-placeholder">Search Console 링크 설정</div>
                        </div>
                    </div>
                </div>
            `
        },
        'ga4-ecommerce': {
            title: '전자상거래 태그',
            content: `
                <div class="page-content">
                    <h1>🛒 전자상거래 태그</h1>
                    <p>Enhanced Ecommerce로 구매 여정 전체를 추적합니다.</p>

                    <div class="article-section">
                        <h2>주요 추적 단계</h2>
                        <ul class="info-list">
                            <li>구매 완료</li>
                            <li>결제 시작</li>
                            <li>장바구니 조회</li>
                            <li>장바구니 추가</li>
                            <li>상품 조회</li>
                        </ul>
                        <p class="section-description">매출, 전환율, 상품별 성과를 상세 분석할 수 있습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>상품 조회 추적 (view_item)</h2>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-view-item')">복사</button>
                            <pre><code id="ga4-view-item">gtag('event', 'view_item', {
 'currency': 'KRW',
 'value': 50000,
 'items': [{
  'item_id': 'SKU123',
  'item_name': '무선 이어폰',
  'category': '전자제품',
  'quantity': 1,
  'price': 50000
 }]
});</code></pre>
                        </div>
                        <ul class="info-list">
                            <li>currency / price / item_name / item_id 필수</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>장바구니 추적</h2>
                        <ul class="info-list">
                            <li>add_to_cart: 장바구니 추가</li>
                            <li>remove_from_cart: 장바구니 제거</li>
                            <li>view_cart: 장바구니 조회</li>
                        </ul>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-add-to-cart')">복사</button>
                            <pre><code id="ga4-add-to-cart">gtag('event', 'add_to_cart', {
 'currency': 'KRW',
 'value': 50000,
 'items': [{
  'item_id': 'SKU123',
  'item_name': '무선 이어폰',
  'category': '전자제품',
  'quantity': 1,
  'price': 50000
 }]
});</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>결제 프로세스 추적</h2>
                        <ol class="info-list">
                            <li>purchase: 구매 완료</li>
                            <li>add_shipping_info: 배송 정보 입력</li>
                            <li>add_payment_info: 결제 정보 입력</li>
                            <li>begin_checkout: 결제 시작</li>
                        </ol>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-begin-checkout')">복사</button>
                            <pre><code id="ga4-begin-checkout">gtag('event', 'begin_checkout', {
 'currency': 'KRW',
 'value': 50000,
 'items': [{
  'item_id': 'SKU123',
  'item_name': '무선 이어폰',
  'category': '전자제품',
  'quantity': 1,
  'price': 50000
 }]
});</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>구매 완료 추적 (purchase)</h2>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('ga4-purchase-sample')">복사</button>
                            <pre><code id="ga4-purchase-sample">gtag('event', 'purchase', {
 'transaction_id': 'T12345',
 'currency': 'KRW',
 'value': 50000,
 'tax': 5000,
 'shipping': 3000,
 'items': [{
  'item_id': 'SKU123',
  'item_name': '무선 이어폰',
  'category': '전자제품',
  'quantity': 1,
  'price': 50000
 }]
});</code></pre>
                        </div>
                        <ul class="info-list">
                            <li>shipping / tax / value / transaction_id 중요</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>전자상거래 보고서</h2>
                        <ul class="info-list">
                            <li>장바구니 분석</li>
                            <li>구매 여정 분석</li>
                            <li>상품 성과 분석</li>
                            <li>수익 보고서</li>
                        </ul>
                        <p class="section-description">상품 추천, 가격 최적화, 마케팅 전략 수립에 활용합니다.</p>
                    </div>
                </div>
            `
        },
        'ga4-conversion': {
            title: '전환(주요 이벤트)',
            content: `
                <div class="page-content">
                    <h1>🎯 전환(주요 이벤트)</h1>
                    <p>전환 이벤트는 비즈니스 목표를 측정하는 핵심 이벤트입니다.</p>

                    <div class="article-section">
                        <h2>전환 이벤트 유형</h2>
                        <ul class="info-list">
                            <li>뉴스레터 구독</li>
                            <li>파일 다운로드</li>
                            <li>문의 제출</li>
                            <li>회원가입</li>
                            <li>구매 완료</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>전환 설정 방법</h2>
                        <ol class="info-list">
                            <li>이벤트 이름/조건 설정</li>
                            <li>“이벤트 만들기” 클릭</li>
                            <li>GA4 관리 → 이벤트 메뉴</li>
                            <li>생성 이벤트 전환 토글 활성화</li>
                        </ol>
                        <p class="section-description">핵심 이벤트만 전환으로 설정해 중요도가 희석되지 않도록 하세요.</p>
                    </div>

                    <div class="article-section">
                        <h2>전환 보고서 주요 지표</h2>
                        <ul class="info-list">
                            <li>전환 경로</li>
                            <li>전환 가치</li>
                            <li>전환율</li>
                            <li>전환 수</li>
                        </ul>
                        <p class="section-description">전환 보고서로 캠페인 효과와 개선 포인트를 분석합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">전환 이벤트 설정 화면</div>
                            <div class="screenshot-placeholder">전환 보고서 화면</div>
                        </div>
                    </div>
                </div>
            `
        },
        'ga4-audience': {
            title: '잠재고객 설정',
            content: `
                <div class="page-content">
                    <h1>👥 잠재고객 설정</h1>
                    <p>GA4 잠재고객은 특정 조건의 사용자 그룹을 정의해 타겟 마케팅에 활용합니다.</p>

                    <div class="article-section">
                        <h2>잠재고객 유형</h2>
                        <ul class="info-list">
                            <li>커스텀: 직접 정의한 조건</li>
                            <li>기술적: 디바이스/브라우저/지역</li>
                            <li>인구통계학적: 연령/성별/관심사</li>
                            <li>행동 기반: 특정 행동 사용자</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>잠재고객 생성 단계</h2>
                        <ol class="info-list">
                            <li>잠재고객 이름/설명 입력</li>
                            <li>잠재고객 조건 설정</li>
                            <li>“새 잠재고객” 클릭</li>
                            <li>GA4 관리 → 잠재고객 메뉴</li>
                        </ol>
                        <p class="section-description">Google Ads와 연동해 타겟 광고에 활용할 수 있습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">잠재고객 생성 화면</div>
                            <div class="screenshot-placeholder">잠재고객 목록 화면</div>
                        </div>
                    </div>
                </div>
            `
        },
        'ga4-case': {
            title: '사례 연구',
            content: `
                <div class="page-content">
                    <h1>📌 사례 연구</h1>
                    <p>GA4 활용 성공 사례를 통해 실무 적용 포인트를 확인합니다.</p>

                    <div class="article-section">
                        <h2>이커머스 사례</h2>
                        <ul class="info-list">
                            <li>A 쇼핑몰: 장바구니 이탈률 70% → 45% 개선, 매출 30% 증가</li>
                            <li>B 패션몰: 상품별 ROI 분석 가능, 재고 최적화</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>서비스업 사례</h2>
                        <ul class="info-list">
                            <li>C 병원: 예약 전환율 25% 향상, 마케팅 ROI 40% 개선</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>B2B 사례</h2>
                        <ul class="info-list">
                            <li>D IT 기업: 리드 품질 60% 향상, 영업 효율성 증대</li>
                        </ul>
                    </div>
                </div>
            `
        },
        // GTM
        'gtm-setup': {
            title: 'GTM 기초 및 심화',
            content: `
                <div class="page-content">
                    <h1>🏷️ GTM 기초 및 심화</h1>
                    <p>GTM의 구조, 배포 흐름, 운영 원칙을 한 번에 정리합니다.</p>

                    <div class="article-section">
                        <h2>GTM 핵심 구성</h2>
                        <ul class="info-list">
                            <li>태그(Tag): 데이터를 전송하는 스크립트</li>
                            <li>트리거(Trigger): 태그 실행 조건</li>
                            <li>변수(Variable): 동적으로 값을 전달</li>
                            <li>컨테이너(Container): 전체 설정을 담는 단위</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>컨테이너 유형</h2>
                        <ul class="info-list">
                            <li>웹</li>
                            <li>서버</li>
                            <li>앱(iOS/Android)</li>
                            <li>AMP</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>작업 흐름</h2>
                        <ul class="info-list">
                            <li>태그/트리거/변수 구성</li>
                            <li>미리보기(Preview)로 검수</li>
                            <li>버전 생성 및 게시</li>
                            <li>변경 이력 기록</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>운영 기본 원칙</h2>
                        <ul class="info-list">
                            <li>버전 관리 필수</li>
                            <li>네이밍 규칙 통일</li>
                            <li>배포 전 미리보기 검수</li>
                            <li>불필요 태그 주기적 정리</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">작업 공간 &gt; 미리보기</div>
                            <div class="screenshot-placeholder">버전 기록 화면</div>
                        </div>
                    </div>
                </div>
            `
        },
        'gtm-intro': {
            title: 'GTM Intro',
            content: `
                <div class="page-content">
                    <h1>🧭 Intro</h1>
                    <p>태그/트리거/변수의 역할과 데이터 흐름을 이해합니다.</p>

                    <div class="article-section">
                        <h2>태그 동작 흐름</h2>
                        <ul class="info-list">
                            <li>사용자 행동 발생</li>
                            <li>트리거 조건 충족</li>
                            <li>태그 실행 및 데이터 전송</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>dataLayer 개요</h2>
                        <p class="section-description">GTM은 dataLayer 값을 활용해 이벤트를 안정적으로 추적합니다.</p>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('gtm-datalayer-sample')">복사</button>
                            <pre><code id="gtm-datalayer-sample">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'cta_click',
  cta_name: 'signup_button'
});
&lt;/script&gt;</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">GTM 태그/트리거 화면</div>
                            <div class="screenshot-placeholder">미리보기 디버그 패널</div>
                        </div>
                    </div>

                    <div class="faq-section">
                        <h3>FAQ</h3>
                        <div class="faq-item">
                            <h4>태그가 실행되지 않습니다</h4>
                            <p>트리거 조건과 변수를 먼저 확인하고, Preview 모드에서 이벤트 수신 여부를 확인하세요.</p>
                        </div>
                        <div class="faq-item">
                            <h4>dataLayer 값이 비어 있습니다</h4>
                            <p>push 위치가 페이지 로드 이후인지, 스크립트 순서가 올바른지 확인하세요.</p>
                        </div>
                    </div>
                </div>
            `
        },
        'gtm-install': {
            title: '가입 및 설치',
            content: `
                <div class="page-content">
                    <h1>📝 가입 및 설치</h1>
                    <p>GTM 컨테이너 생성부터 설치/검수까지 진행합니다.</p>

                    <div class="article-section">
                        <h2>설치 절차</h2>
                        <ul class="info-list">
                            <li>GTM 계정/컨테이너 생성</li>
                            <li>head/body 코드 발급</li>
                            <li>웹사이트에 스니펫 삽입</li>
                            <li>미리보기로 실행 확인</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>코드 예시 (GTM 스니펫)</h2>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('gtm-snippet-sample')">복사</button>
                            <pre><code id="gtm-snippet-sample">&lt;!-- GTM (head) --&gt;
&lt;script&gt;
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
&lt;/script&gt;
&lt;!-- GTM (body) --&gt;
&lt;noscript&gt;&lt;iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX\"
height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"&gt;&lt;/iframe&gt;&lt;/noscript&gt;</code></pre>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>설치 검수</h2>
                        <ul class="info-list">
                            <li>중복 설치 여부 확인</li>
                            <li>보안 정책(CSP) 체크</li>
                            <li>동의 모드 적용 여부</li>
                            <li>Preview 모드에서 컨테이너 연결 확인</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">GTM 설치 코드 화면</div>
                            <div class="screenshot-placeholder">GTM 미리보기 화면</div>
                        </div>
                    </div>
                </div>
            `
        },
        'gtm-operations': {
            title: '운영 방법',
            content: `
                <div class="page-content">
                    <h1>🛠️ 운영 방법</h1>
                    <p>안정적인 운영을 위한 표준 프로세스를 설정합니다.</p>

                    <div class="article-section">
                        <h2>운영 체크리스트</h2>
                        <ul class="info-list">
                            <li>네이밍 규칙 표준화</li>
                            <li>변수/트리거 템플릿화</li>
                            <li>작업 단위별 버전 기록</li>
                            <li>폴더 구조로 태그 그룹화</li>
                            <li>변경 전/후 릴리즈 노트 작성</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>배포 전 QA</h2>
                        <ul class="info-list">
                            <li>미리보기에서 이벤트 검수</li>
                            <li>중복 전송 여부 체크</li>
                            <li>핵심 전환 이벤트 테스트</li>
                            <li>브라우저 콘솔 오류 확인</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>운영 팁</h2>
                        <ul class="info-list">
                            <li>불필요 태그 주기적 정리</li>
                            <li>권한/승인 프로세스 설정</li>
                            <li>테스트 환경과 운영 환경 분리</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">버전 기록 화면</div>
                            <div class="screenshot-placeholder">미리보기 검수 화면</div>
                        </div>
                    </div>

                    <div class="faq-section">
                        <h3>FAQ</h3>
                        <div class="faq-item">
                            <h4>버전 관리는 왜 중요하나요?</h4>
                            <p>변경 이력을 남기고 문제 발생 시 즉시 롤백하기 위함입니다.</p>
                        </div>
                        <div class="faq-item">
                            <h4>태그 수가 많아져 관리가 어렵습니다</h4>
                            <p>폴더/네이밍 규칙을 강화하고 사용 빈도가 낮은 태그를 정리하세요.</p>
                        </div>
                    </div>
                </div>
            `
        },
        // DataLayer
        'data-layer': {
            title: '데이터 레이어 설계',
            content: `
                <div class="page-content">
                    <h1>🗂️ 데이터 레이어 설계</h1>
                    <p>데이터 레이어의 구조와 설계 원칙을 정리합니다.</p>

                    <div class="article-section">
                        <h2>데이터 레이어 목적</h2>
                        <ul class="info-list">
                            <li>데이터 전송 구조 표준화</li>
                            <li>개발/마케팅 협업 효율화</li>
                            <li>측정 오류 및 중복 방지</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>설계 원칙</h2>
                        <ul class="info-list">
                            <li>이벤트 단위로 구조화</li>
                            <li>명확한 키 네이밍</li>
                            <li>문서화 및 변경 이력 관리</li>
                        </ul>
                    </div>
                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">데이터 레이어 표준 정의서</div>
                            <div class="screenshot-placeholder">QA 로그 캡처 화면</div>
                        </div>
                    </div>
                </div>
            `
        },
        'data-layer-intro': {
            title: '데이터 레이어 소개',
            content: `
                <div class="page-content">
                    <h1>🗂️ 데이터 레이어 소개</h1>
                    <p>실무에서 사용되는 데이터 레이어의 기본 구조를 이해합니다.</p>

                    <div class="article-section">
                        <h2>기본 구조 예시</h2>
                        <ul class="info-list">
                            <li>event: 이벤트명</li>
                            <li>page: 페이지 정보</li>
                            <li>user: 사용자 정보</li>
                            <li>ecommerce: 전자상거래 정보</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>운영 팁</h2>
                        <ul class="info-list">
                            <li>키 이름 표준화 후 공유</li>
                            <li>업데이트 시 문서 함께 수정</li>
                            <li>릴리즈마다 샘플 로그 점검</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>코드 예시 (dataLayer push)</h2>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('dataLayer-push-sample')">복사</button>
                            <pre><code id="dataLayer-push-sample">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'signup',
  user_id: 'USER_123',
  page_category: 'account'
});
&lt;/script&gt;</code></pre>
                        </div>
                    </div>

                    <div class="faq-section">
                        <h3>FAQ</h3>
                        <div class="faq-item">
                            <h4>dataLayer가 비어 있어요</h4>
                            <p>push 위치가 DOM 로드 이전인지 확인하고, 스크립트 순서를 점검하세요.</p>
                        </div>
                    </div>
                </div>
            `
        },
        'troubleshooting': {
            title: '트러블슈팅 & QA',
            content: `
                <div class="page-content">
                    <div class="content-hero-box">
                        <h1>🔧 트러블슈팅</h1>
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
        'troubleshooting-qa': {
            title: 'QA',
            content: `
                <div class="page-content">
                    <div class="content-hero-box">
                        <h1>✅ QA</h1>
                        <p>릴리즈 전 태그 품질 점검과 검수 절차를 정리합니다.</p>
                    </div>

                    <div class="article-section" id="qa-checklist">
                        <h2>QA 체크리스트</h2>
                        <div class="qa-search">
                            <input type="text" data-role="qa-search" placeholder="체크리스트 검색 (예: 전환, dataLayer, 중복)" />
                        </div>
                        <div class="qa-table-wrap">
                            <table class="qa-table">
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>점검 항목</th>
                                        <th>설명</th>
                                        <th>코드 예시</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-role="qa-row">
                                        <td>태그</td>
                                        <td>중복 실행 여부</td>
                                        <td>동일 태그가 중복 실행되지 않는지 확인</td>
                                        <td><code>gtag('config', 'G-XXXX')</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>이벤트</td>
                                        <td>네이밍 규칙</td>
                                        <td>소문자/언더스코어 사용, 의미 명확성 확인</td>
                                        <td><code>purchase</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>이벤트</td>
                                        <td>파라미터 값</td>
                                        <td>필수 파라미터 누락/형식 오류 여부 확인</td>
                                        <td><code>value, currency</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>전환</td>
                                        <td>전환 이벤트 테스트</td>
                                        <td>전환 이벤트가 실제 발생하는 시점에 트리거 되는지 확인</td>
                                        <td><code>gtag('event','purchase')</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>데이터 레이어</td>
                                        <td>dataLayer push</td>
                                        <td>dataLayer가 올바른 타이밍에 push 되는지 확인</td>
                                        <td><code>dataLayer.push({...})</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>디버깅</td>
                                        <td>GTM 미리보기</td>
                                        <td>Preview 모드에서 이벤트 수신 여부 확인</td>
                                        <td><code>Preview</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>네트워크</td>
                                        <td>요청 전송</td>
                                        <td>Network 탭에서 gtag/collect 요청 확인</td>
                                        <td><code>/collect</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>동의</td>
                                        <td>Consent Mode</td>
                                        <td>동의 모드 적용 시 이벤트 누락 여부 확인</td>
                                        <td><code>consent</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>전자상거래</td>
                                        <td>items 배열</td>
                                        <td>item_id/item_name/price/quantity 확인</td>
                                        <td><code>items: []</code></td>
                                    </tr>
                                    <tr data-role="qa-row">
                                        <td>크로스도메인</td>
                                        <td>도메인 이동</td>
                                        <td>결제/외부 도메인 이동 시 세션 유지 확인</td>
                                        <td><code>linker</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>스크린샷 가이드</h2>
                        <div class="screenshot-guide">
                            <div class="screenshot-placeholder">GA4 실시간 이벤트 확인</div>
                            <div class="screenshot-placeholder">GTM 미리보기 검수</div>
                        </div>
                    </div>

                    <div class="article-section">
                        <h2>코드 예시</h2>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('qa-gtag-purchase')">복사</button>
                            <pre><code id="qa-gtag-purchase">gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 128000,
  currency: 'KRW'
});</code></pre>
                        </div>
                        <div class="code-block">
                            <button class="copy-button" onclick="copyCode('qa-datalayer-push')">복사</button>
                            <pre><code id="qa-datalayer-push">window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'form_submit',
  form_id: 'lead-form'
});</code></pre>
                        </div>
                    </div>

                    <div class="faq-section">
                        <h3>FAQ</h3>
                        <div class="faq-item">
                            <h4>QA 시 우선 순위는 무엇인가요?</h4>
                            <p>전환 이벤트와 핵심 매출 지표부터 점검하세요.</p>
                        </div>
                    </div>
                </div>
            `
        }
        ,
        'service-policy': {
            title: '이용 약관',
            content: `
                <div class="page-content">
                    <h1>📄 이용약관</h1>

                    <div class="article-section">
                        <h2>1. 서비스 이용 조건</h2>
                        <p>해당 서비스 이용 시 본 약관에 동의한 것으로 간주합니다. 사용자의 편의를 위해 구글 로그인을 제공하며, 구글의 개인정보처리방침이 별도로 적용됩니다.</p>
                        <p>본 서비스는 케이티 나스미디어에서 제공하는 GA4(Google Analytics 4) 및 GTM(Google Tag Manager) 가이드 서비스로, 관련 교육 자료 및 정보를 무료로 제공합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>2. 서비스 이용 제한</h2>
                        <p>다음과 같은 행위는 금지됩니다:</p>
                        <ul class="info-list">
                            <li>불법적인 정보의 게시 또는 전송</li>
                            <li>타인의 개인정보 도용</li>
                            <li>시스템 해킹 등 서비스 운영을 방해하는 행위</li>
                            <li>저작권을 침해하는 행위</li>
                            <li>타인에게 피해를 주거나 혼란을 야기하는 행위</li>
                            <li>상업적 목적으로 본 서비스의 콘텐츠를 무단 복제, 전송, 배포하는 행위</li>
                        </ul>
                        <p>위 행위를 위반할 경우 서비스 이용이 제한될 수 있으며, 관련 법에 따라 법적 책임을 질 수 있습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>3. 개인정보 보호 및 데이터 보안</h2>
                        <p>본 서비스는 사용자의 개인정보를 안전하게 보호하기 위해 다음과 같은 조치를 취하고 있습니다:</p>
                        <p>데이터 수집: 서비스 제공을 위해 필요한 최소한의 개인정보만 수집합니다(이메일, 사용자 이름). Google OAuth 2.0을 통한 안전한 인증 프로세스를 사용합니다.</p>
                        <p>데이터 보호: TLS 암호화를 통한 데이터 전송 보안, 서버 측 암호화를 통한 데이터 저장 보안, 정기적인 보안 점검 및 취약점 진단을 수행합니다.</p>
                        <p>사용자 권리: 언제든지 개인정보 열람, 수정, 삭제 요청이 가능하며, 개인정보 수집 및 이용에 대한 동의를 철회할 수 있습니다.</p>
                        <p>자세한 내용은 개인정보처리방침을 참조하시기 바랍니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>4. 지적재산권</h2>
                        <p>본 서비스의 모든 콘텐츠, 디자인, 로고 등은 KT nasmedia의 지적재산권에 속합니다. 본 서비스의 콘텐츠를 상업적 목적으로 무단 복제, 전송, 배포하는 것은 금지됩니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>5. 책임의 제한</h2>
                        <p>본 서비스는 무료로 제공되는 정보 서비스로, 서비스의 중단, 변경, 종료에 대한 책임을 지지 않습니다. 서비스 이용 중 발생한 직접적 또는 간접적 손해에 대해 본 서비스는 책임을 지지 않습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>6. 약관 변경</h2>
                        <p>본 서비스는 필요에 따라 약관을 변경할 수 있으며, 변경된 약관은 웹사이트의 공지사항을 통해 7일 전에 공지합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>7. 문의</h2>
                        <p>본 약관에 대한 문의사항이 있으시면 아래로 연락주시기 바랍니다.</p>
                        <p>이메일: adso@nasmedia.co.kr</p>
                    </div>
                </div>
            `
        },
        'privacy-policy': {
            title: '개인정보처리방침',
            content: `
                <div class="page-content">
                    <h1>🔐 개인정보처리방침</h1>
                    <p>케이티 나스미디어는 고객님들의 소중한 개인정보 보호를 위해 아래와 같은 방침을 수행하고 있습니다.</p>

                    <div class="article-section">
                        <h2>1. 애플리케이션 개인정보처리방침</h2>
                        <p>케이티 나스미디어는 고객의 개인정보를 소중하게 생각하며, 다음과 같이 개인정보를 수집 이용하고 있습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>1.1. 수집하는 개인정보의 항목</h2>
                        <p>필수: 이메일, 사용자 이름</p>
                        <p>선택: (해당 없음)</p>
                    </div>

                    <div class="article-section">
                        <h2>1.2. 개인정보의 수집 및 이용 목적</h2>
                        <p>회원 관리: 로그인 관리</p>
                        <p>서비스 제공: Google 플랫폼 정보 제공</p>
                        <p>본 서비스는 실제 금전적인 거래가 발생하지 않는 무료 서비스로 운영되고 있습니다.</p>
                        <p>따라서, 고객님의 개인정보는 서비스 제공 및 회원 관리 목적으로만 사용되며, 결제와 관련된 어떠한 정보도 수집하거나 이용하지 않습니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>1.3. 개인정보의 보유 및 이용 기간</h2>
                        <p>회원 탈퇴 시까지 개인정보를 보유하며, 관련 법령에 따라 일정 기간 보존 후 파기합니다.</p>
                    </div>

                    <div class="article-section">
                        <h2>1.4. 개인정보의 제3자 제공</h2>
                        <p>원칙적으로 회원의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
                        <ul class="info-list">
                            <li>법령의 근거에 의하여 수사기관 등 공공기관으로부터 요구받은 경우</li>
                            <li>귀하의 사전 동의를 받은 경우</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>1.5. 민감한 정보에 대한 데이터 보호 메커니즘</h2>
                        <p>본 서비스는 Google OAuth 2.0 인증 시스템을 통해 사용자의 개인정보를 안전하게 보호합니다.</p>
                        <p>데이터 암호화:</p>
                        <ul class="info-list">
                            <li>모든 개인정보는 TLS(Transport Layer Security) 암호화 프로토콜을 통해 전송됩니다.</li>
                            <li>저장된 개인정보는 서버 측 암호화 기술을 적용하여 보호됩니다.</li>
                        </ul>
                        <p>접근 제어:</p>
                        <ul class="info-list">
                            <li>개인정보는 인증된 직원만 접근할 수 있으며, 접근 권한이 부여된 자에게만 제한적으로 제공됩니다.</li>
                            <li>모든 접근은 로그로 기록되며 정기적으로 감사합니다.</li>
                        </ul>
                        <p>보안 조치:</p>
                        <ul class="info-list">
                            <li>정기적인 보안 점검 및 취약점 진단을 실시합니다.</li>
                            <li>개인정보 처리 시스템의 접근 제한, 침입탐지, 취약점 분석 등 기술적 보안조치를 시행합니다.</li>
                            <li>개인정보 보호를 위한 내부 관리계획 수립 및 시행</li>
                        </ul>
                        <p>데이터 무결성:</p>
                        <ul class="info-list">
                            <li>수집된 개인정보의 정확성과 최신성을 유지하기 위한 조치를 시행합니다.</li>
                            <li>잘못된 정보로 인한 피해가 발생하지 않도록 정기적으로 검증합니다.</li>
                        </ul>
                        <p>사용자 권리 보호:</p>
                        <ul class="info-list">
                            <li>사용자는 언제든지 자신의 개인정보를 열람, 수정, 삭제할 수 있습니다.</li>
                            <li>개인정보 수집 및 이용에 대한 동의를 철회할 권리가 있습니다.</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>1.6. 개인정보의 파기 절차 및 방법</h2>
                        <ul class="info-list">
                            <li>회원 탈퇴 또는 개인정보의 수집 및 이용 목적이 달성된 경우 지체 없이 파기합니다.</li>
                            <li>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
                            <li>종이에 출력된 정보는 분쇄하거나 소각하여 파기합니다.</li>
                        </ul>
                    </div>

                    <div class="article-section">
                        <h2>1.7. 개인정보 보호책임자</h2>
                        <p>문의사항이 있으시면 아래로 연락주시기 바랍니다.</p>
                        <p>이메일: adso@nasmedia.co.kr</p>
                    </div>

                    <div class="article-section">
                        <h2>1.8. 개인정보 처리방침 변경 안내</h2>
                        <p>본 개인정보 처리방침은 법령 및 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항의 시행일 7일 전부터 사이트의 공지사항을 통해 고지할 것입니다.</p>
                    </div>
                </div>
            `
        }
    };

    window.pageContentsOverrides = window.pageContentsOverrides || {};
    Object.assign(window.pageContentsOverrides, pageContentsOverrides);

    window.pageInitHandlers = window.pageInitHandlers || {};
    window.pageInitHandlers['troubleshooting-qa'] = function () {
        const root = document.getElementById('qa-checklist');
        if (!root) return;
        const input = root.querySelector('[data-role="qa-search"]');
        const rows = Array.from(root.querySelectorAll('[data-role="qa-row"]'));
        if (!input || rows.length === 0) return;

        input.addEventListener('input', () => {
            const keyword = input.value.trim().toLowerCase();
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(keyword) ? '' : 'none';
            });
        });
    };
})();
