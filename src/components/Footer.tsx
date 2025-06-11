// src/components/Footer.tsx
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <img src="/logo.png" alt="라운코드 로고" className="w-[150px] h-auto" />
          <p className="text-sm text-gray-500">Web. API. Automation.</p>
        </div>

        <div className="space-y-1 text-sm text-gray-500">
          <p><span className="font-semibold text-gray-700">라운코드</span></p>
          <p>대표: 최남호</p>
          <p>사업자등록번호: 399-67-00640</p>
          <p>경기도 남양주시 별내중앙로 30, 2층 204-F125호</p>
          <p>이메일: contact@yourdomain.com</p>
        </div>

        <div className="space-y-2 text-sm text-gray-500 sm:text-right">
          <p>&copy; {new Date().getFullYear()} NamHoLab. All rights reserved.</p>
          <div className="flex justify-start sm:justify-end space-x-4">
            <a href="/terms" className="hover:underline">이용약관</a>
            <a href="/privacy" className="hover:underline">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}