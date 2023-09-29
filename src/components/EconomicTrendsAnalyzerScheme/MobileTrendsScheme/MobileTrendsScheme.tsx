import NextArrow from '@/icons/ArrowForScheme/NextArrow';
import BetweenArrow from '@/icons/ArrowForScheme/BetweenArrow';
import LastSchemeArrow from '@/icons/ArrowForScheme/LastSchemeArrow';
import MobileTrendBox from '@/components/EconomicTrendsAnalyzerScheme/EconomicTrendsBox/MobileTrendsBox';

const MobileTrendsScheme = () => {
  return (
    <div className='w-full xl:hidden max-w-content flex flex-col items-center bg-[#E3F9FC] pt-8 px-4 mt-6 mb-12'>
      <div className='flex gap-4 text-center'>
        <div className='flex flex-col items-center gap-10'>
          <MobileTrendBox  text='People with more money' textColor='blue1000'/>
          <NextArrow classes='rotate-90 mb-10'/>
        </div>
        <div className='flex flex-col items-center gap-10'>
          <MobileTrendBox text='Labour shortages' textColor='blue1000' />
          <NextArrow classes='rotate-90 mb-10'/>
        </div>
      </div>
      <div className='flex gap-4 text-center'>
        <MobileTrendBox text='More demand' textColor='blue1000' />
        <MobileTrendBox text='Less supply' textColor='blue1000' />
      </div>
      <BetweenArrow classes='rotate-90 -mt-10'/>
      <div className='flex gap-4 text-center -mt-10'>
        <div className='flex flex-col items-center gap-10'>
          <MobileTrendBox text='Less consumer spending' textColor='blue1000' bgColor='bg-[#75DFF0]' />
          <NextArrow classes='rotate-270 mb-10'/>
        </div>
        <div className='flex flex-col items-center gap-10'>
          <MobileTrendBox text='Businesses increase prices' textColor='blue1000' />
          <NextArrow classes='rotate-90 mb-10'/>
        </div>

      </div>
      <div className='flex gap-4 text-center'>
        <MobileTrendBox text='More demand' textColor='blue1000' />
        <MobileTrendBox text='Less supply' textColor='blue1000' />
      </div>
      <LastSchemeArrow classes='rotate-90 -mt-14'/>
    </div>
  );
};

export default MobileTrendsScheme;

