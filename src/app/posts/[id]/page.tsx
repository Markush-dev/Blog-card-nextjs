import { dataCard, dataSubscribe } from '@/app/mockBlogData';
import BlogCard from '@/components/Blog/BlogCard';
import {
  CARD_DEFAULT_STYLE_CONFIG,
  CARD_SUBSCRIBE_CONFIG,
  POST_DEFAULT_CONFIG,
} from '@/app/config';
import Breadcrumb from '@/components/Breadcrumb';
import {
  breadcrumbItemsPostPage,
  breadcrumbItemsPostPageCategory,
  imagesDesktop, imagesMobile,
} from '@/app/mockDataReportPage';
import React, { FC } from 'react';
import Image from 'next/image';
import ImageGridGallery from '@/components/ImageGridGallery';
import CustomTitle from '@/components/CustomTitle';
import BlogCardList from '@/components/Blog/BlogCardList';
import SubscribeCard from '@/components/SubscribeCard';

interface IProps {
  params: {
    id: string;
  };
}

const Page: FC<IProps> = ({ params: { id } }) => {
  const data = dataCard.find(el => el.id === Number(id));
  if (!data) return;
  return (
    <main className='flex flex-col relative min-h-screen max-w-[1440px] mx-auto items-center overflow-hidden'>
      <div className='md:px-20'>
        <Breadcrumb items={breadcrumbItemsPostPage} />
        <div className='mt-4 custom-post-style-text'>
          <BlogCard
            data={data}
            configuration={POST_DEFAULT_CONFIG}
          />
        </div>
      </div>
      <div className='max-w-[276px] max-h-[440px] absolute right-0 hidden md:flex top-[490px]'>
        <SubscribeCard data={dataSubscribe} />
      </div>
      <div className='max-w-[842px] pt-12 flex flex-col gap-y-16 px-8 md:px-0'>
        <div className='flex flex-col text-lg gap-4'>
          <h2 className='text-2xl font-semibold'>As a merchant, you need to be constantly measuring your business
            performance so you know what’s working
            and
            what isn’t. So, how do you measure small business success?</h2>
          <p>Business is unpredictable and ever-evolving. From shopping trends, to the amount of expendable income in
            your customers’ bank accounts, to the way they pay — the only thing you can count on is that change is
            continuous.</p>
          <p>You’d be forgiven for thinking profit is the most important yardstick for commercial triumph. After all,
            positive financial performance is a good indicator that something is going right. However, it’s not the only
            definition of success.</p>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[32px] font-semibold '>Signs your small business is more successful than you think</h1>
          <h3 className='text-2xl font-semibold'>The good news</h3>
          <h4 className='text-[22px] font-semibold'>Tax Deductions</h4>
          <p>You’d be forgiven for thinking profit is the most important yardstick for commercial triumph. After all,
            positive financial performance is a good indicator that something is going right. However, it’s not the only
            definition of success.</p>
          <h4 className='text-[22px] font-semibold'>Loyalty programs</h4>
          <p>While the net worth of your business is important, success means different things to different business
            owners. And, although the bottom line will be critical when there’s investors involved, it’s not the be-all
            and end-all for small business owners — especially those just getting their business off the ground.</p>
          <h5 className='text-lg font-semibold'>In-store</h5>
          <p>Business is unpredictable and ever-evolving. From shopping trends, to the amount of expendable income in
            your customers’ bank accounts, to the way they pay — the only thing you can count on is that change is
            continuous.</p>
          <h5 className='text-lg font-semibold'>Online</h5>
          <p>Business is unpredictable and ever-evolving. From shopping trends, to the amount of expendable income in
            your customers’ bank accounts, to the way they pay — the only thing you can count on is that change is
            continuous.</p>
          <h3 className='text-2xl font-semibold'>The great news</h3>
          <h4 className='text-[22px] font-semibold'>You probably haven’t got all the info you need</h4>
          <p>While the net worth of your business is important, success means different things to different business
            owners. And, although the bottom line will be critical when there’s investors involved, it’s not the be-all
            and end-all for small business owners — especially those just getting their business off the ground.</p>
          <h6 className='font-semibold'>Your small business really is much more successful than you think</h6>
          <p className='font-semibold text-sm'>Less impressive but still worth considering</p>
          <p>You’d be forgiven for thinking profit is the most important yardstick for commercial triumph. After all,
            positive financial performance is a good indicator that something is going right. However, it’s not the only
            definition of success.</p>
          <p>While the net worth of your business is important, success means different things to different business
            owners. And, although the bottom line will be critical when there’s investors involved, it’s not the be-all
            and end-all for small business owners — especially those just getting their business off the ground.</p>
          <p className='font-semibold text-sm'>Also worth knowing</p>
          <div>When determining the success of your business, other important questions to ask yourself include:
            <ul className='p-4 list-disc list-inside'>
              <li>Does it empower you with a healthy work-life balance?</li>
              <li>Is your business having a positive impact on society?</li>
              <li>Are you following a passion?</li>
              <li>Do you have a growing, loyal customer base?</li>
            </ul>
            <p>While success takes different forms for different businesses, there tends to be a common thread that ties
              the most successful ones together, regardless of industry: people. As an infinitely valuable resource,
              it’s
              no surprise that businesses are beginning to measure success in terms of employee happiness, something
              that
              in turn influences your business’ reputation and helps attract more talent.</p>
          </div>
        </div>
        <div className='hidden sm:inline'>
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
        <div className='md:hidden'>
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
        <div>
          <h1 className='text-[32px] font-semibold tracking-tighter'>How to define business success for your small
            business</h1>
          <div className='flex flex-col gap-3 pt-5'>
            <p>Success means different things to different business owners. Take clothing designers, for instance.
              Starting a new trend, or seeing your pieces on people of influence, would be considered success. For
              restaurateurs, an indication of success could be having dining rooms booked out weeks in advance — or
              glowing write-ups in Gourmet Traveller.</p>
            Broadly, success can be measured in one of three ways:
            <ul className='px-4 list-decimal list-inside'>
              <li>Business growth</li>
              <li>Profit</li>
              <li>Control</li>
            </ul>
            <p>You need to decide what is most important to you: the growth of your venture, the money it provides you,
              or your ability to keep control of the business and make decisions for yourself.</p>
            <p>As desirable as all three sound — growth, liquidity and control — most successful businesses face a
              choice. Once you know what you’re working towards, it’s time to think about what metrics you’ll use to
              measure it. For example, if liquidity is your measure of success, you’ll need to define a benchmark for
              how much cash you want to generate — whereas comparing debt earnings can show you whether you are at risk
              of losing control to your creditors.</p>
            <p>Regardless of your what success means to you, it’s something that should be kept front of mind at all
              times to ensure you’re making progress towards your goal.</p>
          </div>
        </div>
        <div className='sm:hidden  text-white -mx-8'>
          <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>What about happiness?</h3>
          <div className='flex flex-col gap-3 pt-5'>
            <p>
              Finding joy in what you do could be perceived as an insubstantial benchmark. After all, how much is
              happiness worth in dollars and cents? But when nearly half of all Australian workers on average are
              unhappy in their jobs, finding purpose and pleasure in what you do is priceless.
            </p>
            <p> Being challenged by your work, excited at the prospect and grateful that you have the freedom to spend
              time (and make money) doing what you love makes you rich in job satisfaction. It’s little wonder that
              people work harder when they’re happy. In fact, 81% of business owners report being happier since going
              out on their own. They’re also healthier, more engaged and increasingly satisfied when compared to those
              in traditional jobs.</p>
            <p> Does what you do make you happy? Then you’re already successful.</p>
          </div>
        </div>
        <div className='-mx-[140px] md:hidden'>
          <ImageGridGallery imagePaths={imagesMobile} />
        </div>
        <div className='hidden md:inline'>
          <ImageGridGallery imagePaths={imagesDesktop} />
        </div>
        <div>
          <h1 className='text-[32px] font-semibold '>Key factors that determine business success</h1>
          <p className='mt-5'>Irrespective of which marker of success you choose to pursue, there are four common
            factors that tend to influence whether or not a business is successful.</p>
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>1. People and culture</h3>
          <p className='mt-5'>Effectively managing your people is critical to success.</p>
          <p className='mt-4'>Understanding the importance of financial reward, as well as their need for purpose and
            job satisfaction, is crucial to retaining talent. If you can find out what motivates them, you’re more
            likely to keep them in your pursuit of small business success.</p>
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>2. Product development</h3>
          <div className='flex flex-col gap-4 mt-5'>
            <p>Whatever you sell, you need to keep abreast of changing consumer needs and behaviours in the marketplace.
              In many cases, it’s not enough to sell the same product or service year after year.</p>
            <p> Take the growing trend of conscious consumerism, for example. Customers now expect you to incorporate
              sustainable practices, procurement methods and processes into your business. In fact, studies show 9 in 10
              Australian consumers are more likely to opt for the sustainable or ethical alternative.
            </p>
            <p>If you don’t adapt, you risk losing them to a competitor.</p>
          </div>
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>3. Cash flow</h3>
          <div className='flex flex-col gap-4 mt-5'>
            <p>Proper cash flow management is critical to the success of your business. Unfortunately, many merchants
              struggle with cash flow issues that affect not only business growth, but even day-to-day operations.
            </p>
            <p>Managing your business in a way that ensures you have enough cash on hand to pay the bills, pay yourself
              and
              invest in strategies to grow your business is key. Put simply, learning to control your money is an
              investment in not just your business’ success — but your business’ survival.
            </p>
            <p>Need some help? Read our article about How to Create a Simple Cash Flow Budget.
            </p>
          </div>
        </div>
        <CustomTitle
          title='Pull-out Quote (not blockquote) Arcu, egestas facilisis lacus, justo, tellus venenatis volutpat. Suspendisse sapien metus, dignissim gravida rhoncus, eget.'
          color='blue1000'
          classes='md:text-[40px] text-4xl leading-[48px] tracking-[-0.8px]'
        />
        <div>
          <h3 className='text-2xl font-semibold'>4. Customer loyalty</h3>
          <p className='mt-5'>In any industry, customer loyalty is a key factor of success. Happy customers are your
            best form of marketing. So, make the customer experience a priority.</p>
          <p className='mt-4'>Brainstorm new ways to keep them interested in your brand and in your products. After all,
            it’s cheaper to retain an existing customer (who already knows and loves your products or services)
            than acquire a new one.</p>
        </div>
        <div className='border-x-2 border-[#0071CE]'>
          <p className='px-4'>THIS IS A BLOCK QUOTE Nec turpis consequat nec pellentesque varius mattis. Dis urna ornare
            lacus, augue
            ridiculus. Commodo vestibulum congue diam, neque ultricies. Egestas felis blandit nulla commodo pharetra ut.
            Phasellus pellentesque nulla leo sit leo sagittis tristique mauris. Pretium tortor mattis diam platea justo.
            Eu sed eu, pretium mauris facilisis nisi, semper ultricies. Sed quis vitae ut tincidunt viverra. Elementum
            mi
            morbi enim tincidunt pharetra maecenas a mauris. Id nibh dolor sit consectetur non sit quam nunc. Magna sit
            dolor, vestibulum tincidunt tristique dapibus turpis arcu.</p>
        </div>
        <div>
          <h1 className='text-[32px] font-semibold '>If you can’t measure it, you can’t improve it</h1>
          <div className='flex flex-col gap-4 mt-5'>
            <p> Suffice to say, success is extremely subjective. For some, it’s as simple as profit. For others, it’s
              more about the deep-routed job satisfaction derived from following a passion.
            </p>
            <p> There’s no blanket benchmark for success. However, every merchant should define what success means for
              their business so progress can be made towards it.
            </p>
            <p> Now that you know the different measures for small business success, it’s time to get busy. Sign up to
              our Business Blog to cash in on valuable insights to help grow your business.
            </p>
          </div>
        </div>
      </div>
      <div className='md:px-20 md:mt-20'>
        <Breadcrumb items={breadcrumbItemsPostPageCategory} />
        <div className='flex flex-col gap-8 mt-4'>
          <BlogCardList data={dataCard.slice(1)} configuration={Object.values(CARD_DEFAULT_STYLE_CONFIG)} />
        </div>
      </div>
    </main>

  );
};

export default Page;
