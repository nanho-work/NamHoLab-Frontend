// /components/customizer/ButtonStyleOption.tsx

import React from 'react';
import clsx from 'clsx';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { ButtonStyle } from '@/components/store/useCustomizerStore';

const ButtonStyleOption = () => {
    const { buttonStyle, setButtonStyle } = useCustomizerStore();

    const styles: ButtonStyle[] = ['rounded', 'flat', 'ghost', 'pill', 'outline'];

    return (
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
                    {variant.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default ButtonStyleOption;