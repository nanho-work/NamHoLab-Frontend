'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LottiePlayer from "@/components/common/LottiePlayer";

const prefix = process.env.NODE_ENV === "production" ? "/NamHoLab-Frontend" : "";

const steps = [
    {
        title: "상담 및 견적",
        desc: "전문 컨설턴트와 상세 상담 진행",
        detail: [
            "요구사항 및 목표 상세 파악",
            "예상 예산 및 개발 기간 안내",
            "필수 기능 및 구현 범위 협의",
            "프로젝트 진행방식 안내",
            "추가 요청사항 및 옵션 논의"
        ],
        lottiePath: "/animations/meeting.json"
    },
    {
        title: "디자인 제작",
        desc: "브랜드 아이덴티티를 반영한 디자인 시안 확정",
        detail: [
            "디자인 방향성 및 레퍼런스 협의",
            "초안 디자인 시안 제공",
            "피드백 반영 및 2~3회 수정 가능",
            "최종 디자인 확정 후 개발 착수"
        ],
        lottiePath: "/animations/design.json"
    },
    {
        title: "개발 진행",
        desc: "확정된 디자인을 기반으로 퍼블리싱 및 기능 개발",
        detail: [
            "퍼블리싱 및 프론트엔드 개발",
            "백엔드 및 API 연동",
            "CMS 시스템 적용 (필요시)",
            "반응형 최적화 및 속도 개선"
        ],
        lottiePath: "/animations/Development.json"
    },
    {
        title: "검수 및 수정",
        desc: "QA 검수 및 잔여 수정 반영",
        detail: [
            "전체 기능 검증 (QA)",
            "브라우저 & 모바일 호환성 점검",
            "잔여 수정 사항 반영",
            "최종 피드백 수렴 및 반영"
        ],
        lottiePath: "/animations/QAReview.json"
    },
    {
        title: "최종 오픈",
        desc: "서비스 오픈 및 운영 지원",
        detail: [
            "최종 오픈 전 안정성 점검",
            "서비스 오픈 및 도메인 연결",
            "운영 및 유지보수 가이드 제공",
            "장애 대응 및 운영 지원 체계 안내"
        ],
        lottiePath: "/animations/Launching.json"
    }
];

export default function ProductionGuideAnimated() {
    return (
        <div className="max-w-5xl mx-auto my-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white py-16 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                홈페이지 제작 과정 안내
            </h2>

            <div className="relative">
                {/* 수직선 */}
                <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-blue-100" />

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <StepItem
                            key={index}
                            index={index}
                            title={step.title}
                            desc={step.desc}
                            detail={step.detail}
                            lottiePath={step.lottiePath}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StepItem({ index, title, desc, detail, lottiePath }: {
    index: number;
    title: string;
    desc: string;
    detail: string[];
    lottiePath?: string;
}) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div ref={ref} className="relative pl-20 flex flex-col md:flex-row items-start gap-10">
            {/* 타임라인 원형 */}
            <motion.div
                className={`absolute left-0 top-0 w-10 h-10 rounded-full border-4 flex items-center justify-center font-bold text-white text-lg
          ${inView ? 'bg-blue-600 border-blue-600' : 'bg-white border-blue-200 text-blue-600'}
        `}
                initial={{ scale: 0.5 }}
                animate={{ scale: inView ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
            >
                {index + 1}
            </motion.div>

            {/* 왼쪽: 텍스트 */}
            <motion.div
                className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {title} <span className="text-sm text-gray-400">(예상: 약 3~7일)</span>
                </h3>
                <p className="text-lg text-gray-600 mb-4">{desc}</p>
                <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                    {detail.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </motion.div>

            {/* 오른쪽: Lottie 애니메이션 */}
            <div className="w-[280px] h-[260px] rounded-2xl overflow-hidden shadow-lg bg-white">
                <LottiePlayer src={`${prefix}${lottiePath ?? ''}`} width={280} height={280} />
            </div>
        </div>
    );
}