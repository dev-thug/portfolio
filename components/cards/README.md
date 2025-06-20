# Card Component System

이 디렉토리는 공통 카드 컴포넌트 시스템을 포함하고 있습니다.

## BaseCard

`BaseCard`는 모든 카드 컴포넌트의 기본이 되는 공통 컴포넌트입니다.

### 특징

- **애니메이션**: framer-motion을 사용한 스크롤 기반 애니메이션
- **스타일링**: style 속성을 통한 CSS 직접 적용 (Tailwind 클래스 이슈 해결)
- **호버 효과**: 마우스 오버 시 elevation과 스케일 변화
- **커스터마이징**: 패딩, 마진, 간격 등 유연한 설정

### Props

```typescript
interface BaseCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  index?: number;
  delay?: number;
  padding?: string | number;
  margin?: string | number;
  gap?: string | number;
  hoverEffect?: boolean;
  backdropBlur?: boolean;
  customStyle?: CSSProperties;
  onClick?: () => void;
}
```

### 사용 예시

```tsx
<BaseCard
  index={0}
  delay={0.1}
  padding="32px"
  gap="16px"
  gradient="from-blue-500 to-purple-500"
>
  <div>카드 내용</div>
</BaseCard>
```

## 전용 카드 컴포넌트들

### ExperienceCard

경력 정보를 표시하는 카드 컴포넌트입니다.

### SkillCard

기술 스택과 숙련도를 표시하는 카드 컴포넌트입니다.

### ValueCard

가치 제안이나 강점을 표시하는 카드 컴포넌트입니다.

## 스타일링 접근법

Tailwind CSS 클래스가 제대로 적용되지 않는 이슈가 있어서, `style` 속성을 사용해 CSS를 직접 적용하는 방식을 채택했습니다.

### 장점

- 확실한 스타일 적용
- 동적 값 처리 용이
- TypeScript 타입 안전성

### 사용 패턴

```tsx
<div
  className="flex flex-col"
  style={{
    gap: "16px",
    padding: "24px",
    margin: "8px 0",
  }}
>
```
