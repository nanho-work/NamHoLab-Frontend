import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { HeaderStyle } from '@/components/store/useCustomizerStore';
import clsx from 'clsx';

const HeaderStyleOption = () => {
  const { headerStyle, setHeaderStyle } = useCustomizerStore();

  const styles: HeaderStyle[] = ['simple', 'centered', 'withLogo'];

  const styleLabelMap: Record<HeaderStyle, string> = {
    simple: '기본형',
    centered: '가운데 정렬형',
    withLogo: '로고 포함형',
  };

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
          {styleLabelMap[style]}
        </button>
      ))}
    </div>
  );
};

export default HeaderStyleOption;