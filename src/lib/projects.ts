// src/lib/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  note?: string;
}

export const projects: Project[] = [
  {
    id: 'kevin-tax',
    title: 'KevinTax - 세무상담 자동화 플랫폼',
    description:
      'FastAPI + MySQL + Next.js 기반의 고객 맞춤형 세무상담 플랫폼. 회원가입, 마이페이지, 리뷰, 관리자 백오피스 등 전 과정 구현.',
    tech: ['FastAPI', 'MySQL', 'Next.js', 'Docker', 'EC2'],
    note: '실제 운영 중',
  },
  // 추후 프로젝트를 여기에 추가
];