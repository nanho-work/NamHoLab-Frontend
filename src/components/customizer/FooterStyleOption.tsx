import React from 'react';
import { useCustomizerStore } from '@/components/store/useCustomizerStore';
import type { FooterStyle } from '@/components/store/useCustomizerStore';
import clsx from 'clsx';

const FooterStyleOption = () => {
  const { footerStyle, setFooterStyle } = useCustomizerStore();

  const styles: FooterStyle[] = ['simple', 'dark', 'corporate'];

  const styleLabelMap: Record<FooterStyle, string> = {
    simple: '기본형',
    dark: '어두운형',
    corporate: '기업형',
  };

  return (
    <div className="space-y-2">
      {styles.map((style) => (
        <button
          key={style}
          onClick={() => setFooterStyle(style)}
          className={clsx(
            'block w-full text-left px-4 py-2 rounded-md border',
            {
              'bg-gray-900 text-white': footerStyle === style,
              'bg-white hover:bg-gray-100': footerStyle !== style,
            }
          )}
        >
          {styleLabelMap[style]}
        </button>
      ))}
    </div>
  );
};

export default FooterStyleOption;