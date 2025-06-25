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
    default: "김현중 | 풀스택 개발자 포트폴리오",
    template: "%s | 김현중 포트폴리오",
  },
  description:
    "4년차 풀스택 개발자 김현중의 포트폴리오입니다. NodeJS, Python, AWS를 활용한 확장 가능한 클라우드 네이티브 앱 개발 경험과 협업 중심의 개발 철학을 소개합니다.",
  keywords: [
    "풀스택 개발자",
    "프론트엔드 개발자",
    "백엔드 개발자",
    "NodeJS",
    "React",
    "Next.js",
    "Python",
    "Cloud Native",
    "AWS",
    "MSA",
    "김현중",
    "포트폴리오",
    "웹 개발",
    "소프트웨어 엔지니어",
  ],
  authors: [{ name: "김현중", url: "https://hyunjoong.kim" }],
  creator: "김현중",
  publisher: "김현중",
  category: "technology",
  classification: "portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hyunjoong.kim"), // 실제 도메인으로 변경 필요
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
    },
  },
  openGraph: {
    title: "김현중 | 풀스택 개발자 포트폴리오",
    description:
      "4년차 풀스택 개발자 김현중의 포트폴리오입니다. NodeJS, Python, AWS를 활용한 확장 가능한 클라우드 네이티브 앱 개발 경험과 협업 중심의 개발 철학을 소개합니다.",
    url: "https://hyunjoong.kim",
    siteName: "김현중 포트폴리오",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "김현중 풀스택 개발자 포트폴리오 - 클라우드 네이티브 개발자",
      },
    ],
    locale: "ko_KR",
    type: "website",
    countryName: "South Korea",
  },
  twitter: {
    card: "summary_large_image",
    title: "김현중 | 풀스택 개발자 포트폴리오",
    description:
      "4년차 풀스택 개발자 김현중의 포트폴리오입니다. NodeJS, Python, AWS 전문가",
    images: ["/og-image.jpg"],
    creator: "@your-twitter-handle", // 실제 트위터 핸들로 변경
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
    google: "your-google-verification-code", // Google Search Console 인증 코드
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  appleWebApp: {
    capable: true,
    title: "김현중 포트폴리오",
    statusBarStyle: "default",
  },
  applicationName: "김현중 포트폴리오",
  referrer: "origin-when-cross-origin",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
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
