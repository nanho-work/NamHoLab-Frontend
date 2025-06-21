'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const prefix = process.env.NODE_ENV === 'production' ? '/NamHoLab-Frontend' : '';

/*
// 기존 메뉴 전체 주석은 유지 (확장 대비 보관)
const menu = [ ... ];
*/

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center w-[200px] h-[50px]">
          <Link href="/" className="flex gap-2 shrink-0">
            <Image
              src={`${prefix}/logo.png`}
              alt="LaonCode Logo"
              width={90}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: Simplified Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-semibold text-gray-900">
          <Link href="/pricing" className="hover:text-blue-600">비용안내</Link>
          <Link href="/production" className="hover:text-blue-600">제작과정</Link>
          <Link href="/contact" className="hover:text-blue-600">문의하기</Link>
        </nav>

        {/* Right: Mobile hamburger - 유지 (추후 확장용) */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-gray-800">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 bg-white text-right">
          <Link href="/pricing" className="block text-lg font-semibold text-gray-900 hover:text-blue-600">
            가격안내
          </Link>
          <Link href="/customize" className="block text-lg font-semibold text-gray-900 hover:text-blue-600">
            제작과정
          </Link>
          <Link href="/contact" className="block text-lg font-semibold text-gray-900 hover:text-blue-600">
            문의하기
          </Link>
        </div>
      )}
    </header>
  );
}