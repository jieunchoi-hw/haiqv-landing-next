# HAIQV 랜딩페이지

이 프로젝트는 HAIQV 서비스 소개를 위한 Next.js와 Tailwind CSS 기반의 반응형 랜딩 페이지입니다.

## 주요 기능

- Next.js App Router + TypeScript
- Tailwind CSS 스타일링
- Framer Motion 애니메이션
- next/image 이미지 최적화
- React Icons 아이콘 사용
- 모듈형 컴포넌트 구조

## 시작하기

### 준비물

- Node.js 18 이상
- npm 8 이상

### 설치 및 실행

```bash
npm install
npm run dev
```

브라우저에서 [localhost:3000](http://localhost:3000) 접속

## 커스터마이징

- 색상: `src/app/globals.css`에서 변경
- 사이트 정보: `src/data/siteDetails.ts`에서 수정
- 콘텐츠: `src/data` 폴더 내 파일에서 관리
- 파비콘: `src/app/favicon.ico` 교체
- 이미지: `public/images` 폴더에 추가

## 라이선스

MIT License
