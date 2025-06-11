// /components/customizer/HeaderStyleOption.tsx

import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { HeaderStyle } from '@/components/store/useCustomizerStore';
import clsx from 'clsx';

const HeaderStyleOption = () => {
  const { headerStyle, setHeaderStyle } = useCustomizerStore();

  const styles: HeaderStyle[] = ['simple', 'centered', 'withLogo'];

  return (
    <div className="space-y-2">
      {styles.map((style) => (
        <button
          key={style}
          onClick={() => setHeaderStyle(style)}
          className={clsx(
            'block w-full text-left px-4 py-2 rounded-md border',
            {
              'bg-indigo-600 text-white': headerStyle === style,
              'bg-white hover:bg-gray-100': headerStyle !== style,
            }
          )}
        >
          {style.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default HeaderStyleOption;