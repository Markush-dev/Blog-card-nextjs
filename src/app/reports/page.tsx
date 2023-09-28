import React from 'react';

import HorizontalBarChart from '@/components/HorizontalBlogChart';
import BusinessResilienceReport from '@/components/BusinessResilienceReport';
import DropDownMenu from '@/components/DropDownMenu';
import CustomTitle from '../../components/CustomTitle';
import EconomicTrendsAnalyzerScheme from '@/components/EconomicTrendsAnalyzerScheme';
import EconomicInflationInfo from '@/components/EconomicTrendsAnalyzerScheme/EconomicInflationInfo';
import ImageGridGallery from '@/components/ImageGridGallery';
import BusinessOwnersViews from '@/components/BusinessOwnersViews';
import ThematicBlock from '@/components/ThematicBlock';
import BlogCard from '@/components/Blog/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import ColorInfoBlock from '@/components/ColorInfoBlock';
import DoughnutBlogChart from '@/components/DoughnutBlogChart';

import Image from 'next/image';

import { dataHelpBusiness, dataReview } from '@/app/mockBlogData';
import { mockDataChart, mockDataHorizontalChart } from '@/app/mockDataChart';
import { breadcrumbItems, imagesDesktop, imagesMobile, options } from '@/app/mockDataReportPage';

import { CARD_HELP_BUSINESS_CONFIG, CARD_REVIEW_CONFIG } from '@/app/config';
import MobileTrendsScheme from '@/components/EconomicTrendsAnalyzerScheme/MobileTrendsScheme';

