# 분석/추적(GA4) 구성

## 개요

- GA 스크립트 삽입은 Next 공식 패키지 `@next/third-parties/google` 사용
- 초기 자동 page_view와 수동 page_view의 중복을 방지
- 라우트 변경 시에만 page_view 전송

## 적용 내용

- `app/layout.tsx`
  - `GoogleAnalytics`를 `@next/third-parties/google`의 `GA`로 교체
  - GA ID는 `NEXT_PUBLIC_GA_ID`로 주입
- `components/AnalyticsProvider.tsx`
  - 초기 마운트 시 page_view 전송 제거
  - `usePathname`/`useSearchParams`로 라우트 변경 감지 후 `trackPageView` 호출
- `components/GoogleAnalytics.tsx`
  - 스크립트 삽입 로직 제거, 유틸 함수만 유지
  - `GA_ID`를 환경 변수에서 읽어 일관성 확보

## 이벤트/유틸 사용법

```ts
import {
  trackEvent,
  trackPageView,
  trackProjectClick,
  trackContactClick,
  trackSkillClick,
  trackDownload,
  trackExternalLink,
  trackScrollDepth,
} from "@/components/GoogleAnalytics";

trackEvent("click", "cta", "hero_primary");
trackPageView("https://example.com/about", "About");
trackScrollDepth(50);
```

## 점검 방법

- GA DebugView에서 초기 로드에 page_view가 1회만 기록되는지 확인
- 내부 내비게이션(링크 클릭 후 페이지 이동) 시 page_view가 추가로 기록되는지 확인
