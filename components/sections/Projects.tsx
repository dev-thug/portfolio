"use client";

import { Database, Server, Zap, Users } from "lucide-react";
import { SectionHeader, SectionContainer } from "../ui";
import { ProjectCard, CallToActionCard } from "../cards";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Backend",
      subtitle: "Enterprise-grade microservices platform",
      description:
        "MSA 아키텍처 기반의 대용량 이커머스 플랫폼 백엔드 시스템으로, 확장성과 안정성을 극대화한 엔터프라이즈급 솔루션입니다.",
      tags: ["Java", "Spring Boot", "MySQL", "Redis", "AWS", "Docker"],
      metrics: [
        {
          icon: <Users className="w-4 h-4" />,
          label: "월 10만+ 활성 사용자",
          value: "100K+",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          label: "평균 응답시간",
          value: "200ms",
        },
        {
          icon: <Database className="w-4 h-4" />,
          label: "일일 트랜잭션",
          value: "1M+",
        },
      ],
      highlights: [
        "주문 처리 시스템 성능 40% 향상으로 사용자 경험 개선",
        "Redis 캐싱 전략 최적화로 데이터베이스 부하 70% 감소",
        "무중단 배포 시스템 구축으로 서비스 안정성 확보",
      ],
      github: "https://github.com/username/ecommerce-backend",
      demo: "https://demo.example.com",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      mockup: "macbook",
    },
    {
      title: "Real-time Chat Server",
      subtitle: "WebSocket-based messaging platform",
      description:
        "WebSocket과 Redis Pub/Sub을 활용한 고성능 실시간 채팅 시스템으로, 대규모 동시 접속을 안정적으로 처리합니다.",
      tags: ["Node.js", "WebSocket", "Redis", "MongoDB", "Docker"],
      metrics: [
        {
          icon: <Users className="w-4 h-4" />,
          label: "동시 접속자",
          value: "5K+",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          label: "메시지 지연",
          value: "<50ms",
        },
        {
          icon: <Server className="w-4 h-4" />,
          label: "서버 가용률",
          value: "99.9%",
        },
      ],
      highlights: [
        "WebSocket 연결 관리 최적화로 메모리 사용량 30% 절약",
        "Redis Cluster 구성으로 수평 확장성 확보",
        "메시지 큐 시스템으로 안정적인 메시지 전달 보장",
      ],
      github: "https://github.com/username/chat-server",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
      mockup: "iphone",
    },
    {
      title: "Data Pipeline System",
      subtitle: "Big data processing infrastructure",
      description:
        "대용량 로그 데이터 수집 및 분석을 위한 실시간 스트리밍 파이프라인으로, 확장 가능한 데이터 인프라를 제공합니다.",
      tags: ["Python", "Apache Kafka", "Elasticsearch", "Kibana", "AWS"],
      metrics: [
        {
          icon: <Database className="w-4 h-4" />,
          label: "일일 데이터 처리",
          value: "1TB+",
        },
        {
          icon: <Zap className="w-4 h-4" />,
          label: "처리 방식",
          value: "Real-time",
        },
        {
          icon: <Server className="w-4 h-4" />,
          label: "스케일링",
          value: "Auto",
        },
      ],
      highlights: [
        "Kafka를 통한 안정적인 대용량 데이터 스트리밍 처리",
        "Elasticsearch 클러스터 최적화로 검색 성능 3배 향상",
        "자동화된 모니터링 시스템으로 장애 대응 시간 단축",
      ],
      github: "https://github.com/username/data-pipeline",
      featured: false,
      gradient: "from-purple-500 to-violet-500",
      mockup: "desktop",
    },
  ];

  return (
    <SectionContainer
      id="projects"
      backgroundClass="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <div
        style={{
          marginBottom: "96px",
        }}
      >
        <SectionHeader
          title="Featured"
          subtitle="Projects"
          titleSize="xl"
          description={
            <>
              실제 사용자에게 가치를 전달한 프로젝트들을 통해
              <br />
              <strong className="font-medium text-gray-900 dark:text-white">
                기술적 역량과 문제 해결 능력을 확인해보세요.
              </strong>
            </>
          }
        />
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "96px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            metrics={project.metrics}
            highlights={project.highlights}
            github={project.github}
            demo={project.demo}
            featured={project.featured}
            gradient={project.gradient}
            mockup={project.mockup as "macbook" | "iphone" | "desktop"}
            index={index}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div
        style={{
          marginTop: "128px",
        }}
      >
        <CallToActionCard
          title="더 많은 프로젝트가 궁금하신가요?"
          description="GitHub에서 전체 포트폴리오와 오픈소스 기여를 확인해보세요."
          buttonText="GitHub 방문하기"
          buttonHref="https://github.com/dev-thug"
        />
      </div>
    </SectionContainer>
  );
}
