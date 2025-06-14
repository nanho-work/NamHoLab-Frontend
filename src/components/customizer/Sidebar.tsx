import React, { useState } from 'react';
import ButtonStyleOption from './ButtonStyleOption';
import HeaderStyleOption from './HeaderStyleOption';
import FooterStyleOption from './FooterStyleOption';
import FontFamilyOption from './FontFamilyOption';

const Sidebar = () => {
    const [openSection, setOpenSection] = useState<string | null>('button');

    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    return (
        <aside className="bg-white w-80 p-6 border-r border-gray-200 shadow-md h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">🎨 커스터마이징</h2>
            <div className="space-y-4">

                {/* 버튼 */}
                <div className="border rounded-md shadow-sm bg-gray-50">
                    <div
                        className="p-4 cursor-pointer font-semibold text-gray-700 border-b"
                        onClick={() => toggleSection('button')}
                    >
                        버튼 스타일
                    </div>
                    {openSection === 'button' && (
                        <div className="p-4">
                            <ButtonStyleOption />
                        </div>
                    )}
                </div>

                {/* 폰트 */}
                <div className="border rounded-md shadow-sm bg-gray-50">
                    <div
                        className="p-4 cursor-pointer font-semibold text-gray-700 border-b"
                        onClick={() => toggleSection('font')}
                    >
                        글꼴 선택
                    </div>
                    {openSection === 'font' && (
                        <div className="p-4">
                            <FontFamilyOption />
                        </div>
                    )}
                </div>

                {/* 헤더 */}
                <div className="border rounded-md shadow-sm bg-gray-50">
                    <div
                        className="p-4 cursor-pointer font-semibold text-gray-700 border-b"
                        onClick={() => toggleSection('header')}
                    >
                        헤더 스타일
                    </div>
                    {openSection === 'header' && (
                        <div className="p-4">
                            <HeaderStyleOption />
                        </div>
                    )}
                </div>

                {/* 푸터 */}
                <div className="border rounded-md shadow-sm bg-gray-50">
                    <div
                        className="p-4 cursor-pointer font-semibold text-gray-700 border-b"
                        onClick={() => toggleSection('footer')}
                    >
                        푸터 스타일
                    </div>
                    {openSection === 'footer' && (
                        <div className="p-4">
                            <FooterStyleOption />
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;