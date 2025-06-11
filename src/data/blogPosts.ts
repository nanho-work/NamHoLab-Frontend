// src/data/blogPosts.ts
export const blogPosts = [
  {
    slug: 'web-project-guide',
    title: '웹사이트 프로젝트, 이렇게 진행됩니다',
    date: '2024-12-01',
    summary: 'NamHoLab에서 실제 웹 프로젝트가 어떻게 진행되는지 알려드립니다.',
    content: `
## 프로젝트 단계별 가이드

1. **기획** – 고객 니즈 분석, 요구사항 정의서 작성  
2. **설계** – 와이어프레임 제작, 기술 구조 설계  
3. **구현** – Next.js / FastAPI 기반의 개발 및 배포  

> 빠르게 시작하고, 명확하게 마무리합니다.
    `,
  },
  {
    slug: 'automation-with-python',
    title: '파이썬으로 업무 자동화하기',
    date: '2025-01-15',
    summary: '크롤링, 이메일 발송, 보고서 생성까지! 파이썬 자동화 사례를 소개합니다.',
    content: `
## 자동화, 왜 필요한가요?

- 반복 작업을 줄이고 효율을 높입니다.
- 오류를 줄이고 일관성을 확보할 수 있습니다.

### 예시 코드 (메일 자동화)

\`\`\`python
import smtplib

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login("you@example.com", "password")
server.sendmail("you@example.com", "target@example.com", "자동화 메일 발송 테스트입니다.")
server.quit()
\`\`\`
    `,
  },
];