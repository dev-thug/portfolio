export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "김현중",
    jobTitle: "백엔드 개발자",
    description:
      "3년차 백엔드 개발자로 Java, Spring Boot, AWS를 활용한 확장 가능한 서버 개발 경험을 보유하고 있습니다.",
    url: "https://your-domain.com",
    image: "https://your-domain.com/profile-image.jpg",
    sameAs: [
      "https://github.com/hyunjoongkim",
      "https://linkedin.com/in/hyunjoongkim",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "Seoul",
    },
    email: "hyunjoong.kim@example.com",
    telephone: "+82-10-0000-0000",
    knowsAbout: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
      "Microservices Architecture",
      "API Development",
      "Database Design",
      "DevOps",
    ],
    worksFor: {
      "@type": "Organization",
      name: "프리랜서",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "대학교명",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "백엔드 개발 경력 3년",
        description: "Java, Spring Boot 기반 백엔드 시스템 개발 및 운영",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
