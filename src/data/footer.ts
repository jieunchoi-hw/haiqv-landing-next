import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "AI 개발부터 실험·모델 관리·서빙까지 End-to-End MLOps 환경을 제공합니다.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    // {
    //     text: "Pricing",
    //     url: "#pricing"
    // },
    // {
    //     text: "Testimonials",
    //     url: "#testimonials"
    // }
  ],
  email: "haiqv@hanwha.com",
  //   telephone: "+1 (123) 456-7890",
  socials: {},
};
