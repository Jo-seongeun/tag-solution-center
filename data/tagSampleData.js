// 매체별 태그 샘플 페이지용 사이드바 데이터
window.tagSampleSidebarData = {
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

// 매체별 태그 샘플 컨텐츠 데이터
window.tagSampleContents = {
    'tag-sample-gtm': {
        title: 'GTM 태그 샘플',
        content: `
            <div class="page-content tag-sample-page">
                <div class="tag-header content-hero-box">
                    <h1>🏷️ Google Tag Manager</h1>
                    <p class="tag-subtitle">GTM 컨테이너 태그 및 이벤트 추적 샘플</p>
                </div>

                <div class="tag-section">
                    <h2>GTM 컨테이너 태그 (Head)</h2>
                    <p class="section-description">웹사이트의 &lt;head&gt; 섹션에 삽입하는 기본 GTM 컨테이너 태그입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-head-code')">복사</button>
                        <pre><code id="gtm-head-code">&lt;script&gt;
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
&lt;/script&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>GTM 컨테이너 ID를 'GTM-XXXXXXX' 부분에 실제 ID로 교체</li>
                        <li>웹사이트의 모든 페이지 &lt;head&gt; 섹션에 삽입</li>
                        <li>페이지 로드 시 자동으로 GTM이 초기화됨</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>GTM No Script 태그 (Body)</h2>
                    <p class="section-description">자바스크립트가 비활성화된 환경에서도 태그가 동작하도록 &lt;body&gt;에 추가하는 보완 태그입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-body-code')">복사</button>
                        <pre><code id="gtm-body-code">&lt;noscript&gt;
&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
&lt;/noscript&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>GTM 컨테이너 ID를 'GTM-XXXXXXX' 부분에 실제 ID로 교체</li>
                        <li>&lt;body&gt; 태그 바로 아래(최상단)에 삽입</li>
                        <li>스크립트 차단 환경에서도 기본 추적 유지</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>DataLayer 초기화</h2>
                    <p class="section-description">페이지 기본 정보를 GTM에 전달하기 위해 dataLayer를 초기화합니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-datalayer-init-code')">복사</button>
                        <pre><code id="gtm-datalayer-init-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 페이지 기본 정보 전달
  event: 'page_view',
  page_type: 'product',
  page_url: window.location.href,
  page_title: document.title,
  user_id: 'USER_12345'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>이벤트 추적 예제</h2>
                    <p class="section-description">버튼 클릭, 폼 제출, 전자상거래 이벤트를 dataLayer로 전송하는 예시입니다.</p>

                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-event-click-code')">복사</button>
                        <pre><code id="gtm-event-click-code">&lt;script&gt;
document.getElementById('signup-button').addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    // 버튼 클릭 이벤트
    event: 'cta_click',
    cta_name: 'signup_button',
    page_location: window.location.href
  });
});
&lt;/script&gt;</code></pre>
                    </div>

                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-event-form-code')">복사</button>
                        <pre><code id="gtm-event-form-code">&lt;script&gt;
document.getElementById('lead-form').addEventListener('submit', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    // 폼 제출 이벤트
    event: 'form_submit',
    form_id: 'lead-form',
    form_name: '상담 신청'
  });
});
&lt;/script&gt;</code></pre>
                    </div>

                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-event-ecommerce-code')">복사</button>
                        <pre><code id="gtm-event-ecommerce-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 전자상거래 구매 이벤트
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T12345',
    value: 128000,
    currency: 'KRW',
    items: [
      {
        item_id: 'SKU_001',
        item_name: '샘플 상품',
        price: 64000,
        quantity: 2
      }
    ]
  }
});
&lt;/script&gt;</code></pre>
                    </div>

                    <ol class="info-list">
                        <li>이벤트가 발생하는 지점(클릭/제출/구매)에 스크립트 삽입</li>
                        <li>이벤트명과 파라미터를 GTM 트리거/변수와 매칭</li>
                        <li>GTM 미리보기로 이벤트 수집 여부 확인</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>사용자 정의 변수 예제</h2>
                    <p class="section-description">사용자/상품/페이지 정보를 커스텀 변수로 전달하는 예시입니다.</p>

                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-custom-user-code')">복사</button>
                        <pre><code id="gtm-custom-user-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 사용자 정보 추적
  event: 'user_profile',
  user_id: 'USER_12345',
  user_grade: 'gold',
  user_login: true
});
&lt;/script&gt;</code></pre>
                    </div>

                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-custom-product-code')">복사</button>
                        <pre><code id="gtm-custom-product-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 상품 정보 추적
  event: 'product_view',
  product_id: 'SKU_001',
  product_name: '샘플 상품',
  product_price: 64000
});
&lt;/script&gt;</code></pre>
                    </div>

                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('gtm-custom-page-code')">복사</button>
                        <pre><code id="gtm-custom-page-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 페이지 정보 추적
  event: 'page_metadata',
  page_category: 'shopping',
  page_depth: 2
});
&lt;/script&gt;</code></pre>
                    </div>

                    <ol class="info-list">
                        <li>필요한 변수 목록을 정의하고 네이밍 규칙 확정</li>
                        <li>dataLayer에 동일한 키로 값을 푸시</li>
                        <li>GTM에서 데이터 레이어 변수로 매핑하여 사용</li>
                    </ol>
                </div>
            </div>
        `
    },
    'tag-sample-ga4': {
        title: 'GA4 태그 샘플',
        content: `
            <div class="page-content tag-sample-page">
                <div class="tag-header content-hero-box">
                    <h1>📊 GA4</h1>
                    <p class="tag-subtitle">GA4 기본 태그 및 이벤트 샘플</p>
                </div>
                <div class="tag-section">
                    <h2>GA4 기본 측정 태그 (gtag.js)</h2>
                    <p class="section-description">GA4 측정을 시작하기 위한 기본 스크립트로, &lt;head&gt;에 삽입합니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('ga4-gtag-head-code')">복사</button>
                        <pre><code id="ga4-gtag-head-code">&lt;!-- Global site tag (gtag.js) - Google Analytics --&gt;
&lt;script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"&gt;&lt;/script&gt;
&lt;script&gt;
  // gtag 초기화
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // 기본 측정 설정
  gtag('config', 'G-XXXXXXX');
&lt;/script&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>측정 ID를 'G-XXXXXXX' 부분에 실제 ID로 교체</li>
                        <li>웹사이트의 모든 페이지 &lt;head&gt; 섹션에 삽입</li>
                        <li>페이지 로드 시 기본 페이지뷰가 자동 수집됨</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>GA4 이벤트 추적</h2>
                    <p class="section-description">GA4에서 자동 인식하는 표준 이벤트로 측정하면 리포트/전환 설정이 쉬워집니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('ga4-standard-event-code')">복사</button>
                        <pre><code id="ga4-standard-event-code">&lt;script&gt;
// 표준 이벤트: add_to_cart
gtag('event', 'add_to_cart', {
  currency: 'KRW',
  value: 128000,
  items: [
    {
      item_id: 'SKU_001',
      item_name: '샘플 상품',
      item_category: '의류',
      price: 64000,
      quantity: 2
    }
  ]
});
&lt;/script&gt;</code></pre>
                    </div>
                    <p class="section-description">표준 이벤트를 사용하면 GA4 기본 리포트와 권장 전환 설정을 바로 활용할 수 있습니다.</p>
                </div>

                <div class="tag-section">
                    <h2>전자상거래 이벤트</h2>
                    <p class="section-description">상품 조회부터 구매까지 전자상거래 이벤트를 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('ga4-ecommerce-code')">복사</button>
                        <pre><code id="ga4-ecommerce-code">&lt;script&gt;
// 표준 전자상거래 이벤트: purchase
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 128000,
  currency: 'KRW',
  shipping: 3000,
  tax: 0,
  items: [
    {
      item_id: 'SKU_001',
      item_name: '샘플 상품',
      item_category: '의류',
      price: 64000,
      quantity: 2
    }
  ]
});
&lt;/script&gt;</code></pre>
                    </div>
                    <div class="notice-box notice-point">
                        <p class="notice-title">체크 포인트</p>
                        <p class="notice-text">세부 정보 체크를 위해선 개발자 체크 필요</p>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>사용자 정의 이벤트</h2>
                    <p class="section-description">일반 커스텀 이벤트를 dataLayer로 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('ga4-custom-event-code')">복사</button>
                        <pre><code id="ga4-custom-event-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 커스텀 이벤트 전송
  event: 'custom_action',
  action_name: 'banner_click',
  page_location: window.location.href
});
&lt;/script&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>이벤트 발생 지점에 스크립트 삽입</li>
                        <li>이벤트명/파라미터를 GTM 또는 gtag 설정과 매칭</li>
                        <li>디버그뷰에서 수집 여부 확인</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>사용자 속성 설정</h2>
                    <p class="section-description">사용자 정보와 속성을 GA4에 전달하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('ga4-user-props-code')">복사</button>
                        <pre><code id="ga4-user-props-code">&lt;script&gt;
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  // 사용자 정보 추적
  event: 'user_profile',
  user_id: 'USER_12345',
  user_grade: 'gold',
  user_login: true
});

gtag('set', 'user_properties', {
  // 사용자 속성 추적
  member_type: 'premium',
  signup_channel: 'app'
});
&lt;/script&gt;</code></pre>
                    </div>
                    <div class="notice-box notice-warning">
                        <p class="notice-title">개인정보 보호 주의</p>
                        <p class="notice-text">민감 정보(이메일/전화번호 등)는 전송하지 마세요.</p>
                    </div>
                </div>
            </div>
        `
    },
    'tag-sample-google-ads': {
        title: 'Google Ads 태그 샘플',
        content: `
            <div class="page-content tag-sample-page">
                <div class="tag-header content-hero-box">
                    <h1>🧩 Google Ads</h1>
                    <p class="tag-subtitle">전환 추적 태그 샘플</p>
                </div>
                <div class="tag-section">
                    <h2>Google Ads 기본 측정 태그 (gtag.js)</h2>
                    <p class="section-description">Google Ads 전환 추적을 시작하기 위한 기본 태그로, 사이트 방문 데이터를 수집합니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('google-ads-gtag-head-code')">복사</button>
                        <pre><code id="google-ads-gtag-head-code">&lt;!-- Global site tag (gtag.js) - Google Ads --&gt;
&lt;script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX"&gt;&lt;/script&gt;
&lt;script&gt;
  // gtag 초기화
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // Google Ads 기본 설정
  gtag('config', 'AW-XXXXXXX');
&lt;/script&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>전환 ID를 'AW-XXXXXXX' 부분에 실제 ID로 교체</li>
                        <li>웹사이트의 모든 페이지 &lt;head&gt; 섹션에 삽입</li>
                        <li>브라우저 개발자 도구에서 gtag 스크립트 로드 여부 확인</li>
                        <li>Google Ads &gt; 도구 및 설정 &gt; 전환에서 태그 상태 확인</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2 id="google-ads-conversion-action">Google Ads 전환 액션 생성 방법</h2>
                    <p class="section-description">전환 라벨을 생성하기 위한 관리자 설정 가이드입니다.</p>
                    <ol class="info-list">
                        <li>Google Ads 로그인 후 <strong>도구 및 설정</strong> &gt; <strong>전환</strong> 메뉴 이동</li>
                        <li><strong>+ 새 전환 작업</strong> 클릭</li>
                        <li>전환 소스 선택 (예: 웹사이트)</li>
                        <li>전환 카테고리/이름/값/카운팅 방식 설정</li>
                        <li>생성 완료 후 전환 ID와 전환 라벨 확인</li>
                    </ol>
                    <div class="notice-box notice-warning">
                        <p class="notice-title">설정 시 유의사항</p>
                        <ul class="notice-list">
                            <li><strong>중요:</strong> 카테고리/값 설정은 리포트와 입찰에 영향을 줍니다.</li>
                            <li><strong>중요:</strong> 동일 전환을 중복 생성하면 전환 수치가 과대 집계될 수 있습니다.</li>
                            <li><strong>주의:</strong> 전환 라벨은 생성 후 변경이 어려우므로 정확히 관리하세요.</li>
                            <li><strong>주의:</strong> 전환 창(클릭 후 유효 기간)을 비즈니스 목적에 맞게 설정하세요.</li>
                        </ul>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>Google Ads 전환 이벤트 추적</h2>
                    <p class="section-description">실제 전환이 발생하는 시점에 호출하는 이벤트 태그 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('google-ads-conversion-code')">복사</button>
                        <pre><code id="google-ads-conversion-code">&lt;script&gt;
// 전환 이벤트 전송
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXX/ABCDEFG123456',
  value: 128000,
  currency: 'KRW',
  transaction_id: 'T12345'
});
&lt;/script&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>전환 라벨을 'AW-XXXXXXX/ABCDEFG123456' 부분에 실제 값으로 교체</li>
                        <li>구매 완료/신청 완료 등 전환 발생 시점에 실행</li>
                        <li>금액/통화/주문번호 등 파라미터는 실제 값으로 전달</li>
                    </ol>
                    <div class="notice-box notice-warning">
                        <p class="notice-title">전환 이벤트 체크 시 유의사항</p>
                        <ul class="notice-list">
                            <li><strong>중요:</strong> 전환 이벤트는 중복 실행되지 않도록 조건을 제한하세요.</li>
                            <li><strong>중요:</strong> 동일 주문번호(transaction_id)는 중복 전환을 방지합니다.</li>
                            <li><strong>주의:</strong> 테스트 전환은 실제 전환과 섞이지 않도록 별도 캠페인에서 진행하세요.</li>
                            <li><strong>주의:</strong> 광고 차단/쿠키 제한 환경에서는 전환 누락이 발생할 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'tag-sample-meta': {
        title: 'Meta 태그 샘플',
        content: `
            <div class="page-content tag-sample-page">
                <div class="tag-header content-hero-box">
                    <h1>📘 Meta</h1>
                    <p class="tag-subtitle">Meta Pixel 기본/이벤트 샘플</p>
                </div>
                <div class="tag-section">
                    <h2>Meta 픽셀 기본 태그</h2>
                    <p class="section-description">웹사이트 방문 데이터를 수집하는 기본 픽셀 태그로, &lt;head&gt;에 삽입합니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-pixel-base-code')">복사</button>
                        <pre><code id="meta-pixel-base-code">&lt;!-- Meta Pixel Code --&gt;
&lt;script&gt;
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// 픽셀 초기화
fbq('init', '123456789012345');
// 기본 페이지뷰 전송
fbq('track', 'PageView');
&lt;/script&gt;
&lt;noscript&gt;&lt;img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=123456789012345&amp;ev=PageView&amp;noscript=1"/&gt;&lt;/noscript&gt;
&lt;!-- End Meta Pixel Code --&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>픽셀 ID를 '123456789012345' 부분에 실제 ID로 교체</li>
                        <li>웹사이트의 모든 페이지 &lt;head&gt; 섹션에 삽입</li>
                        <li>Meta 이벤트 관리자 &gt; 테스트 이벤트로 수신 여부 확인</li>
                        <li>브라우저 확장(픽셀 헬퍼)로 태그 로드 여부 점검</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>Meta 픽셀 이벤트 추적</h2>
                    <p class="section-description">장바구니/구매 등 주요 기본 이벤트를 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-standard-event-code')">복사</button>
                        <pre><code id="meta-standard-event-code">&lt;script&gt;
// 주요 기본 이벤트 예시
fbq('track', 'ViewContent', {
  content_ids: ['SKU_001'],
  content_name: '샘플 상품',
  content_type: 'product',
  value: 64000,
  currency: 'KRW'
});

fbq('track', 'AddToCart', {
  content_ids: ['SKU_001'],
  content_type: 'product',
  value: 64000,
  currency: 'KRW'
});

fbq('track', 'Lead', {
  value: 0,
  currency: 'KRW'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>Meta 전자상거래 이벤트</h2>
                    <p class="section-description">구매 완료 시 전송하는 전자상거래 이벤트 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-ecommerce-event-code')">복사</button>
                        <pre><code id="meta-ecommerce-event-code">&lt;script&gt;
// 전자상거래 이벤트: Purchase
fbq('track', 'Purchase', {
  value: 128000,
  currency: 'KRW',
  contents: [
    { id: 'SKU_001', quantity: 2, item_price: 64000 }
  ],
  content_type: 'product'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>고급 매개변수</h2>
                    <p class="section-description">전환 품질 향상을 위해 추가 정보를 전달하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-advanced-params-code')">복사</button>
                        <pre><code id="meta-advanced-params-code">&lt;script&gt;
// 고급 매개변수 예시
fbq('track', 'Purchase', {
  value: 128000,
  currency: 'KRW',
  content_ids: ['SKU_001'],
  content_type: 'product',
  num_items: 2,
  delivery_category: 'home_delivery'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>동적 광고 매개변수</h2>
                    <p class="section-description">카탈로그 기반 동적 광고에 필요한 매개변수 전달 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-dpa-params-code')">복사</button>
                        <pre><code id="meta-dpa-params-code">&lt;script&gt;
// 동적 광고용 매개변수 예시
fbq('track', 'ViewContent', {
  content_ids: ['SKU_001'],
  content_type: 'product',
  value: 64000,
  currency: 'KRW'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>단일 픽셀 vs 다중 픽셀 이벤트 추적</h2>
                    <p class="section-description">브랜드/도메인별로 픽셀을 나누는 경우 다중 픽셀 설정이 필요합니다.</p>
                    <div class="notice-box notice-warning">
                        <p class="notice-title">다중 픽셀 사용 시 주의 사항</p>
                        <ul class="notice-list">
                            <li>이벤트가 중복 전송되지 않도록 픽셀별 트리거를 분리하세요.</li>
                            <li>동일 이벤트를 여러 픽셀로 전송하면 전환 수치가 과대 집계될 수 있습니다.</li>
                            <li>픽셀 ID 관리가 복잡해지므로 운영 가이드와 네이밍을 표준화하세요.</li>
                        </ul>
                    </div>
                    <!-- 일반 방식(모든 픽셀/이벤트 전송) -->
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-fbq-all-code')">복사</button>
                        <pre><code id="meta-fbq-all-code">&lt;script&gt;
// 모든 픽셀에 PageView 등 이벤트를 동일하게 전송 (기본 방식)
fbq('init', 'PIXEL_A');
fbq('init', 'PIXEL_B');
fbq('track', 'PageView');       // 모든 픽셀에 전송
fbq('track', 'Purchase');       // 모든 픽셀에 전송
&lt;/script&gt;</code></pre>
                    </div>
                    <p class="section-description"><strong>모든 연동 픽셀에 이벤트가 동일하게 전송됩니다.<br>간단하지만 전환 중복/과대 집계 주의가 필요합니다.</strong></p>
                    
                    <!-- 단일 픽셀 선택 방식 (특정 픽셀 한정 전송) -->
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-fbq-single-code')">복사</button>
                        <pre><code id="meta-fbq-single-code">&lt;script&gt;
// 특정(단일) 픽셀로만 이벤트 전송
fbq('init', 'PIXEL_A');
fbq('init', 'PIXEL_B');
fbq('trackSingle', 'PIXEL_A', 'Purchase');   // PIXEL_A에만 Purchase 전송
// 필요 시 PIXEL_B에도 별도 이벤트
fbq('trackSingle', 'PIXEL_B', 'Lead');       // PIXEL_B에만 Lead 전송
&lt;/script&gt;</code></pre>
                    </div>
                    <p class="section-description"><strong>이벤트별로 픽셀을 선택해 별도로 전송할 수 있습니다.<br>전환 중복 방지 및 맞춤 이벤트 관리에 적합!</strong></p>
                    
                    <!-- 실전 예시: 대행사별 픽셀 관리 -->
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('meta-fbq-agency-code')">복사</button>
                        <pre><code id="meta-fbq-agency-code">&lt;script&gt;
// Agency A와 Agency B의 픽셀 초기화
fbq('init', 'AGENCY_A_PIXEL');
fbq('init', 'AGENCY_B_PIXEL');

// 모든 픽셀에 PageView(공통) 전송
fbq('track', 'PageView');

// Agency A 픽셀에만 구매 전환(성과 마케팅) 전송
fbq('trackSingle', 'AGENCY_A_PIXEL', 'Purchase', {
  value: 50000,
  currency: 'KRW',
  content_ids: ['PRODUCT123']
});

// Agency B 픽셀에만 커스텀 이벤트(브랜딩/동영상 등) 전송
fbq('trackSingleCustom', 'AGENCY_B_PIXEL', 'VideoPlay', {
  video_title: '제품 소개 영상',
  video_duration: 120
});
&lt;/script&gt;</code></pre>
                    </div>
                    <p class="section-description"><strong>실제 대행사·브랜드 협업에서 많이 사용하는 다중/개별 이벤트 분리 패턴입니다.<br>대행사/도메인/이벤트별로 픽셀 사용 목적에 따라 각각 이벤트를 세분화하여 효율적으로 관리할 수 있습니다.</strong></p>
                    <div class="table-section">
                        <h3 class="section-subtitle">이벤트 전송 비교표</h3>
                        <table class="event-compare-table">
                            <thead>
                                <tr>
                                    <th>이벤트</th>
                                    <th>PIXEL A</th>
                                    <th>PIXEL B</th>
                                    <th>명령어</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PageView</td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <code>fbq('track', 'PageView')</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Purchase</td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <code>fbq('track', 'Purchase')</code>
                                    </td>
                                </tr>
                                <tr class="row-green">
                                    <td>Purchase (분리)</td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <span class="status off">미전송</span>
                                    </td>
                                    <td>
                                        <code>fbq('trackSingle', 'PIXEL_A', 'Purchase')</code>
                                    </td>
                                </tr>
                                <tr class="row-yellow">
                                    <td>CustomEvent (공통)</td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <code>fbq('trackCustom', 'Event')</code>
                                    </td>
                                </tr>
                                <tr class="row-red">
                                    <td>CustomEvent (픽셀 별도)</td>
                                    <td>
                                        <span class="status off">미전송</span>
                                    </td>
                                    <td>
                                        <span class="status on">전송</span>
                                    </td>
                                    <td>
                                        <code>fbq('trackSingleCustom', 'PIXEL_B', 'Event')</code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <style>
                            .event-compare-table {
                                width: 100%;
                                border-collapse: collapse;
                                margin: 16px 0;
                                background: #fff;
                                font-size: 15px;
                            }
                            .event-compare-table th, .event-compare-table td {
                                border: 1px solid #e4e7ec;
                                padding: 8px 10px;
                                text-align: center;
                                vertical-align: middle;
                            }
                            .event-compare-table th {
                                background: #f7f9fb;
                                font-weight: 600;
                            }
                            .event-compare-table tr.row-green { background: #eef7eb; }
                            .event-compare-table tr.row-yellow { background: #fffbe2; }
                            .event-compare-table tr.row-red { background: #faebeb; }
                            .event-compare-table .status {
                                display: inline-block;
                                min-width: 40px;
                                padding: 2px 8px;
                                border-radius: 12px;
                                font-size: 14px;
                                font-weight: 500;
                                color: #fff;
                                line-height: 1.5;
                            }
                            .event-compare-table .on {
                                background: #38c172; /* green */
                            }
                            .event-compare-table .off {
                                background: #ed4856; /* red */
                            }
                            .table-section .section-subtitle {
                                font-size: 16px;
                                font-weight: 700;
                                color: #0d47a1;
                                margin: 8px 0 8px 2px;
                                letter-spacing: -1px;
                            }
                        </style>
                    </div>
                    <div class="notice-box notice-point">
                        <p class="notice-title">메타 공식 문서</p>
                        <p class="notice-text">
                            <a href="https://www.facebook.com/business/help/952192354843755" target="_blank" rel="noopener noreferrer">Meta Pixel 설치 및 관리</a>
                        </p>
                    </div>
                </div>
            </div>
        `
    },
    'tag-sample-tiktok': {
        title: 'Tiktok 태그 샘플',
        content: `
            <div class="page-content tag-sample-page">
                <div class="tag-header content-hero-box">
                    <h1>🎵 Tiktok</h1>
                    <p class="tag-subtitle">Tiktok Pixel 태그 샘플</p>
                </div>
                <div class="tag-section">
                    <h2>Tiktok 픽셀 기본 태그</h2>
                    <p class="section-description">웹사이트 방문 데이터를 수집하는 기본 픽셀 태그로, &lt;head&gt;에 삽입합니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('tiktok-pixel-base-code')">복사</button>
                        <pre><code id="tiktok-pixel-base-code">&lt;!-- TikTok Pixel Code --&gt;
&lt;script&gt;
!function (w, d, t) {
  w.TiktokAnalyticsObject = t;
  var ttq = w[t] = w[t] || [];
  ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
  ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };
  for (var i = 0; i < ttq.methods.length; i++) { ttq.setAndDefer(ttq, ttq.methods[i]); }
  ttq.instance = function (t) { var e = ttq._i[t] || []; for (var n = 0; n < ttq.methods.length; n++) { ttq.setAndDefer(e, ttq.methods[n]); } return e; };
  ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = i; ttq._t = ttq._t || {}; ttq._t[e] = +new Date; ttq._o = ttq._o || {}; ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a); };
  // 픽셀 로드
  ttq.load('TT-XXXXXXX');
  // 기본 페이지뷰 전송
  ttq.page();
}(window, document, 'ttq');
&lt;/script&gt;
&lt;!-- End TikTok Pixel Code --&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>픽셀 ID를 'TT-XXXXXXX' 부분에 실제 ID로 교체</li>
                        <li>웹사이트의 모든 페이지 &lt;head&gt; 섹션에 삽입</li>
                        <li>Tiktok 이벤트 관리자 &gt; 테스트 이벤트로 수신 여부 확인</li>
                        <li>브라우저 확장(픽셀 헬퍼)로 태그 로드 여부 점검</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>Tiktok 픽셀 이벤트 추적</h2>
                    <p class="section-description">주요 기본 이벤트를 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('tiktok-standard-event-code')">복사</button>
                        <pre><code id="tiktok-standard-event-code">&lt;script&gt;
// 주요 기본 이벤트 예시
ttq.track('ViewContent', {
  content_id: 'SKU_001',
  content_name: '샘플 상품',
  content_type: 'product',
  value: 64000,
  currency: 'KRW'
});

ttq.track('AddToCart', {
  content_id: 'SKU_001',
  content_name: '샘플 상품',
  value: 64000,
  currency: 'KRW'
});

ttq.track('CompleteRegistration', {
  value: 0,
  currency: 'KRW'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>Tiktok 전자상거래 이벤트</h2>
                    <p class="section-description">구매 완료 시 전송하는 전자상거래 이벤트 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('tiktok-ecommerce-event-code')">복사</button>
                        <pre><code id="tiktok-ecommerce-event-code">&lt;script&gt;
// 전자상거래 이벤트: CompletePayment
ttq.track('CompletePayment', {
  value: 128000,
  currency: 'KRW',
  content_id: 'SKU_001',
  content_name: '샘플 상품',
  quantity: 2
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>Tiktok 맞춤 이벤트</h2>
                    <p class="section-description">비즈니스에 맞는 맞춤 이벤트를 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('tiktok-custom-event-code')">복사</button>
                        <pre><code id="tiktok-custom-event-code">&lt;script&gt;
// 맞춤 이벤트 예시
ttq.track('CustomPurchaseIntent', {
  intent_level: 'high',
  content_id: 'SKU_001',
  value: 64000,
  currency: 'KRW'
});
&lt;/script&gt;</code></pre>
                    </div>
                    <div class="notice-box notice-warning">
                        <p class="notice-title">이벤트 명 생성 시 주의사항</p>
                        <ul class="notice-list">
                            <li>이벤트 명은 영문/숫자/언더스코어 조합으로 생성해야하며, 영문으로 시작해야합니다.</li>
                            <li>동일 이벤트를 여러 이름으로 생성하면 분석이 분산됩니다.</li>
                            <li>표준 이벤트와 혼동되지 않도록 네이밍 규칙을 확정하세요.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'tag-sample-kakao': {
        title: 'Kakao 태그 샘플',
        content: `
            <div class="page-content tag-sample-page">
                <div class="tag-header content-hero-box">
                    <h1>💬 Kakao</h1>
                    <p class="tag-subtitle">Kakao 픽셀 태그 샘플</p>
                </div>
                <div class="tag-section">
                    <h2>Kakao 픽셀 기본 태그</h2>
                    <p class="section-description">웹사이트 방문 데이터를 수집하는 기본 픽셀 태그로, &lt;head&gt;에 삽입합니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('kakao-pixel-base-code')">복사</button>
                        <pre><code id="kakao-pixel-base-code">&lt;!-- Kakao Pixel Code --&gt;
&lt;script type="text/javascript"&gt;
  // 카카오 픽셀 기본 로드
  kakaoPixel('1234567890123456789').pageView();
&lt;/script&gt;</code></pre>
                    </div>
                    <ol class="info-list">
                        <li>픽셀 ID를 '1234567890123456789' 부분에 실제 ID로 교체</li>
                        <li>웹사이트의 모든 페이지 &lt;head&gt; 섹션에 삽입</li>
                        <li>Kakao 픽셀 관리자 &gt; 테스트 이벤트로 수신 여부 확인</li>
                        <li>브라우저 개발자 도구에서 픽셀 로드 여부 점검</li>
                    </ol>
                </div>

                <div class="tag-section">
                    <h2>Kakao 픽셀 이벤트 추적</h2>
                    <p class="section-description">주요 기본 이벤트를 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('kakao-standard-event-code')">복사</button>
                        <pre><code id="kakao-standard-event-code">&lt;script type="text/javascript"&gt;
// 주요 기본 이벤트 예시
kakaoPixel('1234567890123456789').viewContent({
  id: 'SKU_001',
  name: '샘플 상품',
  price: 64000
});

kakaoPixel('1234567890123456789').addToCart({
  id: 'SKU_001',
  name: '샘플 상품',
  quantity: 1,
  price: 64000
});

kakaoPixel('1234567890123456789').completeRegistration({
  user_id: 'USER_12345'
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>Kakao 전자상거래 이벤트</h2>
                    <p class="section-description">구매 완료 시 전송하는 전자상거래 이벤트 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('kakao-ecommerce-event-code')">복사</button>
                        <pre><code id="kakao-ecommerce-event-code">&lt;script type="text/javascript"&gt;
// 전자상거래 이벤트: 구매
kakaoPixel('1234567890123456789').purchase({
  total_quantity: 2,
  total_price: 128000,
  currency: 'KRW',
  products: [
    { id: 'SKU_001', name: '샘플 상품', quantity: 2, price: 64000 }
  ]
});
&lt;/script&gt;</code></pre>
                    </div>
                </div>

                <div class="tag-section">
                    <h2>Kakao 맞춤 이벤트</h2>
                    <p class="section-description">비즈니스에 맞는 맞춤 이벤트를 전송하는 예시입니다.</p>
                    <div class="code-block">
                        <button class="copy-button" onclick="copyCode('kakao-custom-event-code')">복사</button>
                        <pre><code id="kakao-custom-event-code">&lt;script type="text/javascript"&gt;
// 맞춤 이벤트 예시
kakaoPixel('1234567890123456789').customEvent('CustomPurchaseIntent', {
  intent_level: 'high',
  content_id: 'SKU_001',
  value: 64000,
  currency: 'KRW'
});
&lt;/script&gt;</code></pre>
                    </div>
                    <div class="notice-box notice-warning">
                        <p class="notice-title">이벤트 명 생성 시 주의사항</p>
                        <ul class="notice-list">
                            <li>이벤트 명은 영문/숫자/언더스코어 조합으로 생성하고 영문으로 시작하세요.</li>
                            <li>동일 이벤트를 여러 이름으로 생성하면 분석이 분산됩니다.</li>
                            <li>표준 이벤트와 혼동되지 않도록 네이밍 규칙을 확정하세요.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
};
