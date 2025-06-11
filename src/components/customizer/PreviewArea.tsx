// /components/customizer/PreviewArea.tsx

import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { ButtonStyle, HeaderStyle } from '@/components/store/useCustomizerStore';

const PreviewArea = () => {
    const { buttonStyle, headerStyle, footerStyle, fontFamily } = useCustomizerStore();
    const headerTextMap: Record<HeaderStyle, string> = {
        simple: '간단한 헤더',
        centered: '가운데 정렬된 헤더',
        withLogo: '로고와 함께 있는 헤더',
    };


    const fontClassMap: Record<string, string> = {
        pretendard: 'font-pretendard',
        noto: 'font-noto',
        nanum: 'font-nanum',
    };

    // 버튼 스타일 미리보기 
    const styleMap: Record<ButtonStyle, string> = {
        rounded: 'rounded-full bg-blue-600 text-white px-6 py-2',
        flat: 'bg-blue-100 text-blue-800 px-6 py-2',
        ghost: 'border border-blue-600 text-blue-600 px-6 py-2',
        pill: 'rounded-full bg-green-500 text-white px-8 py-2 shadow-md',
        outline: 'border-2 border-gray-700 text-gray-700 px-6 py-2 bg-transparent',
    };

    //헤더 스타일 미리보기
    const renderHeader = () => {
        switch (headerStyle) {
            case 'simple':
                return (
                    <div className="flex text-xl font-bold border-b py-2"> 회사소개 사업분야 제품안내 공지사항</div>
                );
            case 'centered':
                return (
                    <div className="text-xl font-bold text-center py-4 bg-gray-100">
                        <span className="text-gray-800">회사소개 사업분야 제품안내 공지사항</span>
                    </div>
                );
            case 'withLogo':
                return (
                    <div className="flex items-center gap-2 p-4 bg-white shadow">
                        <img
                            src="/logo_1.png"
                            alt="로고"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-lg font-semibold text-blue-700">회사소개 사업분야 제품안내 공지사항</span>
                    </div>
                );
            default:
                return null;
        }
    };
    //푸터 스타일 미리보기
    const renderFooter = () => {
        switch (footerStyle) {
            case 'simple':
                return (
                    <footer className="bg-gray-100 text-center text-sm py-4 text-gray-600">
                        © 2025 리온코드 | Web. API. Automation.
                    </footer>
                );
            case 'dark':
                return (
                    <footer className="bg-gray-900 text-white px-6 py-8 text-sm">
                        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">콘텐츠</h4>
                                <ul className="space-y-1 text-gray-300">
                                    <li>아이콘</li>
                                    <li>스티커</li>
                                    <li>애니메이션</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">도움</h4>
                                <ul className="space-y-1 text-gray-300">
                                    <li>FAQ</li>
                                    <li>문의</li>
                                    <li>이용 안내</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">회사</h4>
                                <ul className="space-y-1 text-gray-300">
                                    <li>소개</li>
                                    <li>블로그</li>
                                    <li>채용</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">소셜 미디어</h4>
                                <div className="flex gap-2">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                    <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </footer>
                );
            case 'corporate':
                return (
                    <footer className="bg-gray-50 text-gray-700 py-6 px-4 text-sm">
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
                            <div>
                                <p>상호 : (주)리온코드</p>
                                <p>대표 : 최남호</p>
                                <p>사업자등록번호: 123-45-67890</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p>경기도 성남시 판교로 123</p>
                                <p>고객센터: 1588-0000</p>
                                <p>이메일: hello@reoncode.com</p>
                            </div>
                        </div>
                    </footer>
                );
            default:
                return null;
        }
    };



    return (
        <div className={`bg-white p-6 h-full overflow-auto ${fontClassMap[fontFamily]}`}>
            <h2 className="text-xl font-bold mb-4">미리보기</h2>
            <div className="border border-dashed border-gray-300 p-6 rounded-md text-center text-gray-500">
                이곳에 실시간 미리보기가 표시됩니다.

                {/* ✅ 폰트 미리보기 텍스트 추가 */}
                <p className="text-xl mt-4 mb-4">
                    가나다라마바사 ABCDEFG abcdefg 1234567890
                </p>

                <div className="mb-6">{renderHeader()}</div>

                <div className="flex justify-center">
                    <button className={styleMap[buttonStyle]}>샘플 버튼</button>
                </div>

                <div className="mt-8">{renderFooter()}</div>
            </div>
        </div>
    );
};

export default PreviewArea;