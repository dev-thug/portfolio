"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Users,
  Trophy,
  Target,
  Heart,
} from "lucide-react";
import { SectionHeader, BackgroundGrid, SectionContainer } from "../ui";
import { ValueCard, ExpertiseCard, AchievementCard } from "../cards";

const coreValues = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "사용자 중심",
    subtitle: "User-Centric Development",
    description:
      "기술을 위한 기술이 아닌, 사용자에게 실질적인 가치를 제공하는 개발을 추구합니다.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "지속 가능한 코드",
    subtitle: "Sustainable Code",
    description:
      "가독성 좋고 유지보수가 쉬운 코드를 작성하여 팀의 생산성을 높입니다.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "협업과 소통",
    subtitle: "Collaboration & Communication",
    description: "동료와의 적극적인 소통을 통해 더 나은 결과물을 만들어냅니다.",
    gradient: "from-purple-500 to-violet-600",
  },
];

const expertise = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "클라이언트 개발",
    subtitle: "Client Development",
    skills: ["ReactJS", "NextJS", "Tanstack", "Zustand"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "서버 개발",
    subtitle: "Server Development",
    skills: ["NestJS", "Event Driven Architecture", "REST API", "GraphQL"],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "데이터베이스 설계",
    subtitle: "Database Design",
    skills: ["DynamoDB", "RDBMS", "MongoDB", "Redis"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "클라우드 & DevOps",
    subtitle: "Cloud & DevOps",
    skills: ["AWS Amplify Gen 1,2", "AWS Lambda", "SNS", "SQS"],
    color: "from-purple-500 to-violet-600",
  },
];

const achievements = [
  {
    number: "66.7%",
    title: "성능 개선",
    description: "캐싱 전략과 쿼리 최적화",
    icon: <Trophy className="w-8 h-8" />,
  },
  {
    number: "1TB/s",
    title: "사용자 서비스",
    description: "대용량 트래픽 처리 경험",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: "100%",
    title: "무중단 배포",
    description: "CI/CD 파이프라인 구축",
    icon: <Server className="w-8 h-8" />,
  },
];

export default function About() {
  return (
    <SectionContainer
      id="about"
      backgroundClass="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <BackgroundGrid size={32} />

      {/* Hero Section */}
      <SectionHeader
        title="About"
        subtitle="Hyunjoong"
        titleSize="xl"
        description={
          <>
            사용자에게 가치를 전달하는 서비스를 만드는 것에 열정을 가진
            개발자입니다.
            <br />
            <strong className="font-medium text-gray-900 dark:text-white">
              지속 가능한 시스템을 구축하고 팀과 함께 성장합니다.
            </strong>
          </>
        }
      />

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <SectionHeader title="개발 철학" />
        <div className="grid lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              subtitle={value.subtitle}
              description={value.description}
              gradient={value.gradient}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Technical Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <SectionHeader title="핵심 기술" className="mb-16" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((tech, index) => (
            <ExpertiseCard
              key={tech.title}
              icon={tech.icon}
              title={tech.title}
              subtitle={tech.subtitle}
              skills={tech.skills}
              color={tech.color}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <SectionHeader title="주요 성과" className="mb-16" />
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              icon={achievement.icon}
              number={achievement.number}
              title={achievement.title}
              description={achievement.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Ambient Light Effect */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent dark:from-blue-400/10 dark:via-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 via-blue-500/3 to-transparent dark:from-purple-400/10 dark:via-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </SectionContainer>
  );
}
