import { create } from 'zustand';

export type ButtonStyle = 'rounded' | 'flat' | 'ghost' | 'pill' | 'outline';
export type ButtonColor = string; // 기존 enum → string(hex) 기반으로 변경
export type HeaderStyle = 'simple' | 'centered' | 'withLogo';
export type FooterStyle = 'simple' | 'dark' | 'corporate';
export type FontFamily = 'pretendard' | 'noto' | 'nanum';

interface CustomizerState {
  buttonStyle: ButtonStyle;
  buttonColor: ButtonColor;
  headerStyle: HeaderStyle;
  footerStyle: FooterStyle;
  fontFamily: FontFamily;
  setButtonStyle: (style: ButtonStyle) => void;
  setButtonColor: (color: ButtonColor) => void;
  setHeaderStyle: (style: HeaderStyle) => void;
  setFooterStyle: (style: FooterStyle) => void;
  setFontFamily: (font: FontFamily) => void;
}

export const useCustomizerStore = create<CustomizerState>((set) => ({
  buttonStyle: 'rounded',
  buttonColor: '#2563eb', // Tailwind blue-600 로 초기값 설정 (hex 기반)
  headerStyle: 'simple',
  footerStyle: 'simple',
  fontFamily: 'pretendard',
  setButtonStyle: (style) => set({ buttonStyle: style }),
  setButtonColor: (color) => set({ buttonColor: color }),
  setHeaderStyle: (style) => set({ headerStyle: style }),
  setFooterStyle: (style) => set({ footerStyle: style }),
  setFontFamily: (font) => set({ fontFamily: font }),
}));