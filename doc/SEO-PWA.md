# SEO 및 PWA 설정

## 메타데이터 표준화(Next.js Metadata API)

- `metadataBase` + `alternates.canonical` 설정으로 정규 URL 제공
- `viewport`에 `viewportFit: "cover"` 추가로 iOS 노치 대응
- `formatDetection` 활성화(전화/이메일/주소)
- 아이콘은 `icons.icon`, `icons.apple`, `icons.shortcut`로 일원화

## Open Graph 이미지

- `app/opengraph-image.tsx`로 OG 이미지 동적 생성
- `metadata.openGraph.images`와 `twitter.images`를 `/opengraph-image` 경로로 참조

## robots/sitemap

- `app/robots.ts`와 `app/sitemap.ts`에서 `NEXT_PUBLIC_SITE_URL` 사용
- 실제 존재하는 라우트만 사이트맵에 포함 (섹션 앵커 제외)

## Apple PWA 가이드 반영

- `metadata.appleWebApp` 사용: `capable`, `title`, `statusBarStyle: 'black-translucent'`
- `viewportFit=cover`로 상태바/안전영역 대응
- `apple-touch-icon`(180x180)을 메타데이터 `icons.apple`에 명시

## manifest 설정

- `app/manifest.ts`는 `display: 'standalone'`, `theme_color`, `background_color`, 아이콘(`maskable` + `any`) 유지

## 참고

- iOS는 manifest 아이콘만으로 충분하지 않을 수 있으므로 `apple-touch-icon`을 반드시 제공
- 스플래시 이미지 제공은 선택 사항이며 유지보수 비용을 고려
