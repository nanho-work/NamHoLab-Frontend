// /components/customizer/CustomizerLayout.tsx

import React from 'react';
import Sidebar from './Sidebar';
import PreviewArea from './PreviewArea';

const CustomizerLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] h-screen">
      <Sidebar />
      <PreviewArea />
    </div>
  );
};

export default CustomizerLayout;