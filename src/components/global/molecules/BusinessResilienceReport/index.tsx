import React from "react";
import CustomBtn from "@/components/global/atoms/CustomBtn";

const BusinessResilienceReport = () => {
  return (
    <div className="flex flex-col p-4 gap-2 bg-aqua w-[375px] md:w-[400px] lg:w-[360px] rounded-2xl absolute lg:top-4 lg:left-24 ">
      <h2 className="heading-3xl">
        Zeller Small Business Resilience Report: Economic Trends & How to Curb
        the Crunch
      </h2>
      <p className="font-semibold text-white text-lg">
        A Small Business Owner’s Survival Guide to 2023
      </p>
      <CustomBtn name="Start" hasImage classes="bg-black " />
    </div>
  );
};

export default BusinessResilienceReport;
