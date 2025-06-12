'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "회원가입 및 신청",
    desc: "간단한 정보 입력 후 제작 요청",
    detail: "이름, 연락처, 제작 희망사항을 입력하고 회원가입을 완료합니다.",
  },
  {
    title: "상담 및 견적",
    desc: "전문 상담을 통한 맞춤 견적",
    detail: "상담을 통해 예상 견적과 제작 범위를 상세히 안내받습니다.",
  },
  {
    title: "계약 및 착수",
    desc: "계약 진행 후 제작 본격 시작",
    detail: "계약 체결 후 본격적인 디자인 및 개발을 착수합니다.",
  },
  {
    title: "디자인 · 개발",
    desc: "요구사항 기반 디자인/개발",
    detail: "디자인 시안 검토 및 맞춤형 기능 개발을 진행합니다.",
  },
  {
    title: "검수 및 오픈",
    desc: "최종 검토 후 웹사이트 오픈",
    detail: "완료된 결과물을 검수하고 수정사항 반영 후 오픈합니다.",
  }
];

export default function SignupProgressGuide() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto my-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 perspective">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <AnimatePresence initial={false} mode="wait">
              {flipped === index ? (
                <motion.div
                  key="back"
                  className="absolute inset-0 bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg cursor-pointer"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setFlipped(null)}
                >
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-sm text-center">{step.detail}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="front"
                  className="bg-white p-6 rounded-2xl border border-gray-200 h-[200px] shadow-sm flex flex-col items-center cursor-pointer"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setFlipped(index)}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 text-center">{step.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}