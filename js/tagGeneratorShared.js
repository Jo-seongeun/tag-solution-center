// 태그 생성기 공통 기능
(function () {
    const MEDIA_OPTIONS = [
        {
            key: 'gtm',
            label: 'GTM',
            idLabel: 'GTM 컨테이너 ID',
            placeholder: 'GTM-XXXXXXX'
        },
        {
            key: 'ga4',
            label: 'GA4',
            idLabel: 'GA4 측정 ID',
            placeholder: 'G-XXXXXXX'
        },
        {
            key: 'google-ads',
            label: 'Google Ads',
            idLabel: 'Google Ads 전환 ID',
            placeholder: 'AW-XXXXXXX'
        },
        {
            key: 'meta',
            label: 'Meta',
            idLabel: 'Meta 픽셀 ID',
            placeholder: '1234567890',
            hasMetaMode: true
        },
        {
            key: 'tiktok',
            label: 'TikTok',
            idLabel: 'TikTok 픽셀 ID',
            placeholder: 'C123ABC'
        },
        {
            key: 'kakao',
            label: 'Kakao',
            idLabel: 'Kakao 픽셀 ID',
            placeholder: '1234567890',
            required: true
        }
    ];

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function createMediaCheckboxesHTML(pageConfig) {
        return MEDIA_OPTIONS.map(option => `
            <label class="media-checkbox">
                <input type="checkbox" data-media-key="${option.key}">
                <span>${option.label}</span>
                ${option.key === 'google-ads' && pageConfig?.enableGoogleAdsSample ? '<button type="button" class="media-sample-button" data-action="google-ads-sample">샘플 보기</button>' : ''}
            </label>
        `).join('');
    }

    function createMetaModeHTML() {
        return `
            <div class="meta-mode-options">
                <div class="meta-mode-title">픽셀 전송 방식</div>
                <label class="radio-option">
                    <input type="radio" name="meta-pixel-mode" value="single">
                    Single
                    <span class="help-tooltip" data-tooltip="single : 특정 픽셀에만 이벤트 전송 (trackSingle 사용)">ⓘ</span>
                </label>
                <label class="radio-option">
                    <input type="radio" name="meta-pixel-mode" value="multiple" checked>
                    Multiple
                    <span class="help-tooltip" data-tooltip="Multiple : 모든 픽셀에 이벤트 전송 (track 사용)">ⓘ</span>
                </label>
            </div>
        `;
    }

    function createMediaIdInputsHTML(selectedKeys) {
        if (selectedKeys.length === 0) {
            return '<p class="empty-state">선택된 매체가 없습니다.</p>';
        }

        const inputsHTML = selectedKeys.map(key => {
            const option = MEDIA_OPTIONS.find(item => item.key === key);
            if (!option) {
                return '';
            }

            return `
                <div class="media-id-item">
                    <label class="media-id-label">${option.idLabel}</label>
                    <input
                        type="text"
                        class="media-id-input"
                        data-media-id="${option.key}"
                        placeholder="${option.placeholder}"
                    />
                    ${option.hasMetaMode ? createMetaModeHTML() : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="media-id-header">매체별 ID</div>
            ${inputsHTML}
        `;
    }

    function getSelectedMediaKeys(rootElement) {
        return Array.from(rootElement.querySelectorAll('[data-media-key]:checked')).map(input => input.getAttribute('data-media-key'));
    }

    function getSelectedEcommerceEvents(rootElement) {
        return Array.from(rootElement.querySelectorAll('[data-role="ecommerce-event"]:checked'))
            .map(input => input.getAttribute('value'))
            .filter(Boolean);
    }

    function getMediaLabel(mediaKey) {
        const option = MEDIA_OPTIONS.find(item => item.key === mediaKey);
        return option ? option.label : mediaKey;
    }

    function getEcommerceNoticeHTML() {
        return `
            <div class="ecommerce-output-notice">
                <div class="ecommerce-output-title">📌 안내사항</div>
                <p>
                    발급된 이벤트는 기본 전자상거래 이벤트로 설정되어 있습니다.<br>
                    상품 ID, 카테고리, 가격 등 상세 데이터 수집이 필요한 경우 데이터 분석팀에 문의해 주세요.
                </p>
                <div class="ecommerce-output-actions">
                    <a class="secondary-button" href="mailto:XX@XX.xxx">문의 하러 가기</a>
                </div>
            </div>
        `;
    }

    function getEcommerceEventName(mediaKey, eventName) {
        const eventMap = {
            view_item: { meta: 'ViewContent', tiktok: 'ViewContent', kakao: 'ViewContent' },
            add_to_cart: { meta: 'AddToCart', tiktok: 'AddToCart', kakao: 'AddToCart' },
            begin_checkout: { meta: 'InitiateCheckout', tiktok: 'InitiateCheckout', kakao: 'InitiateCheckout' },
            add_payment_info: { meta: 'AddPaymentInfo', tiktok: 'AddPaymentInfo', kakao: 'AddPaymentInfo' },
            purchase: { meta: 'Purchase', tiktok: 'Purchase', kakao: 'Purchase' }
        };
        const mapped = eventMap[eventName];
        if (!mapped) {
            return eventName;
        }
        return mapped[mediaKey] || eventName;
    }

    function getEcommerceSamplePayload(mediaKey) {
        const ga4Payload = `{
  currency: 'KRW',
  value: 12000,
  items: [{
    item_id: 'SKU_12345',
    item_name: '샘플 상품',
    item_category: '샘플 카테고리',
    price: 12000,
    quantity: 1
  }]
}`;
        const metaPayload = `{
  content_ids: ['SKU_12345'],
  content_name: '샘플 상품',
  content_type: 'product',
  value: 12000,
  currency: 'KRW'
}`;
        const tiktokPayload = `{
  content_id: 'SKU_12345',
  content_type: 'product',
  value: 12000,
  currency: 'KRW'
}`;
        const kakaoPayload = `{
  id: 'SKU_12345',
  name: '샘플 상품',
  price: 12000,
  quantity: 1,
  currency: 'KRW',
  category: '샘플 카테고리'
}`;

        switch (mediaKey) {
            case 'gtm':
            case 'ga4':
                return ga4Payload;
            case 'meta':
                return metaPayload;
            case 'tiktok':
                return tiktokPayload;
            case 'kakao':
                return kakaoPayload;
            default:
                return '{}';
        }
    }

    function getMediaIdValue(rootElement, mediaKey) {
        const input = rootElement.querySelector(`[data-media-id="${mediaKey}"]`);
        return input ? input.value.trim() : '';
    }

    function getMetaMode(rootElement) {
        const checkedRadio = rootElement.querySelector('input[name="meta-pixel-mode"]:checked');
        return checkedRadio ? checkedRadio.value : 'single';
    }

    function createBasicInfoComments(basicInfo) {
        if (!basicInfo) {
            return '';
        }

        const commentLines = [];
        if (basicInfo.siteName) {
            commentLines.push(`<!-- 웹사이트명: ${basicInfo.siteName} -->`);
        }
        if (basicInfo.siteUrl) {
            commentLines.push(`<!-- 웹사이트 URL: ${basicInfo.siteUrl} -->`);
        }

        return commentLines.length > 0 ? `${commentLines.join('\n')}\n` : '';
    }

    function createTagCode(mediaKey, mediaId, metaMode, tagTypeLabel, basicInfo) {
        const resolvedId = mediaId || 'ID_입력필요';
        const basicInfoComments = createBasicInfoComments(basicInfo);
        const isBasicTag = tagTypeLabel === '기본 태그';

        switch (mediaKey) {
            case 'gtm':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - GTM -->\n<script>\n(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','${resolvedId}');\n</script>`;
            case 'ga4':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - GA4 -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=${resolvedId}"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${resolvedId}');\n</script>`;
            case 'google-ads':
                if (isBasicTag) {
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - Google Ads (Base) -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=${resolvedId}"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n// 기본 태그 (config)\ngtag('config', '${resolvedId}');\n</script>`;
                }
                return `${basicInfoComments}<!-- ${tagTypeLabel} - Google Ads -->\n<script>\nwindow.googleAdsConversionId = '${resolvedId}';\n// 전환 태그 동작 로직을 연결하세요.\n</script>`;
            case 'meta':
                if (isBasicTag) {
                    const baseTrackLine = metaMode === 'single'
                        ? `fbq('trackSingle', '${resolvedId}', 'PageView');`
                        : `fbq('track', 'PageView');`;
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - Meta (Base) -->\n<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n document,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '${resolvedId}');\n${baseTrackLine}\n</script>`;
                }
                if (metaMode === 'multiple') {
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - Meta (Multiple) -->\n<script>\nfbq('init', '${resolvedId}');\nfbq('track', 'PageView');\n</script>`;
                }
                return `${basicInfoComments}<!-- ${tagTypeLabel} - Meta (Single) -->\n<script>\nfbq('init', '${resolvedId}');\nfbq('trackSingle', '${resolvedId}', 'PageView');\n</script>`;
            case 'tiktok':
                if (isBasicTag) {
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - TikTok (Base) -->\n<script>\n!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\n'page','track','identify','instances','debug','on','off','once','ready','alias',\n'group','enableCookie','disableCookie'];ttq.setAndDefer=function(t,e){t[e]=function(){\n t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;\n i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){\n var e=ttq._i[t]||[];for(var n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);\n return e};ttq.load=function(e,n){var i='https://analytics.tiktok.com/i18n/pixel/events.js';\n ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=i;ttq._t=ttq._t||{};ttq._t[e]=+new Date;\n ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=document.createElement('script');o.type='text/javascript';\n o.async=!0;o.src=i+'?sdkid='+e+'&lib='+t;var a=document.getElementsByTagName('script')[0];\n a.parentNode.insertBefore(o,a)};ttq.load('${resolvedId}');\nttq.page();}(window,document,'ttq');\n</script>`;
                }
                return `${basicInfoComments}<!-- ${tagTypeLabel} - TikTok -->\n<script>\nwindow.tiktokPixelId = '${resolvedId}';\n// TikTok 픽셀 스크립트를 연결하세요.\n</script>`;
            case 'kakao':
                if (isBasicTag) {
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - Kakao (Base) -->\n<script>\n!function(a,b,c,d,e){a.KakaoAnalyticsObject=e;a[e]=a[e]||function(){\n (a[e].q=a[e].q||[]).push(arguments)};var s=b.createElement(c);s.async=1;\n s.src=d;var f=b.getElementsByTagName(c)[0];f.parentNode.insertBefore(s,f);\n}(window,document,'script','https://t1.daumcdn.net/kas/static/kp.js','kakaoPixel');\nkakaoPixel('${resolvedId}').pageView();\n</script>`;
                }
                return `${basicInfoComments}<!-- ${tagTypeLabel} - Kakao -->\n<script>\nwindow.kakaoPixelId = '${resolvedId}';\n// Kakao 픽셀 스크립트를 연결하세요.\n</script>`;
            default:
                return '';
        }
    }

    function createConversionTagCode(mediaKey, mediaId, metaMode, tagTypeLabel, basicInfo, conversionEvents) {
        const resolvedId = mediaId || 'ID_입력필요';
        const basicInfoComments = createBasicInfoComments(basicInfo);
        const eventLines = conversionEvents.map(eventName => `- ${eventName}`).join('\n');
        const mediaLabel = getMediaLabel(mediaKey);
        const eventLabel = conversionEvents.join(', ');

        switch (mediaKey) {
            case 'gtm':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - GTM (전환 이벤트) -->\n<!-- 이벤트 목록: ${conversionEvents.join(', ')} -->\n<script>\nwindow.dataLayer = window.dataLayer || [];\n${conversionEvents.map(eventName => `window.dataLayer.push({ event: '${eventName}' });`).join('\n')}\n</script>`;
            case 'ga4':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${conversionEvents.map(eventName => `gtag('event', '${eventName}');`).join('\n')}\n</script>`;
            case 'meta':
                if (metaMode === 'multiple') {
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${conversionEvents.map(eventName => `fbq('trackCustom', '${eventName}');`).join('\n')}\n</script>`;
                }
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${conversionEvents.map(eventName => `fbq('trackSingleCustom', '${resolvedId}', '${eventName}');`).join('\n')}\n</script>`;
            case 'tiktok':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${conversionEvents.map(eventName => `ttq.track('${eventName}');`).join('\n')}\n</script>`;
            case 'kakao':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${conversionEvents.map(eventName => `kakaoPixel('${resolvedId}').track('${eventName}');`).join('\n')}\n</script>`;
            default:
                return '';
        }
    }

    function createEcommerceTagCode(mediaKey, mediaId, metaMode, tagTypeLabel, basicInfo, events) {
        const resolvedId = mediaId || 'ID_입력필요';
        const basicInfoComments = createBasicInfoComments(basicInfo);
        const mediaLabel = getMediaLabel(mediaKey);
        const eventLabel = events.join(', ');

        switch (mediaKey) {
            case 'gtm':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - GTM (전자상거래 이벤트) -->\n<!-- 이벤트 목록: ${events.join(', ')} -->\n<script>\nwindow.dataLayer = window.dataLayer || [];\n${events.map(eventName => {
                    const payload = getEcommerceSamplePayload('gtm');
                    return `window.dataLayer.push({\n  event: '${eventName}',\n  ecommerce: ${payload}\n});`;
                }).join('\n')}\n</script>`;
            case 'ga4':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${events.map(eventName => {
                    const payload = getEcommerceSamplePayload('ga4');
                    return `gtag('event', '${eventName}', ${payload});`;
                }).join('\n')}\n</script>`;
            case 'meta':
                if (metaMode === 'single') {
                    return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${events.map(eventName => {
                        const mapped = getEcommerceEventName('meta', eventName);
                        const payload = getEcommerceSamplePayload('meta');
                        return `fbq('trackSingle', '${resolvedId}', '${mapped}', ${payload});`;
                    }).join('\n')}\n</script>`;
                }
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${events.map(eventName => {
                    const mapped = getEcommerceEventName('meta', eventName);
                    const payload = getEcommerceSamplePayload('meta');
                    return `fbq('track', '${mapped}', ${payload});`;
                }).join('\n')}\n</script>`;
            case 'tiktok':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${events.map(eventName => {
                    const mapped = getEcommerceEventName('tiktok', eventName);
                    const payload = getEcommerceSamplePayload('tiktok');
                    return `ttq.track('${mapped}', ${payload});`;
                }).join('\n')}\n</script>`;
            case 'kakao':
                return `${basicInfoComments}<!-- ${tagTypeLabel} - ${mediaLabel} -->\n<!-- 이벤트 목록: ${eventLabel} -->\n<script>\n${events.map(eventName => {
                    const mapped = getEcommerceEventName('kakao', eventName);
                    const payload = getEcommerceSamplePayload('kakao');
                    return `kakaoPixel('${resolvedId}').track('${mapped}', ${payload});`;
                }).join('\n')}\n</script>`;
            default:
                return '';
        }
    }

    function loadConversionEvents(storageKey) {
        const raw = sessionStorage.getItem(storageKey);
        if (!raw) {
            return [];
        }
        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }

    function saveConversionEvents(storageKey, events) {
        sessionStorage.setItem(storageKey, JSON.stringify(events));
    }

    function isValidConversionEventName(value) {
        return /^[A-Za-z][A-Za-z0-9_]*$/.test(value);
    }

    function renderConversionEventList(container, events) {
        if (!container) {
            return;
        }
        if (events.length === 0) {
            container.innerHTML = '<p class="empty-state">등록된 전환 이벤트가 없습니다.</p>';
            return;
        }

        container.innerHTML = events.map((eventName, index) => `
            <div class="conversion-event-item" data-index="${index}">
                <span class="conversion-event-name">${eventName}</span>
                <div class="conversion-event-actions">
                    <button type="button" class="secondary-button" data-action="event-edit">수정</button>
                    <button type="button" class="secondary-button danger" data-action="event-delete">삭제</button>
                </div>
            </div>
        `).join('');
    }

    function initConversionEventSection(rootElement, pageConfig) {
        const inputElement = rootElement.querySelector('[data-role="conversion-event-input"]');
        const addButton = rootElement.querySelector('[data-role="conversion-event-add"]');
        const listElement = rootElement.querySelector('[data-role="conversion-event-list"]');
        if (!inputElement || !addButton || !listElement) {
            return null;
        }

        const storageKey = `tagConversionEvents:${pageConfig?.eventStorageKey || 'default'}`;
        let events = loadConversionEvents(storageKey);
        let editIndex = null;

        const updateList = () => {
            renderConversionEventList(listElement, events);
        };

        updateList();

        addButton.addEventListener('click', () => {
            const rawValue = inputElement.value.trim();
            if (!rawValue) {
                alert('전환 이벤트 명을 입력해 주세요.');
                return;
            }
            if (!isValidConversionEventName(rawValue)) {
                alert('영문으로 시작하고 영문과 숫자, 일부 특수 문자만 사용 가능합니다. (예: purchase, signup, scroll_25)');
                return;
            }

            if (editIndex !== null) {
                events[editIndex] = rawValue;
                editIndex = null;
                addButton.textContent = '추가';
            } else {
                events.push(rawValue);
            }
            saveConversionEvents(storageKey, events);
            inputElement.value = '';
            updateList();
        });

        listElement.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }
            const itemElement = target.closest('.conversion-event-item');
            if (!itemElement) {
                return;
            }
            const index = Number(itemElement.getAttribute('data-index'));
            if (Number.isNaN(index) || !events[index]) {
                return;
            }

            if (target.matches('[data-action="event-edit"]')) {
                inputElement.value = events[index];
                editIndex = index;
                addButton.textContent = '수정';
            }

            if (target.matches('[data-action="event-delete"]')) {
                events.splice(index, 1);
                saveConversionEvents(storageKey, events);
                updateList();
            }
        });

        return {
            getEvents: () => events
        };
    }

    function getBasicInfo(rootElement) {
        const siteNameInput = rootElement.querySelector('[data-role="basic-site-name"]');
        const siteUrlInput = rootElement.querySelector('[data-role="basic-site-url"]');
        return {
            siteName: siteNameInput ? siteNameInput.value.trim() : '',
            siteUrl: siteUrlInput ? siteUrlInput.value.trim() : ''
        };
    }

    function renderEventTable(rootElement, outputListElement, selectedKeys, tagTypeLabel, events, codeBuilder, totalLabel) {
        const metaMode = getMetaMode(rootElement);
        const basicInfo = getBasicInfo(rootElement);

        const headerCells = events.map(eventName => `<th>${eventName}</th>`).join('');

        const bodyRows = selectedKeys.map((mediaKey, rowIndex) => {
            const mediaOption = MEDIA_OPTIONS.find(option => option.key === mediaKey);
            const mediaId = getMediaIdValue(rootElement, mediaKey);

            const cells = events.map((eventName, colIndex) => {
                const codeText = codeBuilder(
                    mediaKey,
                    mediaId,
                    metaMode,
                    tagTypeLabel,
                    basicInfo,
                    [eventName]
                );
                const codeId = `code-${mediaKey}-${rowIndex}-${colIndex}-${Date.now()}`;
                return `
                    <td>
                        <div class="conversion-code-block">
                            <button class="copy-button" data-action="copy" data-target="${codeId}">복사</button>
                            <pre><code id="${codeId}">${escapeHtml(codeText)}</code></pre>
                        </div>
                    </td>
                `;
            }).join('');

            return `
                <tr>
                    <td class="conversion-event-cell">${mediaOption ? mediaOption.label : mediaKey}</td>
                    ${cells}
                </tr>
            `;
        }).join('');

        const totalRowCells = events.map((eventName, colIndex) => {
            const nonGtmKeys = selectedKeys.filter(key => key !== 'gtm');
            if (nonGtmKeys.length === 0) {
                return `
                    <td>
                        <div class="conversion-total-note">
                            GTM만 선택되어 Total 태그를 생성할 수 없습니다.
                        </div>
                    </td>
                `;
            }

            const mergedCommands = nonGtmKeys.map(mediaKey => {
                const mediaId = getMediaIdValue(rootElement, mediaKey);
                const rawCode = codeBuilder(
                    mediaKey,
                    mediaId,
                    metaMode,
                    tagTypeLabel,
                    basicInfo,
                    [eventName]
                );
                const noComments = rawCode.replace(/^\s*<!--.*?-->\s*\n?/gm, '').trim();
                const lines = noComments.split('\n').map(line => line.trim());
                return lines.filter(line => line && !line.startsWith('<script>') && !line.startsWith('</script>'));
            }).flat();

            const mergedCode = `
<!-- ${tagTypeLabel} - total ${eventName} -->
<script>
${mergedCommands.join('\n')}
</script>
            `.trim();

            const totalCodeId = `code-total-${colIndex}-${Date.now()}`;
            return `
                <td>
                    <div class="conversion-code-block total">
                        <button class="copy-button" data-action="copy" data-target="${totalCodeId}">복사</button>
                        <pre><code id="${totalCodeId}">${escapeHtml(mergedCode)}</code></pre>
                    </div>
                </td>
            `;
        }).join('');

        outputListElement.innerHTML = `
            <div class="conversion-table-wrap">
                <table class="conversion-table">
                    <thead>
                        <tr>
                            <th>매체</th>
                            ${headerCells}
                        </tr>
                    </thead>
                    <tbody>
                        ${bodyRows}
                        <tr>
                            <td class="conversion-event-cell">
                                ${totalLabel}
                                <div class="conversion-total-note">GTM은 구성 방식이 달라 합산에서 제외됩니다.</div>
                            </td>
                            ${totalRowCells}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    function renderTagOutput(rootElement, outputListElement, selectedKeys, tagTypeLabel, options) {
        if (selectedKeys.length === 0) {
            if (options?.mode === 'ecommerce') {
                outputListElement.innerHTML = getEcommerceNoticeHTML();
            } else {
                outputListElement.innerHTML = '<p class="empty-state">매체를 선택한 후 태그를 생성해 주세요.</p>';
            }
            return;
        }

        const metaMode = getMetaMode(rootElement);
        const basicInfo = getBasicInfo(rootElement);
        const mode = options?.mode || 'basic';
        const conversionEvents = options?.conversionEvents || [];
        const ecommerceEvents = options?.ecommerceEvents || [];
        if (mode === 'conversion') {
            renderEventTable(
                rootElement,
                outputListElement,
                selectedKeys,
                tagTypeLabel,
                conversionEvents,
                createConversionTagCode,
                'Total (GTM 제외)'
            );
            return;
        }
        if (mode === 'ecommerce') {
            renderEventTable(
                rootElement,
                outputListElement,
                selectedKeys,
                tagTypeLabel,
                ecommerceEvents,
                createEcommerceTagCode,
                'Total (GTM 제외)'
            );
            return;
        }

        const outputHTML = selectedKeys.map(mediaKey => {
            const mediaOption = MEDIA_OPTIONS.find(option => option.key === mediaKey);
            const mediaId = getMediaIdValue(rootElement, mediaKey);
            const codeText = createTagCode(mediaKey, mediaId, metaMode, tagTypeLabel, basicInfo);
            const codeId = `code-${mediaKey}-${Date.now()}`;

            return `
                <div class="tag-output-card">
                    <div class="tag-output-card-header">
                        <h4>${mediaOption ? mediaOption.label : mediaKey}</h4>
                    </div>
                    <div class="code-block">
                        <button class="copy-button" data-action="copy" data-target="${codeId}">복사</button>
                        <pre><code id="${codeId}">${escapeHtml(codeText)}</code></pre>
                    </div>
                </div>
            `;
        }).join('');

        outputListElement.innerHTML = outputHTML;
    }

    function validateRequiredMedia(rootElement, selectedKeys) {
        const kakaoSelected = selectedKeys.includes('kakao');
        if (!kakaoSelected) {
            return true;
        }

        const kakaoId = getMediaIdValue(rootElement, 'kakao');
        if (!kakaoId) {
            alert('Kakao 픽셀 ID를 입력해야 태그를 생성할 수 있습니다.');
            const kakaoInput = rootElement.querySelector('[data-media-id="kakao"]');
            if (kakaoInput) {
                kakaoInput.focus();
            }
            return false;
        }

        return true;
    }

    function copyCodeText(codeElement, buttonElement) {
        if (!codeElement) {
            return;
        }

        const codeText = codeElement.textContent || '';
        if (!navigator.clipboard) {
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = codeText;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            buttonElement.classList.add('copied');
            buttonElement.textContent = '복사됨';
            return;
        }

        navigator.clipboard.writeText(codeText).then(() => {
            buttonElement.classList.add('copied');
            buttonElement.textContent = '복사됨';
        }).catch(() => {
            alert('복사에 실패했습니다. 다시 시도해 주세요.');
        });
    }

    window.initTagGeneratorPage = function initTagGeneratorPage(rootId, pageConfig) {
        const rootElement = document.getElementById(rootId);
        if (!rootElement) {
            return;
        }

        const mediaSelection = rootElement.querySelector('[data-role="media-selection"]');
        const mediaIdArea = rootElement.querySelector('[data-role="media-id-area"]');
        const generateButton = rootElement.querySelector('[data-role="generate-button"]');
        const outputList = rootElement.querySelector('[data-role="tag-output-list"]');
        const tagTypeLabel = pageConfig?.tagTypeLabel || '태그';
        const mode = pageConfig?.mode || 'basic';
        const storageKey = `tagGeneratorOutput:${pageConfig?.storageKey || rootId}`;

        if (!mediaSelection || !mediaIdArea || !generateButton || !outputList) {
            console.error('태그 생성기 초기화에 필요한 요소가 없습니다.');
            return;
        }

        const defaultOutputHTML = mode === 'ecommerce'
            ? getEcommerceNoticeHTML()
            : '<p class="empty-state">매체를 선택한 후 태그를 생성해 주세요.</p>';

        mediaSelection.innerHTML = createMediaCheckboxesHTML(pageConfig);
        mediaIdArea.innerHTML = '<p class="empty-state">매체를 선택하면 ID 입력 영역이 표시됩니다.</p>';
        outputList.innerHTML = defaultOutputHTML;

        const outputPanel = outputList.closest('.tag-output-panel');
        if (outputPanel) {
            const outputTitle = outputPanel.querySelector('h3');
            if (outputTitle) {
                let header = outputPanel.querySelector('.tag-panel-header');
                if (!header) {
                    header = document.createElement('div');
                    header.className = 'tag-panel-header';
                    outputTitle.parentNode.insertBefore(header, outputTitle);
                    header.appendChild(outputTitle);
                }

                const resetButton = document.createElement('button');
                resetButton.type = 'button';
                resetButton.className = 'secondary-button reset-button';
                resetButton.textContent = '초기화';
                header.appendChild(resetButton);

                resetButton.addEventListener('click', () => {
                    sessionStorage.removeItem(storageKey);
                    outputList.innerHTML = defaultOutputHTML;
                });
            }
        }

        // 세션에 저장된 결과 복원
        try {
            const savedRaw = sessionStorage.getItem(storageKey);
            if (savedRaw) {
                const saved = JSON.parse(savedRaw);
                if (saved && saved.html) {
                    outputList.innerHTML = saved.html;
                }
                if (saved && Array.isArray(saved.selectedMedia)) {
                    // 체크박스 복원
                    saved.selectedMedia.forEach(key => {
                        const checkbox = mediaSelection.querySelector(`[data-media-key="${key}"]`);
                        if (checkbox) {
                            checkbox.checked = true;
                        }
                    });
                    if ((mode === 'conversion' || mode === 'ecommerce')) {
                        const googleAdsCheckbox = mediaSelection.querySelector('[data-media-key="google-ads"]');
                        if (googleAdsCheckbox && googleAdsCheckbox.checked) {
                            googleAdsCheckbox.checked = false;
                            googleAdsCheckbox.disabled = true;
                        }
                    }
                    // 입력 필드 렌더
                    mediaIdArea.innerHTML = createMediaIdInputsHTML(saved.selectedMedia);

                    // 매체별 ID 복원
                    if (saved.mediaIds) {
                        Object.keys(saved.mediaIds).forEach(key => {
                            const input = mediaIdArea.querySelector(`[data-media-id="${key}"]`);
                            if (input) {
                                input.value = saved.mediaIds[key];
                            }
                        });
                    }

                    // Meta mode 복원
                    if (saved.metaMode) {
                        const metaRadio = mediaIdArea.querySelector(`input[name="meta-pixel-mode"][value="${saved.metaMode}"]`);
                        if (metaRadio) {
                            metaRadio.checked = true;
                        }
                    }
                }

                // 기본 정보 복원
                if (saved.basicInfo) {
                    const siteNameInput = rootElement.querySelector('[data-role="basic-site-name"]');
                    const siteUrlInput = rootElement.querySelector('[data-role="basic-site-url"]');
                    if (siteNameInput && saved.basicInfo.siteName) {
                        siteNameInput.value = saved.basicInfo.siteName;
                    }
                    if (siteUrlInput && saved.basicInfo.siteUrl) {
                        siteUrlInput.value = saved.basicInfo.siteUrl;
                    }
                }

                // 전환 이벤트 복원 (입력 UI/리스트는 conversion 섹션에서 관리)
                if (mode === 'conversion' && saved.conversionEvents) {
                    sessionStorage.setItem(`tagConversionEvents:${pageConfig?.eventStorageKey || 'default'}`, JSON.stringify(saved.conversionEvents));
                }

                if (mode === 'ecommerce' && Array.isArray(saved.ecommerceEvents)) {
                    saved.ecommerceEvents.forEach(eventName => {
                        const checkbox = rootElement.querySelector(`[data-role="ecommerce-event"][value="${eventName}"]`);
                        if (checkbox) {
                            checkbox.checked = true;
                        }
                    });
                }
            }
        } catch (error) {
            // ignore storage errors
        }

        const conversionEventSection = initConversionEventSection(rootElement, pageConfig);

        mediaSelection.addEventListener('change', (event) => {
            const target = event.target;
            if (target instanceof HTMLInputElement && target.matches('[data-media-key]')) {
                const mediaKey = target.getAttribute('data-media-key');
                if ((mode === 'conversion' || mode === 'ecommerce') && mediaKey === 'google-ads' && target.checked) {
                    alert('Google Ads는 임의 맞춤 전환 태그 생성이 불가합니다. Google Ads 플랫폼에서 생성해 주세요.');
                    target.checked = false;
                    target.disabled = true;
                }
            }

            const selectedKeys = getSelectedMediaKeys(rootElement);
            mediaIdArea.innerHTML = createMediaIdInputsHTML(selectedKeys);
        });

        generateButton.addEventListener('click', () => {
            const selectedKeys = getSelectedMediaKeys(rootElement);
            if (!validateRequiredMedia(rootElement, selectedKeys)) {
                return;
            }
            if (mode === 'conversion') {
                const conversionEvents = conversionEventSection ? conversionEventSection.getEvents() : [];
                if (!conversionEvents || conversionEvents.length === 0) {
                    alert('전환 이벤트 명을 먼저 추가해 주세요.');
                    return;
                }
                if (selectedKeys.includes('google-ads')) {
                    alert('Google Ads는 임의 맞춤 전환 태그 생성이 불가합니다. Google Ads 플랫폼에서 생성해 주세요.');
                }
                const filteredKeys = selectedKeys.filter(key => key !== 'google-ads');
                renderTagOutput(rootElement, outputList, filteredKeys, tagTypeLabel, {
                    mode,
                    conversionEvents
                });
                try {
                    const payload = {
                        html: outputList.innerHTML,
                        selectedMedia: selectedKeys,
                        mediaIds: filteredKeys.reduce((acc, key) => {
                            acc[key] = getMediaIdValue(rootElement, key);
                            return acc;
                        }, {}),
                        metaMode: getMetaMode(rootElement),
                        conversionEvents: conversionEvents,
                        basicInfo: getBasicInfo(rootElement)
                    };
                    sessionStorage.setItem(storageKey, JSON.stringify(payload));
                } catch (error) {
                    // ignore storage errors
                }
                return;
            }

            if (mode === 'ecommerce') {
                const ecommerceEvents = getSelectedEcommerceEvents(rootElement);
                if (!ecommerceEvents || ecommerceEvents.length === 0) {
                    alert('전자상거래 이벤트를 최소 1개 선택해 주세요.');
                    return;
                }
                if (selectedKeys.includes('google-ads')) {
                    alert('Google Ads는 임의 맞춤 전환 태그 생성이 불가합니다. Google Ads 플랫폼에서 생성해 주세요.');
                }
                const filteredKeys = selectedKeys.filter(key => key !== 'google-ads');
                renderTagOutput(rootElement, outputList, filteredKeys, tagTypeLabel, {
                    mode,
                    ecommerceEvents
                });
                try {
                    const payload = {
                        html: outputList.innerHTML,
                        selectedMedia: selectedKeys,
                        mediaIds: filteredKeys.reduce((acc, key) => {
                            acc[key] = getMediaIdValue(rootElement, key);
                            return acc;
                        }, {}),
                        metaMode: getMetaMode(rootElement),
                        basicInfo: getBasicInfo(rootElement),
                        ecommerceEvents: ecommerceEvents
                    };
                    sessionStorage.setItem(storageKey, JSON.stringify(payload));
                } catch (error) {
                    // ignore storage errors
                }
                return;
            }

            renderTagOutput(rootElement, outputList, selectedKeys, tagTypeLabel, {
                mode
            });
            try {
                const payload = {
                    html: outputList.innerHTML,
                    selectedMedia: selectedKeys,
                    mediaIds: selectedKeys.reduce((acc, key) => {
                        acc[key] = getMediaIdValue(rootElement, key);
                        return acc;
                    }, {}),
                    metaMode: getMetaMode(rootElement),
                    basicInfo: getBasicInfo(rootElement)
                };
                sessionStorage.setItem(storageKey, JSON.stringify(payload));
            } catch (error) {
                // ignore storage errors
            }
        });

        rootElement.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            if (target.matches('[data-action="copy"]')) {
                const codeId = target.getAttribute('data-target');
                const codeElement = codeId ? rootElement.querySelector(`#${codeId}`) : null;
                copyCodeText(codeElement, target);
            }

            if (target.matches('[data-action="google-ads-sample"]')) {
                if (window.navigationInstance && typeof window.navigationInstance.navigateToPage === 'function') {
                    window.navigationInstance.navigateToPage('tag-sample-google-ads', 'tag-sample');
                    const anchorId = 'google-ads-conversion-action';
                    window.location.hash = anchorId;
                    requestAnimationFrame(() => {
                        const anchorElement = document.getElementById(anchorId);
                        if (anchorElement) {
                            anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                }
            }
        });
    };
})();
