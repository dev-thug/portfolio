import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hyunjoong.kim";
  const currentDate = new Date();

  // 메인 페이지
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // 프로젝트별 상세 페이지 (실제 프로젝트 데이터로 교체 필요)
  const projectRoutes = [
    {
      url: `${baseUrl}/projects/genome-analysis-platform`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/fintech-payment-system`,
      lastModified: new Date("2024-11-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/ecommerce-platform`,
      lastModified: new Date("2024-10-20"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // 기술 스택별 상세 페이지
  const skillRoutes = [
    {
      url: `${baseUrl}/skills/nodejs`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/skills/python`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/skills/aws`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [...mainRoutes, ...projectRoutes, ...skillRoutes];
}
