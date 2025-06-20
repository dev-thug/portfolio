"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  Database,
  Cloud,
  Code2,
  GitBranch,
  Shield,
  Zap,
  Layers,
  BarChart3,
  Globe,
} from "lucide-react";
import { SectionHeader, SectionContainer } from "../ui";
import { SkillCard, SkillCategoryHeader } from "../cards";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const skillCategories = [
    {
      title: "Backend Development",
      subtitle: "서버 아키텍처의 핵심",
      icon: <Server className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "Java & Spring Boot",
          description:
            "엔터프라이즈급 애플리케이션을 위한 안정적인 백엔드 프레임워크",
          proficiency: 95,
          icon: <Code2 className="w-5 h-5" />,
        },
        {
          name: "RESTful API Design",
          description: "확장 가능하고 유지보수하기 쉬운 API 설계 및 구현",
          proficiency: 92,
          icon: <Globe className="w-5 h-5" />,
        },
        {
          name: "Microservices Architecture",
          description: "독립적이고 확장 가능한 서비스 단위로 시스템 분해",
          proficiency: 88,
          icon: <Layers className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Database & Storage",
      subtitle: "데이터의 안정적인 관리",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "MySQL & PostgreSQL",
          description: "관계형 데이터베이스 설계 및 쿼리 최적화",
          proficiency: 90,
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "Redis & Caching",
          description: "고성능 캐싱 전략으로 응답 시간 최적화",
          proficiency: 85,
          icon: <Zap className="w-5 h-5" />,
        },
        {
          name: "Data Modeling",
          description: "비즈니스 요구사항을 반영한 효율적인 데이터 구조 설계",
          proficiency: 87,
          icon: <BarChart3 className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      subtitle: "인프라의 자동화와 확장성",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      skills: [
        {
          name: "AWS Services",
          description: "EC2, RDS, Lambda, S3 등을 활용한 클라우드 인프라 구축",
          proficiency: 88,
          icon: <Cloud className="w-5 h-5" />,
        },
        {
          name: "Docker & Kubernetes",
          description: "컨테이너화된 애플리케이션 배포 및 오케스트레이션",
          proficiency: 82,
          icon: <Layers className="w-5 h-5" />,
        },
        {
          name: "CI/CD Pipeline",
          description:
            "Jenkins, GitHub Actions를 통한 자동화된 배포 파이프라인",
          proficiency: 85,
          icon: <GitBranch className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <SectionContainer
      id="skills"
      backgroundClass="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <SectionHeader
        title="Core"
        subtitle="Technologies"
        titleSize="xl"
        description={
          <>
            4년간의 경험으로 다져진 기술 스택으로
            <br />
            <strong className="font-medium text-gray-900 dark:text-white">
              안정적이고 확장 가능한 시스템을 구축합니다.
            </strong>
          </>
        }
      />

      {/* Skills Grid */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: categoryIndex * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Category Header */}
            <SkillCategoryHeader
              title={category.title}
              subtitle={category.subtitle}
              icon={category.icon}
              gradient={category.gradient}
              y={y}
            />

            {/* Skills Cards */}
            <div
              className="grid md:grid-cols-3"
              style={{
                gap: "32px",
              }}
            >
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  description={skill.description}
                  proficiency={skill.proficiency}
                  icon={skill.icon}
                  gradient={category.gradient}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center"
        style={{
          marginTop: "60px",
        }}
      >
        <div
          className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full"
          style={{
            gap: "12px",
            padding: "16px 32px",
          }}
        >
          <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            지속적인 학습과 기술 발전을 추구합니다
          </span>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
