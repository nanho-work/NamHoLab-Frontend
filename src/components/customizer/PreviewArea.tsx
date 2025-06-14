import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { ButtonStyle } from '@/components/store/useCustomizerStore';

const PreviewArea = () => {
    const { buttonStyle, buttonColor, headerStyle, footerStyle, fontFamily } = useCustomizerStore();

    const fontClassMap: Record<string, string> = {
        pretendard: 'font-pretendard',
        noto: 'font-noto',
        nanum: 'font-nanum',
    };

    const styleMap: Record<ButtonStyle, string> = {
        rounded: 'rounded-full px-6 py-2',
        flat: 'px-6 py-2 shadow-sm',
        ghost: 'border px-6 py-2',
        pill: 'rounded-full px-8 py-2 shadow-md',
        outline: 'border-2 px-6 py-2 bg-transparent',
    };

    const renderHeader = () => {
        switch (headerStyle) {
            case 'simple':
                return (
                    <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
                        <div className="text-xl font-bold">로고</div>
                        <nav className="flex gap-6 text-gray-700">
                            <a href="#">회사소개</a>
                            <a href="#">사업분야</a>
                            <a href="#">제품안내</a>
                            <a href="#">공지사항</a>
                        </nav>
                    </header>
                );
            case 'centered':
                return (
                    <header className="flex flex-col items-center justify-center px-6 py-8 bg-white shadow">
                        <nav className="flex gap-6 text-gray-700">
                            <a href="#">회사소개</a>
                            <a href="#">사업분야</a>
                            <a href="#">제품안내</a>
                            <a href="#">공지사항</a>
                        </nav>
                    </header>
                );
            case 'withLogo':
                return (
                    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="로고" className="w-10 h-10 object-contain" />
                            <span className="text-xl font-semibold text-blue-700">라온코드</span>
                        </div>
                        <nav className="flex gap-6 text-gray-700">
                            <a href="#">회사소개</a>
                            <a href="#">사업분야</a>
                            <a href="#">제품안내</a>
                            <a href="#">공지사항</a>
                        </nav>
                    </header>
                );
            default:
                return null;
        }
    };

    const renderFooter = () => {
        switch (footerStyle) {
            case 'simple':
                return (
                    <footer className="bg-gray-100 text-center text-sm py-4 text-gray-600 mt-10">
                        © 2025 리온코드 | Web. API. Automation.
                    </footer>
                );
            case 'dark':
                return (
                    <footer className="bg-gray-900 text-white text-sm py-6 mt-10">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
                            <div>
                                <p>상호 : (주)리온코드 | 대표 : 최남호</p>
                                <p>사업자등록번호: 123-45-67890</p>
                                <p>경기도 성남시 판교로 123</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p>고객센터: 1588-0000</p>
                                <p>이메일: hello@reoncode.com</p>
                                <div className="flex gap-3 mt-2">
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
                    <footer className="bg-gray-50 text-gray-700 text-sm py-6 mt-10">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
                            <div>
                                <p>상호 : (주)리온코드 | 대표 : 최남호</p>
                                <p>사업자등록번호: 123-45-67890</p>
                                <p>경기도 성남시 판교로 123</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p>고객센터: 1588-0000</p>
                                <p>이메일: hello@reoncode.com</p>
                                <p>채용/제휴: recruit@reoncode.com</p>
                            </div>
                        </div>
                    </footer>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`min-h-screen flex flex-col ${fontClassMap[fontFamily]}`}>
            {renderHeader()}
            <main className="flex-1 bg-gray-50 py-10">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">우리 제품의 특별한 가치를 경험하세요</h2>
                    <p className="text-gray-600 mb-8">다양한 기능과 탁월한 품질을 통해 비즈니스를 성장시키세요.</p>
                    <div className="flex justify-center mb-10">
                        <button className={`${styleMap[buttonStyle]}`} style={{ backgroundColor: buttonColor, color: 'white' }}>
                            지금 시작하기
                        </button>
                    </div>
                </div>
            </main>
            {renderFooter()}
        </div>
    );
};

export default PreviewArea;