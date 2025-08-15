"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Coffee,
  Rocket,
  Code,
  Brain,
  Calendar,
  Briefcase,
  Users,
} from "lucide-react";
import { SectionHeader, SectionContainer, MetricCard } from "../ui";
import { ContactCard, FocusCard, CallToActionCard } from "../cards";

export default function Contact() {
  const prefersReduce = useReducedMotion();
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "이메일",
      value: "de0978@gmail.com",
      href: "mailto:de0978@gmail.com",
      gradient: "from-red-500 to-pink-600",
      description: "가장 빠른 연락 방법",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "Github",
      value: "github.com/dev-thug",
      href: "https://github.com/dev-thug",
      gradient: "from-gray-600 to-gray-800",
      description: "코드와 프로젝트 확인",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/dev-thug",
      href: "https://linkedin.com/in/dev-thug",
      gradient: "from-blue-500 to-blue-700",
      description: "전문적인 네트워킹",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "전화번호",
      value: "+82 10-0000-0000",
      href: "tel:+821000000000",
      gradient: "from-green-500 to-emerald-600",
      description: "긴급시 연락",
    },
  ];

  const currentFocus = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Kubernetes",
      subtitle: "Container Orchestration",
      description:
        "컨테이너 오케스트레이션과 클러스터 관리에 깊이 있게 공부하고 있습니다.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Event-Driven Architecture",
      subtitle: "Asynchronous Systems",
      description:
        "이벤트 중심 아키텍처를 통한 확장 가능한 시스템 설계를 연구하고 있습니다.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Performance Optimization",
      subtitle: "System Tuning",
      description:
        "대용량 트래픽 처리와 시스템 성능 최적화에 대해 지속적으로 학습하고 있습니다.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Functional Programming",
      subtitle: "Clean Code",
      description:
        "함수형 프로그래밍 패러다임을 통한 더 안전하고 예측 가능한 코드 작성을 연구합니다.",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const stats = [
    {
      number: "3+",
      label: "Years Experience",
      description: "백엔드 개발 경력",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "10+",
      label: "Projects Completed",
      description: "완료한 프로젝트",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Problem Solver",
      description: "문제 해결 의지",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <SectionContainer
      id="contact"
      backgroundClass="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div
        style={{
          marginBottom: "128px",
        }}
      >
        <SectionHeader
          title="Let's"
          subtitle="Connect"
          titleSize="xl"
          description={
            <>
              새로운 도전과 성장 기회를 찾고 있습니다.
              <br />
              <strong className="font-medium text-gray-900 dark:text-white">
                함께 혁신적인 서비스를 만들어가요.
              </strong>
            </>
          }
        />
      </div>
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={prefersReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{
          marginBottom: "128px",
        }}
      >
        <div
          className="grid md:grid-cols-3"
          style={{
            gap: "32px",
          }}
        >
          {stats.map((stat, index) => (
            <MetricCard
              key={stat.label}
              icon={stat.icon}
              value={stat.number}
              label={stat.label}
              description={stat.description}
              gradient="from-blue-600 to-purple-600"
              index={index}
              size="lg"
            />
          ))}
        </div>
      </motion.div>
      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={prefersReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{
          marginBottom: "128px",
        }}
      >
        <div
          className="flex flex-col"
          style={{
            gap: "64px",
          }}
        >
          <h3
            className="font-bold text-center text-gray-900 dark:text-white"
            style={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
            }}
          >
            연락 방법
          </h3>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: "24px",
            }}
          >
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={contact.label}
                icon={contact.icon}
                label={contact.label}
                value={contact.value}
                href={contact.href}
                gradient={contact.gradient}
                description={contact.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
      {/* Current Focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={prefersReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{
          marginBottom: "128px",
        }}
      >
        <div
          className="flex flex-col"
          style={{
            gap: "64px",
          }}
        >
          <h3
            className="font-bold text-center text-gray-900 dark:text-white"
            style={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
            }}
          >
            현재 관심사
          </h3>
          <div
            className="grid md:grid-cols-2"
            style={{
              gap: "32px",
            }}
          >
            {currentFocus.map((focus, index) => (
              <FocusCard
                key={focus.title}
                icon={focus.icon}
                title={focus.title}
                subtitle={focus.subtitle}
                description={focus.description}
                color={focus.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
      {/* Call to Action */}
      <CallToActionCard
        title="함께 성장할 팀을 찾고 있습니다"
        description="사용자에게 가치를 전달하는 서비스를 만드는 것에 열정을 가진 개발자입니다. <br /> 새로운 기술을 배우고 적용하는 것을 즐기며, 팀과 함께 성장하는 것을 중요하게 생각합니다."
        buttonText="연락하기"
        buttonHref="mailto:de0978@gmail.com?subject=채용 관련 문의&body=안녕하세요, 포트폴리오를 보고 연락드립니다."
      />
      {/* Ambient Light Effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent dark:from-blue-400/10 dark:via-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-500/5 via-blue-500/3 to-transparent dark:from-purple-400/10 dark:via-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </SectionContainer>
  );
}
