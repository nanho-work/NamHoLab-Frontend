'use client';

import { motion } from 'framer-motion';
import SignupProgressGuide from '@/components/Signup/SignupProgressGuide';

export default function PricingSection() {
    return (
        <>
        <style jsx global>{`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(-3%);
            }
            50% {
              transform: translateY(3%);
            }
          }

          .animate-bounce-slow {
            animation: bounce-slow 2.4s infinite;
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }

          .animate-pulse-slow {
            animation: pulse-slow 2.4s infinite;
          }

          @keyframes float-badge {
            0%, 100% {
              transform: translateY(-10%);
            }
            50% {
              transform: translateY(10%);
            }
          }
          .float-badge {
            animation: float-badge 2.4s ease-in-out infinite;
          }
        `}</style>
        <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="text-left mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">홈페이지제작 비용 안내</h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    디웹스에서 홈페이지 제작 시 <b>초기 1년치 도메인, 호스팅, 기본 유지보수 비용이 모두 포함</b>되어 있습니다.<br />
                    유지보수와 도메인, 호스팅의 연장을 원하시는 경우, 별도 확장 비용만으로도 동일한 서비스를 이어가실 수 있습니다.
                  </p>
                </div>

                <SignupProgressGuide/>

                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-700 text-left">
                    웹 홈페이지 전용 패키지 (관리자페이지 미포함)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            name: '기본형 (OnePage)',
                            features: ['- 메인 비주얼 1, 메인 5개파트', '- GitHub Pages 무료 호스팅', '- PC, Mobile 대응'],
                            price: '₩900,000',
                            extra: '₩360,000',
                            discount: '-₩300,000',
                            total: '₩900,000',
                        },
                        {
                            name: '맞춤형 Lite (PC 단독)',
                            features: ['- 메인 1, 서브 10페이지', '- PC 중심 구성'],
                            price: '₩2,000,000',
                            extra: '₩360,000',
                            discount: '-₩300,000',
                            total: '₩2,000,000',
                        },
                        {
                            name: '프리미엄 (반응형)',
                            features: ['- 메인 1, 서브 10페이지', '- PC, Mobile 개별 구성', '- 맞춤형 기능 구성 가능'],
                            price: '₩2,800,000',
                            extra: '₩360,000',
                            discount: '-₩300,000',
                            total: '₩2,800,000',
                        },
                        {
                            name: '프리미엄Pro',
                            features: ['- 메인 1, 서브 10페이지', '- 반응형 레이아웃', '- 관리자페이지 및 고급 기능 포함'],
                            price: '₩4,500,000',
                            extra: '₩360,000',
                            discount: '-₩300,000',
                            total: '₩4,500,000',
                        },
                    ].map((plan, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className={`group relative border rounded-xl p-6 overflow-hidden transition duration-300 ${idx === 3 ? 'bg-red-50' : 'bg-white'} shadow hover:shadow-xl`}>
                            {idx === 2 && (
                                <div className="absolute top-0 left-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-br-md shadow z-20 float-badge">
                                    BEST
                                </div>
                            )}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300 z-0 pointer-events-none">
                                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="80" stroke="#6366F1" strokeWidth="4" strokeDasharray="5 5" />
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                                <ul className="text-sm text-gray-500 mb-6 text-left list-disc list-inside min-h-[96px]">
                                    {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                                <div className="text-left text-base space-y-1 mb-4">
                                    <p>제작비: <b>{plan.price}</b></p>
                                    <p>도메인+호스팅+유지보수: <b>{plan.extra}</b></p>
                                    <p>할인: <b className="text-red-500">{plan.discount}</b></p>
                                    <p className="font-bold">TOTAL: <b className="text-blue-600">{plan.total}</b></p>
                                </div>
                            </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
                <div className="mt-20">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-700 text-left">
                      웹 패키지 주요 기능 비교표
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 p-2 text-center text-base">기능</th>
                            <th className="border border-gray-300 p-2 text-center text-base">기본형<br />(OnePage)</th>
                            <th className="border border-gray-300 p-2 text-center text-base">맞춤형 Lite</th>
                            <th className="border border-gray-300 p-2 text-center text-base">프리미엄(반응형)</th>
                            <th className="border border-gray-300 p-2 text-center text-base">프리미엄 Pro<br />(관리자 포함)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['페이지 구성', '메인+5파트', '메인1+서브5', '메인1+서브10', '메인1+서브10'],
                            ['맞춤 디자인', '✖️', '✔️', '✔️', '✔️'],
                            ['기능 개발 가능', '✖️', '✔️', '✔️', '✔️'],
                            ['다국어 제작', '✖️', '✔️', '✔️', '✔️'],
                            ['관리자 페이지 포함', '✖️', '✖️', '✖️', '✔️'],
                            ['PC 지원', '✔️', '✔️', '✔️', '✔️'],
                            ['모바일 지원', '✔️', '✖️', '✔️', '✔️'],
                            ['태블릿 대응', '✔️', '✖️', '✔️', '✔️'],
                          ].map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.map((col, i) => (
                                <td key={i} className="border border-gray-300 py-6 px-2 text-center">
                                  {col === '✔️' ? 'O' :
                                   col === '✖️' ? 'X' :
                                   col}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="text-sm text-gray-500 mt-4 text-left">
                        홈페이지제작 방식에 따라 구현하는 페이지 수나 기능에 차이가 있으니 기본 사양을 확인하시기 바랍니다.<br />
                        명시되지 않은 범위의 요구 사항은 고객사와 협의 후 진행 여부를 안내해 드리고 있습니다.
                      </p>
                      <div className="mt-8 text-left text-sm text-gray-700">
                        <h4 className="font-semibold text-base text-gray-800 mb-2">※ 선택 가능한 추가 기능 (옵션)</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li><b>채팅 상담 기능</b> (예: 카카오톡, 채널톡) – ₩200,000~</li>
                          <li><b>게시판 CMS</b> (공지사항, 블로그 등) – ₩300,000~</li>
                          <li><b>회원가입 및 로그인</b> 기능 – ₩400,000~</li>
                          <li><b>예약 시스템</b> (시간 선택, 이메일 연동) – ₩700,000~</li>
                          <li><b>관리자 페이지</b> (콘텐츠 관리, 통계 등) – ₩500,000~</li>
                          <li><b>결제 기능</b> (카카오페이, 토스 등) – ₩800,000~</li>
                          <li><b>상품 주문 및 장바구니</b> 기능 – ₩600,000~</li>
                          <li><b>지도 연동</b> (카카오맵, 네이버지도) – ₩100,000~</li>
                          <li><b>접속 통계 대시보드</b> – ₩400,000~</li>
                          <li><b>SMS / 이메일 발송 연동</b> – ₩300,000~</li>
                          <li><b>캘린더 / 예약 스케줄 관리</b> – ₩500,000~</li>
                          <li><b>reCAPTCHA 적용</b> (스팸방지) – ₩100,000~</li>
                          <li><b>SSL 인증서 설치</b> – ₩80,000~</li>
                        </ul>
                        <p className="mt-2 text-xs text-gray-500">
                          위 기능은 고객 요청 시 맞춤 개발 가능하며, 실제 비용은 요청 범위에 따라 달라질 수 있습니다.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}