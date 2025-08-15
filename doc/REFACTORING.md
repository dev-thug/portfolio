# 리팩토링 개요

## 목표

- 최신 Next.js 15 및 Tailwind CSS v4 권장 구성을 채택
- GA4 분석 추적의 정확도 향상 및 구성 단순화
- SEO/OG/사이트맵/로봇 설정 표준화와 Apple PWA 경험 개선
- 초기 로드 성능(TTI/TBT) 개선을 위한 코드 분할 및 번들 최적화

## 주요 변경 사항

- **GA4**: `@next/third-parties/google` 도입, 초기 page_view 중복 방지, SPA 라우트 변경 추적 개선
- **SEO/PWA**: `metadataBase`/`canonical`/`viewport`/`formatDetection` 추가, 아이콘/Apple 메타 일원화, OG 이미지 라우트 추가
- **라우팅/크롤러**: `robots.ts`/`sitemap.ts`를 `NEXT_PUBLIC_SITE_URL` 기반으로 정리, 존재하지 않는 경로 제거
- **성능**: 접힘선 이하 섹션 동적 임포트, `optimizePackageImports` 및 프로덕션에서 콘솔 제거
- **UX**: `app/not-found.tsx` 추가

## 수정된/추가된 파일

- 수정: `app/layout.tsx`, `app/page.tsx`, `components/AnalyticsProvider.tsx`, `components/GoogleAnalytics.tsx`, `app/robots.ts`, `app/sitemap.ts`, `next.config.ts`
- 추가: `app/opengraph-image.tsx`, `app/not-found.tsx`

## 운영 방법

- 환경 변수로 도메인(`NEXT_PUBLIC_SITE_URL`)과 GA ID(`NEXT_PUBLIC_GA_ID`) 관리
- 배포 전 `npm run build`로 타입/번들 에러 검증
- 배포 후 체크리스트: GA DebugView, SEO(robots/sitemap/og), PWA(아이콘/상태바) 검증

## 향후 확장 제안

- 오프라인 PWA(서비스 워커) 적용
- CSP 보안 헤더 도입 및 외부 스크립트 화이트리스트 관리
- 모션 선호(`prefers-reduced-motion`)에 따른 애니메이션 제어 범위 확대
