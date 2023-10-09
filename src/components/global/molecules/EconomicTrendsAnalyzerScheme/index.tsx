import EconomicTrendsBox from "@/components/global/atoms/EconomicTrendsBox";
import NextArrow from "@/components/icons/ArrowForScheme/next-arrow";
import BetweenArrow from "@/components/icons/ArrowForScheme/between-arrow";
import LastSchemeArrow from "@/components/icons/ArrowForScheme/last-scheme-arrow";

const EconomicTrendsAnalyzerScheme = () => {
  return (
    <div className="w-full gap-2 2xl:gap-12 hidden xl:flex justify-between items-center bg-[#E3F9FC] py-16 px-12 mt-6 mb-12">
      <div className="flex flex-col gap-12">
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox text="Labour shortages" textColor="blue1000" />
          <NextArrow />
          <EconomicTrendsBox text="Less supply" textColor="blue1000" />
        </div>
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox
            text="People with more money"
            textColor="blue1000"
          />
          <NextArrow />
          <EconomicTrendsBox text="More demand" textColor="blue1000" />
        </div>
      </div>
      <BetweenArrow />
      <div className="flex flex-col gap-12">
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox
            text="Businesses increase prices"
            textColor="blue1000"
          />
          <NextArrow />
          <EconomicTrendsBox text="Inflation" textColor="blue1000" />
        </div>
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox
            text="Less consumer spending"
            textColor="blue1000"
            bgColor="bg-[#75DFF0]"
          />
          <NextArrow className="rotate-180" />
          <EconomicTrendsBox
            text="Higher interest rates"
            textColor="blue1000"
          />
        </div>
      </div>
      <LastSchemeArrow />
    </div>
  );
};

export default EconomicTrendsAnalyzerScheme;