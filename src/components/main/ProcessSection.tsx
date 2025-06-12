// src/components/ProcessSection.tsx

import LottiePlayer from "@/components/common/LottiePlayer";
import Link from 'next/link';

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "회원가입",
      description: "간단한 회원가입 및 서비스 신청",
      lottiePath: "/animations/step1.json",
      href: "/signup", // ✅ 링크 추가
    },
    {
      id: 2,
      title: "상담 및 견적",
      description: "전문 컨설턴트와 1:1 상담 및 맞춤 견적 제공",
      lottiePath: "/animations/step2.json",
      href: "/production", // ✅ 링크 추가
    },
    {
      id: 3,
      title: "제작 진행",
      description: "디자인 · 개발 · QA까지 풀 프로세스 진행",
      lottiePath: "/animations/step3.json",
    },
    {
      id: 4,
      title: "검토 및 오픈",
      description: "최종 검토 후 안정적으로 웹사이트 오픈",
      lottiePath: "/animations/step4.json",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">홈페이지 제작 프로세스</h2>
        <p className="text-center text-gray-500 mb-16">처음부터 끝까지 전문가가 함께합니다.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ id, title, description, lottiePath, href }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              {href ? (
                <Link href={href} className="absolute inset-0 z-10" aria-label={title}></Link>
              ) : null}

              <div className="w-32 h-32 mb-6 rounded-xl shadow-md bg-white p-2">
                <LottiePlayer src={lottiePath} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}