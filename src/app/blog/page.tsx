import React from 'react';
import HorizontalBarChart from '@/components/HorizontalBlogChart';
import BusinessResilienceReport from '@/components/BusinessResilienceReport';
import Image from 'next/image';
import DropDownMenu from '@/components/DropDownMenu';
import CustomTitle from '../../components/CustomTitle';

const options = [
  'What are business owners most concerned about?',
  'Supply Costs',
  'Consumer Spending',
  'Hiring',
  'Finding opportunities in crisis',
];

const BlogPage = () => {
  return (
    <main className='flex flex-col min-h-screen max-w-[1440px] mx-auto items-center'>
      <div className='relative sm:px-20 flex flex-col items-center'>
        <Image
          className='object-cover relative rounded-2xl h-96 mt-80 z-10 md:h-auto md:mt-0 md:z-0'
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
          <CustomTitle
            text='Connecting the dots: inflation, interest rates and labour shortages'
            color='blue1000'
            classes='mt-6 max-w-[700px]'
          />
        </div>


      </div>
    </main>

  );
};

export default BlogPage;