// src/components/ProcessSection.tsx

import LottiePlayer from "@/components/common/LottiePlayer";

const prefix = process.env.NODE_ENV === "production" ? "/NamHoLab-Frontend" : "";

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "빠른 요청 접수",
      description: "연락처와 요청사항만 간단히 입력하면 시작됩니다.",
      lottiePath: `${prefix}/animations/step1.json`,
    },
    {
      id: 2,
      title: "상담 및 견적",
      description: "전문 컨설턴트가 직접 상담하고 맞춤 견적을 제안합니다.",
      lottiePath: `${prefix}/animations/step2.json`,
    },
    {
      id: 3,
      title: "제작 진행",
      description: "디자인부터 개발, QA까지 모든 과정을 전담합니다.",
      lottiePath: `${prefix}/animations/step3.json`,
    },
    {
      id: 4,
      title: "검토 및 오픈",
      description: "검수 후 웹사이트를 안정적으로 오픈합니다.",
      lottiePath: `${prefix}/animations/step4.json`,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">홈페이지 제작 프로세스</h2>
        <p className="text-center text-gray-500 mb-16">처음부터 끝까지 전문가가 함께합니다.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ id, title, description, lottiePath }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
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