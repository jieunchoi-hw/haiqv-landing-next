import BenefitSection from "./BenefitSection";

import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <div id="features" className="px-5">
      <h2 className="text-center text-gray-400 font-bold text-lg my-12">
        Features
      </h2>

      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
