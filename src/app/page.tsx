// src/app/page.tsx
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import FadeCarousel from '@/components/Carousel/CardStackSlider';
import ProcessSection from '@/components/main/ProcessSection';

export default function Home() {
  return (
    <main>
      <section className="px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
                Web. API. Automation.<br />
                <span className="text-gray-700">LaonCode가 함께합니다.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-gray-500 max-w-xl">
                신뢰와 기술, 개발의 본질에 집중합니다.<br />
                LaonCode는 소규모 프로젝트부터 자동화 시스템까지 함께합니다.
              </p>
            </Reveal>
            <a
              href="#contact"
              className="mt-6 inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
            >
              상담하기
            </a>
          </div>

          <div>
            <FadeCarousel />
          </div>
        </div>
      </section>
      <ProcessSection/>

      {/* Services Section */}
      <section id="services" className="bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">우리가 잘하는 일</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">웹사이트 개발</h3>
              <p className="text-sm text-gray-600">Next.js, 반응형 UI, 기업/홍보 웹 구축</p>
            </div>
            <div className="p-6 border rounded shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">API 개발</h3>
              <p className="text-sm text-gray-600">FastAPI, Express 등 백엔드 REST API 구축</p>
            </div>
            <div className="p-6 border rounded shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">업무 자동화</h3>
              <p className="text-sm text-gray-600">스크립트 자동화, 크롤링, 정산/알림 시스템 구현</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">대표 프로젝트</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 mb-10">실제 상용 서비스에 적용된 프로젝트 사례입니다.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">NamHoLab은</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-600 text-base leading-relaxed">
              NamHoLab은 웹, API, 자동화 기술을 바탕으로 작고 실용적인 서비스를 만드는 개발 파트너입니다.<br />
              창업 초기 기업, 소상공인, 개인 개발자와의 협업 경험을 바탕으로,<br />
              복잡한 기능보다 본질에 집중하고, 빠르게 실현 가능한 결과를 추구합니다.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm text-gray-400 mt-6 italic">
              “Web. API. Automation. – 단순하지만 정확하게, 우리는 그렇게 만듭니다.”
            </p>
          </Reveal>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">문의하기</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-600 mb-6">
              궁금하신 점이나 프로젝트 문의는 언제든지 환영입니다.<br />
              아래 이메일 또는 버튼을 통해 연락주세요.
            </p>
          </Reveal>

          <div className="text-gray-800 font-medium text-lg mb-4">
            📧 <a href="mailto:choi1278@gmail.com" className="text-blue-700 hover:underline">
              choi1278@gmail.com
            </a>
          </div>

          <a
            href="mailto:choi1278@gmail.com"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            이메일로 문의하기
          </a>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">NamHoLab 팀 소개</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-600 mb-10">
              실력과 책임감을 바탕으로 작동하는 팀, 필요에 따라 외부 협업도 유연하게 진행합니다.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {/* 대표 */}
            <div className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">최남호</h3>
              <p className="text-sm text-gray-600 mb-2">대표 / 풀스택 개발자</p>
              <p className="text-sm text-gray-500">
                FastAPI, Next.js 기반의 실용적 서비스 설계와 구현에 강점을 가졌으며, 자동화/운영까지 책임집니다.
              </p>
            </div>

            {/* 외부 협업자 예시 */}
            <div className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">김OO</h3>
              <p className="text-sm text-gray-600 mb-2">디자이너 (협업)</p>
              <p className="text-sm text-gray-500">
                사용자 흐름 중심의 UI/UX 디자인을 기반으로 반응형 웹에 최적화된 시안을 제작합니다.
              </p>
            </div>

            <div className="p-6 border rounded shadow-sm bg-white">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">이OO</h3>
              <p className="text-sm text-gray-600 mb-2">서버/DevOps (협업)</p>
              <p className="text-sm text-gray-500">
                AWS, Docker, CI/CD 파이프라인 구축을 지원하며, 프로젝트의 안정적 운영을 함께합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}