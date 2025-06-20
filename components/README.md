# Components Directory Structure

포트폴리오 웹사이트의 컴포넌트들을 체계적으로 구성한 디렉토리 구조입니다.

## 📁 Directory Structure

```
components/
├── ui/                    # 재사용 가능한 UI 컴포넌트들
│   ├── AnimatedText.tsx   # 애니메이션 텍스트
│   ├── BackgroundGrid.tsx # 배경 그리드 패턴
│   ├── IconContainer.tsx  # 아이콘 컨테이너
│   ├── ScrollIndicator.tsx # 스크롤 인디케이터
│   ├── SectionHeader.tsx  # 섹션 헤더
│   ├── SkillTag.tsx       # 스킬 태그
│   ├── Spacer.tsx         # 간격 컴포넌트
│   ├── TechBadge.tsx      # 기술 배지
│   └── index.ts           # UI 컴포넌트 export
├── cards/                 # 카드 형태의 컴포넌트들
│   ├── AchievementCard.tsx # 성과 카드
│   ├── ExpertiseCard.tsx  # 전문성 카드
│   ├── ValueCard.tsx      # 가치관 카드
│   └── index.ts           # 카드 컴포넌트 export
├── sections/              # 페이지 섹션 컴포넌트들
│   ├── About.tsx          # About 섹션
│   ├── Contact.tsx        # Contact 섹션
│   ├── Experience.tsx     # Experience 섹션
│   ├── Hero.tsx           # Hero 섹션
│   ├── Projects.tsx       # Projects 섹션
│   ├── Skills.tsx         # Skills 섹션
│   └── index.ts           # 섹션 컴포넌트 export
├── StructuredData.tsx     # SEO 구조화 데이터
└── index.ts               # 전체 컴포넌트 export
```

## 🎯 Component Categories

### UI Components (`/ui`)

재사용 가능한 기본 UI 컴포넌트들입니다.

- **Layout & Structure**: `BackgroundGrid`, `Spacer`, `SectionHeader`
- **Interactive Elements**: `ScrollIndicator`, `TechBadge`
- **Content Elements**: `AnimatedText`, `IconContainer`, `SkillTag`

### Card Components (`/cards`)

특정 데이터 구조를 표시하는 카드 컴포넌트들입니다.

- **ValueCard**: 개발 철학/가치관 표시
- **ExpertiseCard**: 기술 전문성 표시
- **AchievementCard**: 성과/실적 표시

### Section Components (`/sections`)

페이지의 주요 섹션들을 구성하는 컴포넌트들입니다.

## 📦 Usage

### Import 방식

```tsx
// 개별 import
import { SectionHeader, BackgroundGrid } from "@/components/ui";
import { ValueCard, ExpertiseCard } from "@/components/cards";
import { Hero, About } from "@/components/sections";

// 전체 import
import { SectionHeader, ValueCard, Hero } from "@/components";
```

### 컴포넌트 사용 예시

```tsx
// SectionHeader
<SectionHeader
  title="About"
  subtitle="Developer"
  titleSize="xl"
  description="개발자 소개"
/>

// ValueCard
<ValueCard
  icon={<Target className="w-8 h-8" />}
  title="사용자 중심"
  subtitle="User-Centric Development"
  description="사용자에게 가치를 제공하는 개발"
  gradient="from-blue-500 to-cyan-600"
  index={0}
/>

// IconContainer
<IconContainer
  icon={<Code className="w-6 h-6" />}
  size="md"
  gradient="from-green-500 to-emerald-600"
/>
```

## 🔧 Design Principles

1. **재사용성**: 모든 컴포넌트는 다양한 컨텍스트에서 재사용 가능
2. **일관성**: 동일한 디자인 시스템과 애니메이션 패턴 적용
3. **타입 안전성**: TypeScript 인터페이스로 props 타입 정의
4. **성능**: 적절한 애니메이션과 최적화된 렌더링
5. **접근성**: 의미론적 HTML과 적절한 ARIA 속성

## 🎨 Styling

- **Tailwind CSS**: 유틸리티 클래스 기반 스타일링
- **Framer Motion**: 부드러운 애니메이션과 전환 효과
- **Apple-inspired Design**: 깔끔하고 모던한 디자인 시스템
- **Dark Mode**: 자동 다크 모드 지원

## 🚀 Future Enhancements

- [ ] 더 많은 카드 타입 추가
- [ ] 커스텀 훅으로 애니메이션 로직 분리
- [ ] Storybook을 통한 컴포넌트 문서화
- [ ] 테스트 코드 작성
