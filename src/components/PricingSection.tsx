'use client';

export default function PricingSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">가격 안내</h2>
                <p className="text-lg text-gray-500 mb-8">합리적인 가격으로 최적의 서비스를 제공합니다.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="border rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-4">기본형</h3>
                        <p className="text-3xl font-bold mb-4">₩990,000 ~</p>
                        <p className="text-gray-500 mb-4">소규모 홈페이지 제작에 적합</p>
                    </div>

                    <div className="border rounded-xl p-8 shadow-md bg-blue-50 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-4">맞춤형</h3>
                        <p className="text-3xl font-bold mb-4">₩1,990,000 ~</p>
                        <p className="text-gray-500 mb-4">기업/브랜드 맞춤형 홈페이지</p>
                    </div>

                    <div className="border rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-4">프리미엄</h3>
                        <p className="text-3xl font-bold mb-4">별도 협의</p>
                        <p className="text-gray-500 mb-4">고도화된 기능 및 확장 요청</p>
                    </div>
                </div>

                {/* 상세 테이블 항상 노출 */}
                <div className="overflow-x-auto bg-white rounded-xl shadow-md">
                    <table className="min-w-full text-base">
                        <thead className="bg-blue-50 text-lg text-gray-800 font-semibold">
                            <tr>
                                <th className="px-6 py-4 text-center">항목</th>
                                <th className="px-6 py-4 text-center">기본형</th>
                                <th className="px-6 py-4 text-center">맞춤형</th>
                                <th className="px-6 py-4 text-center">프리미엄</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr><td className="px-6 py-4">페이지 수</td><td className="text-center">5</td><td className="text-center">10</td><td className="text-center">제한 없음</td></tr>
                            <tr><td className="px-6 py-4">반응형 디자인</td><td className="text-center">O</td><td className="text-center">O</td><td className="text-center">O</td></tr>
                            <tr><td className="px-6 py-4">맞춤 디자인</td><td className="text-center">X</td><td className="text-center">O</td><td className="text-center">O</td></tr>
                            <tr><td className="px-6 py-4">관리자 페이지</td><td className="text-center">X</td><td className="text-center">O</td><td className="text-center">O</td></tr>
                            <tr><td className="px-6 py-4">기능 커스터마이징</td><td className="text-center">제한적</td><td className="text-center">가능</td><td className="text-center">고급 확장 가능</td></tr>
                            <tr><td className="px-6 py-4">유지보수</td><td className="text-center">3개월</td><td className="text-center">6개월</td><td className="text-center">12개월</td></tr>
                            <tr><td className="px-6 py-4">제작 기간</td><td className="text-center">2~3주</td><td className="text-center">4~5주</td><td className="text-center">협의</td></tr>
                            <tr className="bg-blue-50 font-bold">
                                <td className="px-6 py-4">기본 제작 비용</td>
                                <td className="px-6 py-4 text-blue-600 text-center">30만원 ~</td>
                                <td className="px-6 py-4 text-blue-600 text-center">45만원 ~</td>
                                <td className="px-6 py-4 text-blue-600 text-center">70만원 ~</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}