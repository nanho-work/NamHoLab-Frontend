import React from 'react';
import clsx from 'clsx';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { ButtonStyle } from '@/components/store/useCustomizerStore';
import { HexColorPicker } from 'react-colorful';

const ButtonStyleOption = () => {
    const { buttonStyle, setButtonStyle, buttonColor, setButtonColor } = useCustomizerStore();

    const styles: ButtonStyle[] = ['rounded', 'flat', 'ghost', 'pill', 'outline'];

    const styleLabelMap: Record<ButtonStyle, string> = {
        rounded: '둥근형',
        flat: '플랫형',
        ghost: '고스트형',
        pill: '필형',
        outline: '아웃라인형',
    };

    return (
        <div className="space-y-6">
            <div>
                <div className="space-y-2">
                    {styles.map((variant) => (
                        <button
                            key={variant}
                            onClick={() => setButtonStyle(variant)}
                            className={clsx(
                                'block w-full text-left px-4 py-2 rounded-md border',
                                {
                                    'bg-blue-600 text-white': buttonStyle === variant,
                                    'bg-white hover:bg-gray-100': buttonStyle !== variant,
                                }
                            )}
                        >
                            {styleLabelMap[variant]}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">버튼 색상 선택</h3>
                <div className="flex flex-col items-center">
                    <HexColorPicker color={buttonColor} onChange={setButtonColor} />
                    <div className="mt-2 text-sm text-gray-700">{buttonColor}</div>
                </div>
            </div>
        </div>
    );
};

export default ButtonStyleOption;