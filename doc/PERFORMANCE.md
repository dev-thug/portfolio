# 성능 최적화 전략

## 코드 분할

- 접힘선(Above-the-fold) 이하 섹션은 `next/dynamic`으로 동적 임포트하여 초기 TTI/TBT 개선

```tsx
import dynamic from "next/dynamic";
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/sections/Experience"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});
```

## 패키지 최적화

- `next.config.ts`에서 `experimental.optimizePackageImports`로 `lucide-react`, `framer-motion` 트리셰이킹 강화
- 프로덕션에서 `compiler.removeConsole`로 불필요한 콘솔 제거(경고/에러 제외)

## 모션/접근성

- 글로벌 CSS에 `prefers-reduced-motion` 가드 존재
- 핵심 애니메이션 컴포넌트에도 조건부 애니메이션 적용 고려

## 측정/검증

- Lighthouse(Web Vitals): LCP/INP/CLS
- Next.js Analyzer(선택): 번들 크기 분석
