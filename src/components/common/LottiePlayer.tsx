'use client';

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  src: string;
  width?: number;
  height?: number;
  scale?: number;
}

function LottiePlayer({ src, width = 128, height = 128, scale = 0.8 }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => {
        console.error(`Lottie fetch error for ${src}:`, err);
      });
  }, [src]);

  if (!animationData) {
    return (
      <div
        style={{ width, height }}
        className="mb-6 bg-gray-100 rounded-xl shadow-inner animate-pulse"
      ></div>
    );
  }

  return (
    <div
      style={{ width, height }}
      className="mb-6 rounded-xl shadow-md bg-white flex items-center justify-center"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: `${width * scale}px`, height: `${height * scale}px` }}
      />
    </div>
  );
}

export default LottiePlayer;