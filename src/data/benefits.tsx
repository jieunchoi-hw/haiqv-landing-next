import {
  FiCpu,
  FiBox,
  FiUsers,
  FiDatabase,
  FiLayers,
  FiPlayCircle,
  FiServer,
  FiHardDrive,
  FiActivity,
  FiSettings,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "격리된 ML 개발 환경",
    description:
      "Kubernetes 기반 Notebook 실행 환경을 통해 안전하고 독립적인 AI 개발이 가능합니다.",
    bullets: [
      {
        title: "GPU 서버·디바이스 선택",
        description:
          "Notebook 생성 시 GPU 서버와 디바이스를 직접 지정할 수 있습니다.",
        icon: <FiCpu size={26} />,
      },
      {
        title: "Workspace 기반 권한 분리",
        description:
          "사용자·Workspace·리소스 단위로 세밀한 권한 관리가 적용됩니다.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "웹 기반 터미널 지원",
        description:
          "최대 7개 탭을 사용하는 편리한 Notebook Web Terminal을 제공합니다.",
        icon: <FiBox size={26} />,
      },
    ],
    imageSrc: "/images/feature-notebook.mp4",
  },
  {
    title: "실험 추적 및 모델 학습 관찰",
    description:
      "Experiment–Run 단위의 강력한 실험 관리 기능으로 개발 과정을 완전히 투명하게 추적할 수 있습니다.",
    bullets: [
      {
        title: "실험·파라미터 자동 로깅",
        description:
          "Python SDK로 최소한의 코드만 추가해 실험 데이터와 파라미터를 자동 기록합니다.",
        icon: <FiActivity size={26} />,
      },
      {
        title: "실험 간 성능 비교",
        description:
          "여러 Run을 비교하여 모델 성능 변화를 직관적으로 확인할 수 있습니다.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "데이터셋 메타 정보 조회",
        description:
          "실험에 사용된 데이터셋의 메타 정보를 쉽게 비교할 수 있습니다.",
        icon: <FiDatabase size={26} />,
      },
    ],
    imageSrc: "/images/feature-experiment.mp4",
  },
  {
    title: "사용자 및 자원 관리",
    description:
      "기업 규모 운영에 필요한 Workspace 관리, 승인 흐름, GPU 사용 현황 모니터링을 지원합니다.",
    bullets: [
      {
        title: "Workspace 생성 승인",
        description:
          "설정된 Quota를 기반으로 Workspace 요청 및 승인 절차를 제공합니다.",
        icon: <FiSettings size={26} />,
      },
      {
        title: "자원 사용 모니터링",
        description:
          "CPU/GPU/Memory/Storage 사용량을 실시간으로 확인할 수 있습니다.",
        icon: <FiServer size={26} />,
      },
      {
        title: "리포트 Export",
        description:
          "기간별 자원 사용 통계를 보고서 형태로 다운로드할 수 있습니다.",
        icon: <FiActivity size={26} />,
      },
    ],
    imageSrc: "/images/feature-resource.mp4",
  },
  {
    title: "다양한 데이터 소스 연동",
    description:
      "NAS · Object Storage · Data Lake 등 다양한 데이터 저장소와 유연하게 연동하여 데이터 활용도를 높일 수 있습니다.",
    bullets: [
      {
        title: "Volume Viewer",
        description: "웹 기반으로 파일 업로드·다운로드·탐색이 가능합니다.",
        icon: <FiHardDrive size={26} />,
      },
      {
        title: "모델 구조 시각화",
        description: "내장 Netron Viewer로 모델 아키텍처를 확인할 수 있습니다.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "외부 스토리지 연동",
        description:
          "NAS 및 Object Storage 기반의 확장 가능한 데이터 사용 환경을 제공합니다.",
        icon: <FiDatabase size={26} />,
      },
    ],
    imageSrc: "/images/feature-data.mp4",
  },
  {
    title: "중앙집중식 모델 관리",
    description:
      "모델 버전·이력·메타데이터를 일원화하여 관리하고, 외부 모델 Import/Export도 지원합니다.",
    bullets: [
      {
        title: "모델 버전 관리",
        description:
          "학습된 모델을 등록해 버전·패키지·메타데이터를 일관되게 관리합니다.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "외부 모델 Import/Export",
        description:
          "Platform 외부에서 개발된 모델을 업로드하거나 Export할 수 있습니다.",
        icon: <FiBox size={26} />,
      },
      {
        title: "Triton 기반 패키징",
        description:
          "Serving을 위한 Model Configuration 기반 패키지 생성이 가능합니다.",
        icon: <FiSettings size={26} />,
      },
    ],
    imageSrc: "/images/feature-model.mp4",
  },
  {
    title: "쉽고 빠른 모델 서빙",
    description:
      "REST API 기반 모델 Serving을 템플릿으로 자동 생성하고, Playground에서 즉시 테스트할 수 있습니다.",
    bullets: [
      {
        title: "Serving 템플릿 생성",
        description: "모델을 빠르게 Serving 가능한 형태로 자동 패키징합니다.",
        icon: <FiPlayCircle size={26} />,
      },
      {
        title: "Serving 상태 관리",
        description:
          "UI에서 시작·중지·수정 등 서비스 상태를 제어할 수 있습니다.",
        icon: <FiServer size={26} />,
      },
      {
        title: "Playground 테스트",
        description:
          "실행 중인 모델을 API 없이 UI에서 바로 테스트할 수 있습니다.",
        icon: <FiActivity size={26} />,
      },
    ],
    imageSrc: "/images/feature-playground.mp4",
  },
];
