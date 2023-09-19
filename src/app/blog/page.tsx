import React from 'react';
import HorizontalBarChart from '@/components/HorizontalBlogChart/HorizontalBarChart';
import BusinessResilienceReport from '@/components/BusinessResilienceReport/BusinessResilienceReport';
import Image from 'next/image';
import ReportsTitle from '@/components/ReportsTitle';
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';

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
      <div className='relative sm:px-20'>
        <div className='rounded-2xl overflow-hidden'>
          <Image className='object-cover h-96 md:h-auto' src='/billsFarm.png' alt='billsFarm' width={1280} height={500} />
        </div>
        <BusinessResilienceReport />
        <div className='flex flex-col justify-center items-center pl-8 pr-6 mt-4 gap-x-16 md:items-start md:pr-0 md:flex-row'>
          <div>
            <ReportsTitle
              text='As a small business owner in 2023, you wouldn’t be mistaken for thinking the economic outlook was bleak, but adversity breeds opportunity.'
              color='blue1000'
            />
            <p className='text-lg'>From supply chain disruptions and skills shortages fuelled by the COVID19 pandemic to
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

        <HorizontalBarChart />
      </div>
    </main>

  );
};

export default BlogPage;