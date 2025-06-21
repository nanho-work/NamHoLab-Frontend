// src/app/page.tsx
'use client';

import Reveal from '@/components/Reveal';
import FadeCarousel from '@/components/Carousel/CardStackSlider';
import ProcessSection from '@/components/main/ProcessSection';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { ButtonStyle, ButtonColor } from '@/components/store/useCustomizerStore';
import clsx from 'clsx';

export default function Home() {
  const { buttonStyle, buttonColor } = useCustomizerStore();

  const styleMap: Record<ButtonStyle, string> = {
    rounded: 'rounded-full px-6 py-3',
    flat: 'px-6 py-3 shadow-sm',
    ghost: 'border border-blue-600 px-6 py-3',
    pill: 'rounded-full px-8 py-3 shadow-md',
    outline: 'border-2 px-6 py-3',
  };

  const colorMap: Record<ButtonColor, string> = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-500',
    warning: 'bg-yellow-400 text-black hover:bg-yellow-300',
  };

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
              className={clsx(
                "mt-6 inline-block transition",
                styleMap[buttonStyle],
                colorMap[buttonColor]
              )}
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
    </main>
  );
}