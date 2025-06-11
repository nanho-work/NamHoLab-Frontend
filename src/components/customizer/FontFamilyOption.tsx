// /components/customizer/FontFamilyOption.tsx

import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { FontFamily } from '@/components/store/useCustomizerStore';
import clsx from 'clsx';

const FontFamilyOption = () => {
    const { fontFamily, setFontFamily } = useCustomizerStore();
    const fonts: FontFamily[] = ['pretendard', 'noto', 'nanum'];

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
                    {font.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default FontFamilyOption;