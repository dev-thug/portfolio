"use client";

import { motion } from "framer-motion";
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
import {
  SectionHeader,
  SectionContainer,
  MetricCard,
  AnimatedCard,
  GradientIcon,
} from "../ui";

export default function Contact() {
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
        className="mb-32"
      />

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <div className="grid md:grid-cols-3 gap-8">
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
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <div className="flex flex-col gap-16">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            연락 방법
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <AnimatedCard
                key={contact.label}
                index={index}
                direction="scale"
                className="h-full"
              >
                <motion.a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="block h-full"
                >
                  <div className="h-full p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg transition-all duration-500">
                    <div className="flex flex-col gap-4">
                      <GradientIcon
                        icon={contact.icon}
                        gradient={contact.gradient}
                        size="lg"
                      />
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {contact.label}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {contact.description}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Current Focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <div className="flex flex-col gap-16">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
            현재 관심사
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {currentFocus.map((focus, index) => (
              <AnimatedCard
                key={focus.title}
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.2}
              >
                <div className="h-full p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-apple rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-apple hover:shadow-apple-lg transition-all duration-500">
                  <div className="flex flex-col gap-6">
                    <GradientIcon
                      icon={focus.icon}
                      gradient={focus.color}
                      size="xl"
                    />
                    <div className="flex flex-col gap-2">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {focus.title}
                      </h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                        {focus.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-100 dark:border-blue-800">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            함께 성장할 팀을 찾고 있습니다
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8  mx-auto leading-relaxed">
            사용자에게 가치를 전달하는 서비스를 만드는 것에 열정을 가진
            개발자입니다. <br /> 새로운 기술을 배우고 적용하는 것을 즐기며, 팀과
            함께 성장하는 것을 중요하게 생각합니다.
          </p>
          <motion.a
            href="mailto:hyunjoong.kim@example.com?subject=채용 관련 문의&body=안녕하세요, 포트폴리오를 보고 연락드립니다."
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold text-lg shadow-apple-lg transition-all duration-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            연락하기
          </motion.a>
        </div>
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent dark:from-blue-400/10 dark:via-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-500/5 via-blue-500/3 to-transparent dark:from-purple-400/10 dark:via-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </SectionContainer>
  );
}