const BlogPage = () => {
  return (
    <>
      <div className='relative sm:px-20 flex flex-col items-center'>
        <Image
          className='object-cover relative rounded-2xl h-96 mt-72 z-10 lg:h-full lg:mt-0 lg:z-0'
          src='/billsFarm.png'
          alt='billsFarm'
          width={1280}
          height={500}
          priority={true}
        />
        <BusinessResilienceReport />
        <Breadcrumb items={[...breadcrumbItems, { label: 'Zeller Small Business Resilience Report', url: '' }]} />
        <div className='flex flex-col justify-center items-center px-0 md:px-8 mt-4 gap-x-16 md:items-start md:pr-0 xl:flex-row'>
          <ThematicBlock
            title='As a small business owner in 2023, you wouldn’t be mistaken for thinking the economic outlook was bleak, but adversity breeds opportunity.'
            classes='max-w-full px-0'
            titleClasses='md:text-[32px] mt-0'
            element={<p className='text-lg mt-6 mb-8'>From supply chain disruptions and skills shortages fuelled by the
              COVID19
              pandemic to skyrocketing electricity bills caused by the war in Ukraine, produce shortages from worsening
              natural disasters and a cost of living crisis that is seeing consumers tighten their belts: the global
              business landscape is more complex than ever. In 2023, small businesses are having to perform a balancing
              act between affording soaring material costs, finding staff in a changing labour landscape and serving
              customers with diminishing spending capacity.
              <br />
              <br />
              Zeller surveyed over 600 Australian business owners,
              and spoke in depth with some of those in the hospitality, floral, and retail sectors to understand
              exactly what their concerns are and what they’re doing to overcome the challenges. The Zeller Resilience
              Report presents and gives context to the most common pain points, dispels any misconceptions and provides
              you with a tangible list of solutions and opportunities, so you can turn 2023 into a catalyst for growth.
            </p>}
          />
          <DropDownMenu options={options} />
        </div>
        <div id='businessOwners' className='w-full hidden md:flex flex-col items-center'>
          <CustomTitle
            title='What are business owners most concerned about?'
            color='blue1000'
            classes='mt-6 md:text-[40px] text-4xl max-w-2xl'
          />
          <HorizontalBarChart data={mockDataHorizontalChart} />
          <p className='mt-6 max-w-[800px] ml-20'>Zeller data shows that the three most concerning areas for small
            business owners today are the increasing cost of supplies, reduced consumer spending, and continuing
            challenges in finding and retaining staff. Before we explore how to mitigate the effects of these for small
            businesses, it’s important to understand the interplay between all three.
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center px-8 lg:px-0'>
        <CustomTitle
          title='Connecting the dots: inflation, interest rates and labour shortages'
          color='blue1000'
          classes='mt-6 max-w-[700px] md:text-[32px]'
        />
        <EconomicTrendsAnalyzerScheme />
        <MobileTrendsScheme />
        <EconomicInflationInfo />
        <p className='mt-12 max-w-[842px] hidden md:block'>As you can see from the graph, inflation reached its highest
          point at the end
          of 2022, when the inflation rate reached 7.8% — the highest it had been in three decades. At the time of
          writing, the inflation rate has dropped slightly to 7%. What this means is that on average the price of goods
          and services is 7% higher than this time last year. This doesn’t necessarily mean that everything has become
          7% more expensive, it simply reflects the average change in prices across a broad basket of goods and
          services.</p>
      </div>
      <div className='px-8 lg:px-0'>
        <div className='hidden sm:block mt-12'>
          <Image
            className='rounded-2xl'
            src='/inflation.png'
            alt='inflation'
            width={842}
            height={543}
            priority={true}
          />
          <p className='text-sm text-[#6D7274] max-w-md mt-6'>Purus morbi egestas odio egestas ac id leo egestas purus,
            lorem dui dignissim vel condimentum molestie sagittis nulla ipsum sit ac nunc.
          </p>
        </div>
        <div className='sm:hidden mt-12'>
          <Image
            className='rounded-2xl'
            src='/inflation2.png'
            alt='inflation'
            width={842}
            height={543}
            priority={true}
          />
          <p className='text-sm text-[#6D7274] max-w-md mt-6'>Purus morbi egestas odio egestas ac id leo egestas purus,
            lorem dui dignissim vel condimentum molestie sagittis nulla ipsum sit ac nunc.
          </p>
        </div>
      </div>

      <div className='max-w-[842px] overflow-hidden'>
        <ThematicBlock title='Why is inflation so high?' />
        <div className='-mx-[140px] mt-12 sm:hidden'>
          <ImageGridGallery imagePaths={imagesMobile} />
        </div>
        <div className='hidden mt-12 sm:block'>
          <ImageGridGallery imagePaths={imagesDesktop} />
        </div>
      </div>
      <BusinessOwnersViews />
      <ThematicBlock title='Why is inflation so high?' />
      <div className='max-w-[842px] flex flex-col md:flex-row gap-4 mt-12'>
        <DoughnutBlogChart data={mockDataChart[0]} title='Estimated Increase in Business Costs Since 2022' />
        <DoughnutBlogChart data={mockDataChart[1]} title='Business Costs That Have Increased Since 2022' />
      </div>
      <ThematicBlock title='Why is inflation so high?' />
      <div className='text-white mt-12 md:px-20'>
        <BlogCard
          data={dataReview}
          configuration={CARD_REVIEW_CONFIG}
        />
      </div>
      <ThematicBlock title='Why is inflation so high?' />
      <div className='mt-12 md:px-20'>
        <ColorInfoBlock
          classes='py-[72px] px-8'
          title='“If you reinvest in the community, it’s much better for staff, the business and the quality of your product.”'
          text='Malcolm McCullough, Bill’s Farm, Victoria'
          textClasses='text-sm text-[#0071CE] mt-5'
        />
      </div>
      <ThematicBlock title='Why is inflation so high?' />
      <div className='flex gap-2 mt-12 max-w-[842px]'>
        <ColorInfoBlock
          classes='py-5 px-6'
          title='Percentage of respondents looking to cut costs in their business.'
          titleClasses='md:text-2xl md:pr-20 md:leading-7'
        />
        <ColorInfoBlock
          classes='md:px-6 max-w-[283px] flex justify-center items-center'
          title='85%'
          titleClasses='sm:text-[120px] sm:leading-[136px] sm:font-normal text-7xl'
        />
      </div>
      <ThematicBlock title='Why is inflation so high?' />
      <div id='opportunities' className='flex justify-center mt-12 w-full bg-[#E3F9FC]'>
        <ColorInfoBlock
          classes='pt-16 pb-12 px-4 md:px-0 max-w-[842px]'
          title='Finding opportunities in crisis'
          element={<p className='mt-4'>While the hurdles brought about by inflation, rising interest rates and labour
            shortages will
            continue to test a lot of small businesses this year, they will also serve as the impetus to reevaluate your
            business operations for the better. Whether it’s finding new suppliers, promoting staff members or
            overhauling your financial system to better monitor your sales and expenses, 2023 can still be a pivotal
            year for business growth.
            <br /><br />
            At Zeller, we understand the challenges facing small business, which is why we’ve
            worked hard to create a solution. From EFTPOS to invoicing, debit cards and reporting, our financial
            ecosystem has been built to help businesses take payments, make payments, and manage their money — better
            than a bank. The world is changing, and so should the way you do business. </p>}
          textClasses='mt-4'
        />
      </div>
      <ThematicBlock title='Why is inflation so high?' />
      <div className='mt-16 mb-8 sm:px-20 w-full text-white'>
        <BlogCard data={dataHelpBusiness} configuration={CARD_HELP_BUSINESS_CONFIG} />
      </div>
    </>
  );
};

export default BlogPage;