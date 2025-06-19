"use client";

import { motion } from "framer-motion";
import {
  Github,
  ArrowRight,
  Database,
  Server,
  Zap,
  Users,
  Play,
  Monitor,
} from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "../ui";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Backend",
      subtitle: "Enterprise-grade microservices platform",
      description:
        "MSA 아키텍처 기반의 대용량 이커머스 플랫폼 백엔드 시스템으로, 확장성과 안정성을 극대화한 엔터프라이즈급 솔루션입니다.",
      image: "/api/placeholder/800/600",
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
      image: "/api/placeholder/800/600",
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
      image: "/api/placeholder/800/600",
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

  const DeviceMockup = ({
    type,
    children,
  }: {
    type: string;
    children: React.ReactNode;
  }) => {
    switch (type) {
      case "macbook":
        return (
          <div className="relative">
            <div className="bg-gray-800 rounded-t-2xl p-4 pb-0">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-black rounded-lg overflow-hidden aspect-video">
                {children}
              </div>
            </div>
            <div className="bg-gray-700 h-6 rounded-b-2xl flex items-center justify-center">
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        );
      case "iphone":
        return (
          <div className="relative mx-auto w-64">
            <div className="bg-gray-900 rounded-[2.5rem] p-2">
              <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                <div className="h-8 bg-gray-900 flex items-center justify-center">
                  <div className="w-16 h-4 bg-gray-800 rounded-full"></div>
                </div>
                <div className="flex-1">{children}</div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="relative">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video">
              {children}
            </div>
          </div>
        );
    }
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-24 py-20">
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
            className="mb-24"
          />

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex flex-col gap-8">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col gap-4">
                        {project.featured && (
                          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full self-start">
                            ⭐ Featured Project
                          </span>
                        )}
                        <div className="flex flex-col gap-6">
                          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-xl font-light text-gray-600 dark:text-gray-300">
                            {project.subtitle}
                          </p>
                          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Metrics */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-3 gap-6"
                    >
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="flex flex-col items-center gap-3">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${project.gradient} text-white`}
                            >
                              {metric.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              {metric.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          주요 성과
                        </h4>
                        <ul className="space-y-3">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-start space-x-3"
                              >
                                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  {highlight}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-3"
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      viewport={{ once: true }}
                      className="flex space-x-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-apple-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center space-x-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-5 h-5" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Project Mockup */}
                <motion.div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 5 : -5,
                  }}
                >
                  <DeviceMockup type={project.mockup}>
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                            backgroundSize: "32px 32px",
                          }}
                        />
                      </div>

                      {/* Content Preview */}
                      <div className="relative z-10 text-center text-white p-8">
                        <Monitor className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <h4 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm opacity-80">Interactive Demo</p>
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg"
                      />
                      <motion.div
                        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                        className="absolute bottom-8 left-8 w-6 h-6 bg-white/20 rounded-full"
                      />
                    </div>
                  </DeviceMockup>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mt-32"
          >
            <div className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                더 많은 프로젝트가 궁금하신가요?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                GitHub에서 전체 포트폴리오와 오픈소스 기여를 확인해보세요.
              </p>
              <motion.a
                href="https://github.com/dev-thug"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg shadow-apple-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
                <span>GitHub 방문하기</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
