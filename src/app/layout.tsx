export const metadata = {
  title: 'NamHoLab | Web. API. Automation.',
  icons: {
    icon: '/favicon.ico',
  },
  description: '신뢰 기반 개발 파트너, Web / API / 자동화 전문팀 NamHoLab.',
  openGraph: {
    title: 'NamHoLab | Web. API. Automation.',
    description: '작고 실용적인 기술 서비스를 만드는 실력 있는 개발 파트너.',
    url: 'https://LaonCode.com',
    siteName: 'LaonCode',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'LaonCode 대표 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaonCode | Web. API. Automation.',
    description: '신뢰 중심 개발 파트너 LaonCode.',
    images: [
      {
        url: '/logo.png',
        alt: 'LaonCode 대표 이미지',
      },
    ],
  },
};
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}