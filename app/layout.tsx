import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김현중 | 풀스택 개발자 포트폴리오",
  description:
    "4년차 풀스택 개발자 김현중의 포트폴리오입니다. NodeJS, Python,AWS를 활용한 확장 가능한 클라우드 네이티브 앱 개발 경험과 협업 중심의 개발 철학을 소개합니다.",
  keywords: [
    "프론트 개발자",
    "백엔드 개발자",
    "NodeJS",
    "Cloud Native",
    "AWS",
    "MSA",
    "김현중",
    "포트폴리오",
  ],
  authors: [{ name: "김현중" }],
  creator: "김현중",
  publisher: "김현중",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // 실제 도메인으로 변경 필요
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "김현중 | 풀스택 개발자 포트폴리오",
    description:
      "4년차 풀스택 개발자 김현중의 포트폴리오입니다. NodeJS, Python,AWS를 활용한 확장 가능한 클라우드 네이티브 앱 개발 경험과 협업 중심의 개발 철학을 소개합니다.",
    url: "https://your-domain.com",
    siteName: "김현중 포트폴리오",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "김현중 풀스택 개발자 포트폴리오",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "김현중 | 풀엔드 개발자 포트폴리오",
    description: "4년차 풀스택 개발자 김현중의 포트폴리오입니다.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console 인증 코드
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
        {children}
      </body>
    </html>
  );
}
