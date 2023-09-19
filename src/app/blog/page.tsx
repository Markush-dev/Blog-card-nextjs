import React from 'react';
import HorizontalBarChart from '@/components/HorizontalBlogChart';
import BusinessResilienceReport from '@/components/BusinessResilienceReport';
import Image from 'next/image';
import DropDownMenu from '@/components/DropDownMenu';
import CustomTitle from '../../components/CustomTitle';
import EconomicTrendsAnalyzerScheme from '@/components/EconomicTrendsAnalyzerScheme';
import EconomicInflationInfo from '@/components/EconomicTrendsAnalyzerScheme/EconomicInflationInfo';
import ImageGridGallery from '@/components/ImageGridGallery';
import BusinessOwnersViews from '@/components/BusinessOwnersViews';

const options = [
  'What are business owners most concerned about?',
  'Supply Costs',
  'Consumer Spending',
  'Hiring',
  'Finding opportunities in crisis',
];
const images = [
  '/shopping.png',
  '/shopping.png',
  '/shopping.png',
  '/shopping.png',
  '/shopping.png',
  '/shopping.png',
];

const BlogPage = () => {
  return (
    <main className='flex flex-col min-h-screen max-w-[1440px] mx-auto items-center'>
      <div className='relative sm:px-20 flex flex-col items-center'>
        <Image
          className='object-cover relative rounded-2xl h-96 mt-80 z-10 md:h-full md:mt-0 md:z-0'
          src='/billsFarm.png'
          alt='billsFarm'
          width={1280}
          height={500}
          priority={true}
        />
        <BusinessResilienceReport />
        <div className='flex flex-col justify-center items-center pl-8 pr-6 mt-4 gap-x-16 md:items-start md:pr-0 md:flex-row'>
          <div>
            <CustomTitle
              text='As a small business owner in 2023, you wouldn’t be mistaken for thinking the economic outlook was bleak, but adversity breeds opportunity.'
              color='blue1000'
            />
            <p className='text-lg mt-6 mb-8'>From supply chain disruptions and skills shortages fuelled by the COVID19
              pandemic to
              skyrocketing
              electricity bills caused by the war in Ukraine, produce shortages from worsening natural disasters and a
              cost
              of living crisis that is seeing consumers tighten their belts: the global business landscape is more
              complex
              than ever. In 2023, small businesses are having to perform a balancing act between affording soaring
              material
              costs, finding staff in a changing labour landscape and serving customers with diminishing spending
              capacity.
              Zeller surveyed over 600 Australian business owners, and spoke in depth with some of those in the
              hospitality,
              floral, and retail sectors to understand exactly what their concerns are and what they’re doing to
              overcome
              the challenges. The Zeller Resilience Report presents and gives context to the most common pain points,
              dispels any misconceptions and provides you with a tangible list of solutions and opportunities, so you
              can
              turn 2023 into a catalyst for growth.</p>
          </div>
          <DropDownMenu options={options} />
        </div>
        <div className='w-full hidden md:flex flex-col items-center'>
          <CustomTitle
            text='What are business owners most concerned about?'
            color='blue1000'
            classes='mt-6 md:text-[40px] text-4xl max-w-2xl'
          />
          <HorizontalBarChart />
          <p className='mt-6 max-w-[800px] ml-20'>Zeller data shows that the three most concerning areas for small
            business owners today are the
            increasing cost of supplies, reduced consumer spending, and continuing challenges in finding and retaining
            staff. Before we explore how to mitigate the effects of these for small businesses, it’s important to
            understand
            the interplay between all three.</p>
        </div>
      </div>
      <div className='w-full hidden md:flex flex-col justify-center items-center'>
        <CustomTitle
          text='Connecting the dots: inflation, interest rates and labour shortages'
          color='blue1000'
          classes='mt-6 max-w-[700px]'
        />
        <EconomicTrendsAnalyzerScheme />
        <EconomicInflationInfo />
        <p className='mt-12 max-w-[842px]'>As you can see from the graph, inflation reached its highest point at the end
          of 2022, when the inflation rate reached 7.8% — the highest it had been in three decades. At the time of
          writing, the inflation rate has dropped slightly to 7%. What this means is that on average the price of goods
          and services is 7% higher than this time last year. This doesn’t necessarily mean that everything has become
          7% more expensive, it simply reflects the average change in prices across a broad basket of goods and
          services.</p>
        <div>
          <Image
            className='rounded-2xl mt-12'
            src='/inflation.png'
            alt='inflation'
            width={842}
            height={543}
            priority={true}
          />
          <p className='text-sm text-[#6D7274] max-w-md mt-6'>Purus morbi egestas odio egestas ac id leo egestas purus,
            lorem dui dignissim vel condimentum molestie
            sagittis nulla ipsum sit ac nunc.</p>
        </div>
      </div>
      <div className='max-w-[842px] px-8 md:p-0'>
        <CustomTitle
          text='Why is inflation so high?'
          color='blue1000'
          classes='md:mt-12 mt-8'
        />
        <p className='mt-4'>After two years of stimulus packages handed out by governments in a bid to boost the economy
          coupled with
          factory closures and supply chain issues, people had more money to spend, but less available supply. It
          created
          the perfect storm for inflation. In addition, continued labour shortages have caused workers to put pressure
          on
          employers to increase wages. Higher wages mean higher costs for businesses which forces them to put their
          prices
          up, therefore exacerbating inflation.
          On top of all of this, when Russia invaded Ukraine in 2022, Russian supplies of gas, oil and other raw
          materials
          such as wheat were interrupted and internationally shunned. Countries decided to diversify their supplies in
          order to become independent from Russia and so as not to indirectly fund the war. In the case of energy, this
          meant electricity and fuel prices increased, which in turn increased the price of transporting and producing
          raw
          materials, adding further inflationary pressure.
          This combination of different factors has pushed businesses to all put up their prices at the same time, and
          this net increase in price is the crux of inflation.</p>
        <ImageGridGallery imagePaths={images} />
      </div>
      <BusinessOwnersViews />
    </main>
  );
};

export default BlogPage;