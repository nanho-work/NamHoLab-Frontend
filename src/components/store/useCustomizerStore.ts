// /store/useCustomizerStore.ts

import { create } from 'zustand';

export type ButtonStyle = 'rounded' | 'flat' | 'ghost' | 'pill' | 'outline';
export type HeaderStyle = 'simple' | 'centered' | 'withLogo';
export type FooterStyle = 'simple' | 'dark' | 'corporate';
export type FontFamily = 'pretendard' | 'noto' | 'nanum';


interface CustomizerState {
  buttonStyle: ButtonStyle;
  setButtonStyle: (style: ButtonStyle) => void;

  headerStyle: HeaderStyle;
  setHeaderStyle: (style: HeaderStyle) => void;

  footerStyle: FooterStyle;
  setFooterStyle: (style: FooterStyle) => void;

  fontFamily: FontFamily;
  setFontFamily: (font: FontFamily) => void;
}

export const useCustomizerStore = create<CustomizerState>((set) => ({
  buttonStyle: 'rounded',
  setButtonStyle: (style) => set({ buttonStyle: style }),

  headerStyle: 'simple',
  setHeaderStyle: (style) => set({ headerStyle: style }),

  footerStyle: 'simple',
  setFooterStyle: (style) => set({ footerStyle: style }),

  fontFamily: 'pretendard',
  setFontFamily: (font) => set({ fontFamily: font }),
}));