# UI Component System

## Badge System

### Badge Component

공통으로 사용할 수 있는 Badge 컴포넌트입니다.

#### 특징

- **다양한 변형**: default, tech, skill, category 등 4가지 variant
- **크기 옵션**: sm, md, lg 3가지 크기
- **아이콘 지원**: 그라데이션 배경의 아이콘 표시
- **애니메이션**: framer-motion 기반 스크롤 애니메이션
- **스타일**: style 속성 사용으로 확실한 스타일 적용

#### Props

```typescript
interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "tech" | "skill" | "category";
  size?: "sm" | "md" | "lg";
  gradient?: string;
  index?: number;
  delay?: number;
  className?: string;
  customStyle?: CSSProperties;
  onClick?: () => void;
  animated?: boolean;
}
```

#### 사용 예시

```tsx
<Badge
  icon={<Code className="w-4 h-4" />}
  variant="tech"
  size="lg"
  gradient="from-blue-500 to-cyan-500"
  index={0}
>
  React
</Badge>
```

### BadgeGroup Component

Badge들을 그룹으로 관리하고 모바일 반응형을 지원하는 컨테이너 컴포넌트입니다.

#### 특징

- **유연한 정렬**: start, center, end, between, around
- **레이아웃 옵션**: horizontal, vertical, wrap
- **모바일 반응형**: 자동 중앙 정렬 및 래핑
- **간격 조절**: 픽셀 또는 문자열로 gap 설정

#### Props

```typescript
interface BadgeGroupProps {
  children: ReactNode;
  alignment?: "start" | "center" | "end" | "between" | "around";
  layout?: "horizontal" | "vertical" | "wrap";
  gap?: string | number;
  className?: string;
  customStyle?: CSSProperties;
  responsive?: boolean;
}
```

#### 사용 예시

```tsx
<BadgeGroup alignment="center" layout="wrap" gap="16px" responsive={true}>
  <Badge variant="tech">React</Badge>
  <Badge variant="tech">Node.js</Badge>
  <Badge variant="tech">TypeScript</Badge>
</BadgeGroup>
```

### TechBadge Component

기존 TechBadge는 이제 Badge 컴포넌트를 래핑하는 형태로 변경되었습니다.

## 모바일 반응형 개선사항

### 기존 문제점

- Tailwind CSS 클래스가 제대로 적용되지 않음
- 모바일에서 정렬이 제대로 되지 않음
- 각 컴포넌트마다 개별적인 스타일링

### 개선사항

1. **style 속성 사용**: 모든 패딩, 마진, gap을 style 속성으로 적용
2. **반응형 정렬**: 모바일에서는 중앙 정렬, 데스크톱에서는 시작 정렬
3. **통일된 시스템**: Badge 기반의 일관된 컴포넌트 시스템
4. **유연한 레이아웃**: BadgeGroup으로 다양한 정렬 옵션 제공

### 사용 예시

```tsx
// 모바일 친화적인 기술 태그 표시
<BadgeGroup
  alignment="start"
  layout="wrap"
  gap="12px"
  responsive={true}
  customStyle={{
    justifyContent: "flex-start",
  }}
>
  {technologies.map((tech, index) => (
    <Badge key={index} variant="skill" size="md" animated={false}>
      {tech}
    </Badge>
  ))}
</BadgeGroup>
```
