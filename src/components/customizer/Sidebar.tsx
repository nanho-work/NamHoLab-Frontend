import React from 'react';

import ButtonStyleOption from './ButtonStyleOption';
import HeaderStyleOption from './HeaderStyleOption';
import FooterStyleOption from './FooterStyleOption';
import FontFamilyOption from './FontFamilyOption';




const Sidebar = () => {
    return (
        <aside className="bg-gray-100 p-4 border-r h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">맞춤 설정</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-700">버튼 스타일</h3>
                    <ButtonStyleOption />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">글꼴 선택</h3>
                    <FontFamilyOption />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">헤더 스타일</h3>
                    <HeaderStyleOption/>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700">푸터 스타일</h3>
                    <FooterStyleOption />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;