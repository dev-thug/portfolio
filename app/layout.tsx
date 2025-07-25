import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "김현중 | 4년차 풀스택 개발자 포트폴리오 | NodeJS Python AWS 전문가",
    template: "%s | 김현중 풀스택 개발자",
  },
  description:
    "4년차 풀스택 개발자 김현중의 포트폴리오. NodeJS, Python, AWS, Docker, Kubernetes를 활용한 확장 가능한 클라우드 네이티브 앱 개발. 2000+ 유전체 분석 시스템 구축, 10만+ 사용자 서비스 경험, MSA 전문가.",
  keywords: [
    // 핵심 타겟 키워드
    "풀스택 개발자 포트폴리오",
    "풀스택 개발자",
    "개발자 포트폴리오",
    "한국 풀스택 개발자",
    "서울 개발자 포트폴리오",

    // 기술 스택 키워드
    "NodeJS 개발자 포트폴리오",
    "Python 개발자 포트폴리오",
    "AWS 개발자 포트폴리오",
    "React 개발자 포트폴리오",
    "Next.js 개발자 포트폴리오",
    "Docker 개발자",
    "Kubernetes 개발자",
    "클라우드 개발자",
    "마이크로서비스 개발자",
    "DevOps 개발자",

    // 구체적 기술 키워드
    "AWS Amplify 전문가",
    "GraphQL AppSync 개발자",
    "Event Driven Architecture",
    "DynamoDB 전문가",
    "Lambda 개발자",
    "Batch Processing 개발자",

    // 경력/경험 키워드
    "4년차 개발자 포트폴리오",
    "시니어 풀스택 개발자",
    "유전체 분석 시스템 개발자",
    "대용량 트래픽 처리 개발자",
    "MSA 아키텍트",

    // 산업 키워드
    "헬스케어 IT 개발자",
    "핀테크 개발자",
    "이커머스 개발자",
    "스타트업 개발자",
  ],
  openGraph: {
    title: "김현중 | 4년차 풀스택 개발자 포트폴리오 | NodeJS Python AWS 전문가",
    description:
      "4년차 풀스택 개발자로서 NodeJS, Python, AWS를 활용한 클라우드 네이티브 앱 개발 전문가. 2000+ 유전체 분석 시스템, 10만+ 사용자 서비스 구축 경험.",
    url: "https://hyunjoong.kim",
    siteName: "김현중 풀스택 개발자 포트폴리오",
    images: [
      {
        url: "https://hyunjoong.kim/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "김현중 풀스택 개발자 포트폴리오 - 4년차 NodeJS Python AWS 전문가",
      },
    ],
    locale: "ko_KR",
    type: "website",
    countryName: "South Korea",
  },
  twitter: {
    card: "summary_large_image",
    title: "김현중 | 4년차 풀스택 개발자 포트폴리오",
    description:
      "NodeJS, Python, AWS 전문가. 2000+ 유전체 분석 시스템, 10만+ 사용자 서비스 구축. MSA, 클라우드 네이티브 아키텍처 전문가.",
    images: ["https://hyunjoong.kim/og-image.jpg"],
    creator: "@dev_thug",
    site: "@dev_thug",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "naver-site-verification": "your-naver-verification-code",
    },
  },
  appleWebApp: {
    capable: true,
    title: "김현중 풀스택 개발자 포트폴리오",
    statusBarStyle: "default",
  },
  applicationName: "김현중 풀스택 개발자 포트폴리오",
  referrer: "origin-when-cross-origin",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "김현중 개발자 포트폴리오",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/icon-144x144.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google AdSense - 소유권 검증을 위해 필수 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4295120214669813"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <GoogleAnalytics trackingId="G-Q62SLZCHKP" />
        {children}
      </body>
    </html>
  );
}
