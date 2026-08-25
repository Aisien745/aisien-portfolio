import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Базовый URL необходим для корректного отображения картинок в соцсетях
  metadataBase: new URL("https://твой-домен.com"), // Замени на свой реальный домен (или .vercel.app)
  
  title: {
    default: "Aisien Solovev | Product Builder & Data Engineer",
    template: "%s | Aisien Solovev", // Полезно для будущих страниц кейсов (например: "SciTrack | Aisien Solovev")
  },
  description:
    "Economics & Management student bridging macroeconomics and engineering. Building scalable data pipelines and full-stack SaaS solutions.",
  keywords: [
    "Aisien Solovev",
    "Business Analyst",
    "Data Engineer",
    "Product Builder",
    "Economics",
    "Management",
    "Portfolio",
  ],
  authors: [{ name: "Aisien Solovev" }],
  creator: "Aisien Solovev",
  
  // Настройки для красивых превью в Telegram, LinkedIn, iMessage, Slack
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Aisien Solovev | Product Builder & Data Engineer",
    description:
      "Economics & Management student specializing in data-driven decision making, ETL pipelines, and product development.",
    siteName: "Aisien Solovev Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ссылка на картинку превью
        width: 1200,
        height: 630,
        alt: "Aisien Solovev - Portfolio",
      },
    ],
  },
  
  // Настройки для Twitter / X (часто используются и другими платформами как запасной вариант)
  twitter: {
    card: "summary_large_image",
    title: "Aisien Solovev | Product Builder & Data Engineer",
    description:
      "Economics & Management student bridging macroeconomics and engineering.",
    images: ["/og-image.jpg"],
  },
  
  // Инструкции для поисковых роботов Google/Bing
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
};

// Я немного поправил типизацию props на стандартную для Next.js 14, 
// если у тебя использовался кастомный LayoutProps, можешь вернуть его
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}