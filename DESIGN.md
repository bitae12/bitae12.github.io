# 김 에디터 자기소개 사이트 — 디자인 가이드

GitHub Pages 배포를 전제로 한 **정적 단일 페이지** 디자인입니다. `introduce.md`의 섹션 매핑과 연출 노트(다크 그레이 + teal)를 따릅니다.

## 브랜드

| 항목 | 값 |
|------|-----|
| 톤 | 존댓말, 짧은 문장, clear & calm |
| 포인트 컬러 | Teal `#2dd4bf` |
| 배경 | Dark gray `#14171c` |
| 연상 | 편집 타임라인 그리드, 타임코드(모노스페이스) |

## 타이포그래피

- **본문:** Noto Sans KR (Google Fonts CDN)
- **라벨·타임코드:** JetBrains Mono
- **Hero H1:** clamp(2rem, 5vw, 2.75rem)

## 레이아웃

- 최대 너비 `72rem`, 섹션 패딩 `4rem 1.25rem`
- Sticky 헤더 + 앵커 스크롤 (`scroll-padding-top`)
- 섹션: Hero → About → Work → Process → Skills → FAQ → Contact

## 컴포넌트

- **Hero:** 태그라인 + 3분 요약 테이블 + CTA 3개
- **Timeline:** 좌측 teal dot + 세로 라인 (경력)
- **Philosophy:** 01~05 번호 카드
- **Project cards:** dt/dd 블록
- **FAQ:** 아코디언 (JS, 서버 불필요)
- **Skills:** 표 + pill tags

## GitHub Pages 제약 준수

- 빌드 도구 없음 (`index.html` 루트)
- 상대 경로: `css/styles.css`, `js/main.js`
- 클라이언트 라우터·서버 API·환경 변수 미사용
- 외부: Google Fonts, 예시 링크(Vimeo 등)만 HTTPS

## 접근성

- Skip link, semantic landmarks, FAQ `aria-expanded`
- `prefers-reduced-motion` 시 scroll/transition 완화

## 파일 매핑

| 파일 | 역할 |
|------|------|
| `index.html` | 콘텐츠 (`introduce.md` 요약·구조) |
| `css/styles.css` | 토큰·레이아웃·컴포넌트 |
| `js/main.js` | 모바일 nav, FAQ, 섹션 active, 연도 |
