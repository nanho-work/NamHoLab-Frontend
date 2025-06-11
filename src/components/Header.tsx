// src/components/Header.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/*
const menu = [
  {
    label: '홈페이지제작',
    items: [
      { label: '제작방법', href: '#' },
      { label: '제작비용', href: '#' },
      { label: '검색방법', href: '#' },
      { label: '유지보수', href: '#' },
      { label: '제작용어', href: '#' },
    ],
  },
  {
    label: '서비스소개',
    items: [
      { label: '다양한기능', href: '#' },
      { label: '특별한 혜택', href: '#' },
    ],
  },
  {
    label: '템플릿 선택형',
    items: [
      { label: '전체 디자인', href: '#' },
      { label: '무료 디자인', href: '#' },
      { label: '유료 디자인', href: '#' },
      { label: '반응형 디자인', href: '#' },
      { label: '업종별 디자인', href: '#' },
    ],
  },
  {
    label: '주문 제작형',
    items: [
      { label: '맞춤형 디자인', href: '#' },
      { label: '맞춤형 개발', href: '#' },
    ],
  },
  {
    label: '포트폴리오',
    items: [
      { label: '포트폴리오', href: '#' },
      { label: '실시간 제작 현황', href: '#' },
      { label: '지역별 제작 현황', href: '#' },
    ],
  },
  {
    label: '고객센터',
    items: [
      { label: '상담 및 견적문의', href: '#' },
      { label: '자주하는 질문', href: '#' },
    ],
  },
  {
    label: '마케팅',
    items: [
      { label: 'SEO 마케팅', href: '#' },
    ],
  },
];
*/

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white transition-all duration-300 overflow-hidden group py-6  pb-16 ">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between h-auto">
        {/* Left: Logo */}
        <div className="flex gap-2 items-center w-[200px] h-[100px]">
          <Link href="/" className="flex gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="LaonCode Logo"
              width={100}
              height={40}
              className="object-cover scale-150 translate-y-[-0%] transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Center: Nav desktop */}
        <div className="hidden md:flex flex-col items-center text-center">
          {/* <nav className="group relative w-full">
            <div className="grid grid-cols-7 max-w-5xl mx-auto px-4">
              {menu.map((item) => (
                <div key={item.label} className="text-lg font-semibold text-gray-900">
                  {item.label}
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-full w-full overflow-hidden max-h-0 group-hover:max-h-[2000px] transition-all duration-300 bg-transparent z-10">
              <div className="grid grid-cols-7 max-w-5xl mx-auto px-4 py-4">
                {menu.map((item) => (
                  <ul key={item.label} className="space-y-2 text-sm text-gray-700 overflow-visible">
                    {item.items.map((subItem) => (
                      <li key={subItem.label}>
                        <Link href={subItem.href} className="block hover:text-blue-600">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </nav> */}
          <nav className="flex space-x-6 text-sm text-gray-700">
            <Link href="/pricing" className="text-lg font-semibold text-gray-900 hover:text-blue-600">가격안내</Link>
            <Link href="/customize" className="text-lg font-semibold text-gray-900 hover:text-blue-600">제작과정</Link>
            <Link href="/contact" className="text-lg font-semibold text-gray-900 hover:text-blue-600">문의하기</Link>
          </nav>
        </div>

        {/* Right: Auth or hamburger */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-gray-800">
            ☰
          </button>
        </div>

        {/* <div className="hidden md:flex justify-end items-center gap-4 text-lg text-gray-600">
          <Link href="#">로그인</Link>
          <Link href="#">회원가입</Link>
        </div> */}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 bg-white">
          {/* {menu.map((item) => (
            <div key={item.label}>
              <p className="font-semibold text-gray-800">{item.label}</p>
              <ul className="pl-4 space-y-1 text-sm text-gray-600">
                {item.items.map((subItem) => (
                  <li key={subItem.label}>
                    <Link href={subItem.href} className="block hover:text-blue-500">
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
          {/* <div className="pt-4 border-t">
            <Link href="#" className="block text-gray-700">로그인</Link>
            <Link href="#" className="block text-gray-700">회원가입</Link>
          </div> */}
        </div>
      )}
    </header>
  );
}