"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import { SectionHeader } from "../ui";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      period: "2023.12 - Present (1년 7개월)",
      company: "Fortuna Helix",
      position: "Tech leader, Fullstack Developer",
      location: "서울, 대한민국",
      type: "정규직",
      highlights: [
        "2000 개 샘플 유전체 병렬 분석 시스템 구축, 처리시간 30 분 → 10 분으로 단축",
        "스타트업(시리즈 Pre-A)에서 기획개발배포까지 전 과정 단독 주도 경험",
        "ISO 27001 인증",
      ],
      technologies: [
        "AWS Amplify Gen2",
        "AWS Lambda",
        "AWS Batch",
        "AWS SNS",
        "AWS SQS",
        "AWS S3",
        "NodeJS",
        "Python",
        "Docker",
        "Terraform",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      period: "2021.12 - 2023.12 (2년)",
      company: "(주)헬리큐어",
      position: "Full Stack Developer",
      location: "서울, 대한민국",
      type: "정규직",
      highlights: [
        "예진 중기부 주관 TIPS 프로그램 선정 (2023.05)",
        "Amplify Gen1로 멀티테넌트 구조의 인증, API, 인프라 자동 구성",
        "외부 결제 시스템과 연동하여 자동 결제 지원",
      ],
      technologies: ["ReactJS", "Amplify Gen1", "Python", "NodeJS"],
      color: "from-green-500 to-emerald-500",
    },
    {
      period: "2015.03 - 2022.02 (7년)",
      company: "금오공과대학교 컴퓨터소프트웨어공학과",
      position: "학사 졸업",
      location: "구미, 대한민국",
      type: "학사",
      highlights: [
        // "레거시 시스템을 모던 아키텍처로 마이그레이션",
        // "데이터베이스 쿼리 최적화로 성능 200% 향상",
        // "RESTful API 설계 및 개발 경험 축적",
      ],
      technologies: ["Java", "Spring", "MySQL", "REST API", "Git"],
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-24 py-20">
          <SectionHeader
            title="Career"
            subtitle="Journey"
            titleSize="xl"
            description={
              <>
                각 단계에서의 성장과 도전을 통해
                <br />
                <strong className="font-medium text-gray-900 dark:text-white">
                  더 나은 개발자가 되어가고 있습니다.
                </strong>
              </>
            }
            className="mb-24"
          />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-16 md:space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.0,
                    delay: index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} shadow-apple-lg flex items-center justify-center`}
                    >
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 shadow-apple hover:shadow-apple-lg transition-all duration-500 group"
                    >
                      <div className="flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                              {exp.period}
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              주요 성과
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2"
                              >
                                <Award className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              기술 스택
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-gray-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "3+",
                  label: "Years Experience",
                  icon: <Calendar className="w-6 h-6" />,
                },
                {
                  number: "10+",
                  label: "Projects Delivered",
                  icon: <Briefcase className="w-6 h-6" />,
                },
                {
                  number: "100K+",
                  label: "Users Served",
                  icon: <Users className="w-6 h-6" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
