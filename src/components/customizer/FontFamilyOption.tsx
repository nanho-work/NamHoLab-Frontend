import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { FontFamily } from '@/components/store/useCustomizerStore';
import clsx from 'clsx';

const FontFamilyOption = () => {
    const { fontFamily, setFontFamily } = useCustomizerStore();
    const fonts: FontFamily[] = ['pretendard', 'noto', 'nanum'];

    const fontLabelMap: Record<FontFamily, string> = {
        pretendard: '프리텐다드',
        noto: '노토 산스',
        nanum: '나눔 고딕',
    };

    return (
        <div className="space-y-2">
            {fonts.map((font) => (
                <button
                    key={font}
                    onClick={() => setFontFamily(font)}
                    className={clsx(
                        'block w-full text-left px-4 py-2 rounded-md border',
                        font === 'pretendard' && 'font-pretendard',
                        font === 'noto' && 'font-noto',
                        font === 'nanum' && 'font-nanum',
                        {
                            'bg-indigo-600 text-white': fontFamily === font,
                            'bg-white hover:bg-gray-100': fontFamily !== font,
                        }
                    )}
                >
                    {fontLabelMap[font]}
                </button>
            ))}
        </div>
    );
};

export default FontFamilyOption;