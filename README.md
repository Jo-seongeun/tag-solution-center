# 태그 솔루션 센터

광고 데이터 & 태그 솔루션을 위한 대시보드 웹 애플리케이션입니다.

## 📁 프로젝트 구조

```
tag-solution-center/
├── index.html              # 메인 HTML 파일
├── css/
│   ├── common.css         # 공통 스타일
│   ├── gnb.css            # GNB 스타일
│   ├── sidebar.css        # 사이드바 및 페이지 컨텐츠 스타일
│   └── dashboard.css      # 대시보드 스타일
├── js/
│   ├── main.js            # 메인 JavaScript
│   ├── gnb.js             # GNB 드롭다운 기능
│   └── navigation.js      # 페이지 네비게이션
└── data/
    └── menuData.js        # 메뉴 및 페이지 데이터
```

## 🚀 사용 방법

1. **로컬에서 실행**
   - `index.html` 파일을 브라우저에서 열기
   - 또는 Live Server 등의 로컬 서버 사용

2. **페이지 구성**
   - **대시보드(홈)**: 메인 화면, 주요 기능 소개
   - **퀵 도구**: 페이지 태그 진단, 태그 설정 등
   - **지식 센터**: GA4, GTM 관련 학습 자료
   - **설정 및 가이드**: 트러블슈팅, 확장 프로그램 가이드

## 🎨 주요 기능

### 1. GNB (Global Navigation Bar)
- 대시보드(홈) 버튼
- 드롭다운 메뉴 (퀵 도구, 지식 센터, 설정 및 가이드)
- 활성 상태 표시
- 반응형 디자인

### 2. 사이드바
- 카테고리별 메뉴 표시
- 현재 페이지 하이라이트
- 대시보드에서는 숨김

### 3. 동적 페이지 전환
- SPA(Single Page Application) 방식
- URL 파라미터 지원 (`?page=xxx&category=xxx`)
- 브라우저 히스토리 지원 (뒤로가기/앞으로가기)

## 🔧 커스터마이징

### 새로운 페이지 추가하기

1. **menuData.js에 메뉴 추가**
```javascript
'your-category': {
    title: '카테고리 제목',
    items: [
        { 
            id: 'new-page', 
            name: '새 페이지',
            icon: '🆕'
        }
    ]
}
```

2. **pageContents에 컨텐츠 추가**
```javascript
'new-page': {
    title: '새 페이지',
    content: `
        <div class="page-content">
            <h1>새 페이지</h1>
            <p>페이지 내용...</p>
        </div>
    `
}
```

3. **HTML의 GNB에 드롭다운 아이템 추가**
```html
<a href="#" class="dropdown-item" data-page="new-page">새 페이지</a>
```

### 스타일 변경하기

`css/common.css`의 CSS 변수를 수정하여 전체 디자인 변경:

```css
:root {
    --primary-color: #6366f1;  /* 메인 컬러 */
    --bg-primary: #f8f9fa;     /* 배경 컬러 */
    /* ... */
}
```

## 📱 반응형 지원

- 데스크톱: 1024px 이상
- 태블릿: 768px ~ 1024px
- 모바일: 768px 이하

## 🌐 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 💡 개발 팁

1. **콘솔 확인**: 브라우저 개발자 도구에서 에러 확인
2. **URL 파라미터**: 특정 페이지로 직접 접근 가능 (예: `?page=ga4-setup&category=data-center`)
3. **로컬 스토리지**: Utils 객체의 saveToStorage/loadFromStorage 사용

## 📝 향후 개선 사항

- [ ] 페이지별 실제 기능 구현
- [ ] API 연동
- [ ] 검색 기능 추가
- [ ] 다크 모드 지원
- [ ] 다국어 지원

## 📄 라이선스

이 프로젝트는 내부 사용을 위한 프로젝트입니다.
