"use client";

import { Calendar, MapPin, TrendingUp, Users, Award } from "lucide-react";
import BaseCard from "../ui/BaseCard";

interface ExperienceCardProps {
  period: string;
  company: string;
  position: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
  color: string;
  index: number;
}

export default function ExperienceCard({
  period,
  company,
  position,
  location,
  type,
  highlights,
  technologies,
  color,
  index,
}: ExperienceCardProps) {
  return (
    <BaseCard
      index={index}
      delay={0.2}
      padding="32px"
      gap="24px"
      gradient={color}
    >
      {/* Header */}
      <div
        className="flex flex-col"
        style={{
          gap: "8px",
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: "8px",
          }}
        >
          <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span
            className="font-medium text-blue-600 dark:text-blue-400"
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            {period}
          </span>
          <span
            className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full font-medium"
            style={{
              padding: "4px 8px",
              fontSize: "0.75rem",
              lineHeight: "1rem",
            }}
          >
            {type}
          </span>
        </div>
        <h3
          className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          {position}
        </h3>
        <div
          className="flex items-center text-gray-600 dark:text-gray-300"
          style={{
            gap: "8px",
          }}
        >
          <span className="font-medium">{company}</span>
          <span>•</span>
          <div
            className="flex items-center"
            style={{
              gap: "4px",
            }}
          >
            <MapPin className="w-3 h-3" />
            <span
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
              }}
            >
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div
        className="flex flex-col"
        style={{
          gap: "12px",
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: "8px",
          }}
        >
          <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span
            className="font-medium text-gray-700 dark:text-gray-300"
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            주요 성과
          </span>
        </div>
        <ul
          style={{
            gap: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start"
              style={{
                gap: "8px",
              }}
            >
              <Award
                className="text-yellow-500 flex-shrink-0"
                style={{
                  width: "12px",
                  height: "12px",
                  marginTop: "4px",
                }}
              />
              <span
                className="text-gray-600 dark:text-gray-300"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
              >
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div
        className="flex flex-col"
        style={{
          gap: "12px",
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: "8px",
          }}
        >
          <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span
            className="font-medium text-gray-700 dark:text-gray-300"
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            기술 스택
          </span>
        </div>
        <div
          className="flex flex-wrap"
          style={{
            gap: "8px",
          }}
        >
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300 font-medium"
              style={{
                padding: "4px 12px",
                fontSize: "0.75rem",
                lineHeight: "1rem",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
