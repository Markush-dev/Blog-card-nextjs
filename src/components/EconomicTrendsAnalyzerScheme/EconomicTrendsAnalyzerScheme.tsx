import EconomicTrendsBox from '@/components/EconomicTrendsAnalyzerScheme/EconomicTrendsBox';
import NextArrow from '@/icons/ArrowForScheme/NextArrow';
import BetweenArrow from '@/icons/ArrowForScheme/BetweenArrow';
import LastSchemeArrow from '@/icons/ArrowForScheme/LastSchemeArrow';

const EconomicTrendsAnalyzerScheme = () => {
  return (
    <div className='w-full gap-2 2xl:gap-12 hidden xl:flex justify-between items-center bg-[#E3F9FC] py-16 px-12 mt-6 mb-12'>
      <div className='flex flex-col gap-12'>
        <div className='flex gap-5 items-center'>
          <EconomicTrendsBox text='Labour shortages' textColor='blue1000' />
          <NextArrow />
          <EconomicTrendsBox text='Less supply' textColor='blue1000' />
        </div>
        <div className='flex gap-5 items-center'>
          <EconomicTrendsBox text='People with more money' textColor='blue1000' />
          <NextArrow />
          <EconomicTrendsBox text='More demand' textColor='blue1000' />
        </div>
      </div>
      <BetweenArrow />
      <div className='flex flex-col gap-12'>
        <div className='flex gap-5 items-center'>
          <EconomicTrendsBox text='Businesses increase prices' textColor='blue1000' />
          <NextArrow />
          <EconomicTrendsBox text='Inflation' textColor='blue1000' />
        </div>
        <div className='flex gap-5 items-center'>
          <EconomicTrendsBox text='Less consumer spending' textColor='blue1000' bgColor='bg-[#75DFF0]' />
          <NextArrow classes='rotate-180' />
          <EconomicTrendsBox text='Higher interest rates' textColor='blue1000' />
        </div>
      </div>
      <LastSchemeArrow />
    </div>
  );
};

export default EconomicTrendsAnalyzerScheme;

