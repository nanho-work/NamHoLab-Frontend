// 3D Carousel / Perspective Carousel
'use client';

import React, { useEffect, useState } from 'react';
import CarouselCard from './CarouselCard';
import { FaLightbulb, FaCogs } from 'react-icons/fa';

const PerspectiveCarousel = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: '아이디어',
      description: '창의적인 아이디어를 빠르게 정리해보세요.',
      icon: <FaLightbulb size={40} />,
      link: '/details/idea',
      color: '#1E3A8A',
    },
    {
      title: '자동화',
      description: '반복되는 작업을 효율적으로 자동화합니다.',
      icon: <FaCogs size={40} />,
      link: '/details/automation',
      color: '#D35400',
    },
    {
      title: '통합 관리',
      description: '다양한 시스템을 하나의 플랫폼으로 통합하세요.',
      icon: <FaCogs size={40} />,
      link: '/details/integration',
      color: '#00695C', // 진한 청록
    },
    {
      title: '데이터 분석',
      description: '데이터 기반 의사결정을 지원합니다.',
      icon: <FaLightbulb size={40} />,
      link: '/details/analytics',
      color: '#4A148C', // 진한 보라
    },
    {
      title: '보안 강화',
      description: '안전한 정보 보호 체계를 구축합니다.',
      icon: <FaCogs size={40} />,
      link: '/details/security',
      color: '#263238', // 딥 그레이
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const getTransformStyle = (i: number) => {
    const offset = i - index;

    const translateY = offset * 50;
    // 현재 카드와 중심 카드 간의 위치 차이(offset)에 따라 세로 방향으로 약간 이동시킴 → 위아래로 겹쳐 쌓이는 느낌
    
    const scale = 1 - Math.abs(offset) * 0.1;
    // 중심에서 멀어질수록 카드를 작게 보이게 함 → 카드가 뒤로 가는 시각 효과
    
    const zIndex = cards.length - Math.abs(offset);
    // 중심 카드가 가장 위에 보이도록 zIndex 설정 → 겹침 순서를 자연스럽게 만듦
    
    const opacity = offset === 0 ? 1 : 0.7;
    // 중심 카드만 완전하게 보이고, 주변 카드는 반투명 처리

    return {
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s ease-in-out',
      position: 'absolute' as const,
     
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d' as React.CSSProperties['transformStyle']
    };
  };

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden"
      style={{ perspective: '2000px' }}
      role="region"
      aria-label="3D rotating carousel"
    >
      {cards.map((card, i) => (
        <div key={i} style={getTransformStyle(i)}>
          <CarouselCard data={card} />
        </div>
      ))}
    </div>
  );
};

export default PerspectiveCarousel;