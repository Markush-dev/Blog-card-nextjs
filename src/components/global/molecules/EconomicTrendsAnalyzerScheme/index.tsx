import EconomicTrendsBox from "@/components/global/atoms/EconomicTrendsBox";
import NextArrow from "@/components/icons/ArrowForScheme/next-arrow";
import BetweenArrow from "@/components/icons/ArrowForScheme/between-arrow";
import LastSchemeArrow from "@/components/icons/ArrowForScheme/last-scheme-arrow";

const EconomicTrendsAnalyzerScheme = () => {
  return (
    <div className="w-full gap-2 2xl:gap-12 hidden xl:flex justify-between items-center bg-[#E3F9FC] py-16 px-12 mt-6 mb-12">
      <div className="flex flex-col gap-12">
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox text="Labour shortages" />
          <NextArrow />
          <EconomicTrendsBox text="Less supply" />
        </div>
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox text="People with more money" />
          <NextArrow />
          <EconomicTrendsBox text="More demand" />
        </div>
      </div>
      <BetweenArrow />
      <div className="flex flex-col gap-12">
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox text="Businesses increase prices" />
          <NextArrow />
          <EconomicTrendsBox text="Inflation" />
        </div>
        <div className="flex gap-5 items-center">
          <EconomicTrendsBox text="Less consumer spending" bgColor="bg-aqua" />
          <NextArrow className="rotate-180" />
          <EconomicTrendsBox text="Higher interest rates" />
        </div>
      </div>
      <LastSchemeArrow />
    </div>
  );
};

export default EconomicTrendsAnalyzerScheme;
