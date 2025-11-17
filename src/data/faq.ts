import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `${siteDetails.siteName}은(는) 어떤 환경에서 사용할 수 있나요?`,
    answer: `${siteDetails.siteName}은 웹 브라우저 기반으로 동작하며, 기업 내부망·망분리 환경에서도 안정적으로 사용할 수 있습니다. Kubernetes 기반이라 확장성과 안정성이 뛰어납니다.`,
  },
  {
    question: `GPU 선택이나 자원 관리는 어떻게 이루어지나요?`,
    answer: `Notebook 생성 시 GPU 서버·디바이스를 직접 선택할 수 있으며, 관리자 설정에 따라 유휴 자원 기반 재배치도 가능합니다. CPU·GPU·Memory·Storage 사용량도 실시간 모니터링할 수 있습니다.`,
  },
  {
    question: `실험(Experiment)과 모델 학습 결과는 어떻게 관리되나요?`,
    answer: `Experiment–Run 구조로 실험을 추적하며, 파라미터·데이터셋·학습 로그·산출물(Artifacts)이 자동 기록됩니다. 실험 간 성능 비교, 데이터셋 메타 정보 비교도 UI에서 바로 가능합니다.`,
  },
  {
    question: `외부 스토리지나 사내 데이터와 연동할 수 있나요?`,
    answer: `네. NAS, Object Storage, Data Lake 등 다양한 데이터 소스를 ${siteDetails.siteName}의 Volume과 연동할 수 있습니다. Volume Viewer를 통해 업로드·다운로드·탐색도 쉽게 할 수 있습니다.`,
  },
  {
    question: `학습한 모델을 어떻게 배포하나요?`,
    answer: `중앙 모델 레지스트리에 모델을 등록하면 버전 관리가 가능하며, Triton 기반의 Serving 템플릿으로 REST API 형태의 모델 배포가 가능합니다. 배포된 모델은 Playground에서 즉시 테스트할 수 있습니다.`,
  },
  {
    question: `플랫폼 사용 중 문제가 생기면 어떻게 지원을 받을 수 있나요?`,
    answer: `${siteDetails.siteName} 운영팀을 통해 Workspace 승인, 리소스 사용, 모델 서빙 문제 등 다양한 기술 지원을 받을 수 있습니다. 또한 상세 가이드와 UI 내 도움말도 제공됩니다.`,
  },
];
