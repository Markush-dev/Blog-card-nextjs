import CustomTitle from '@/components/CustomTitle';
import React, { FC } from 'react';

interface IProps {
  title: string;
  text?: string;
}

const mockText = 'After two years of stimulus packages handed out by governments in a bid to boost the economy coupled with factory closures and supply chain issues, people had more money to spend, but less available supply. It created the perfect storm for inflation. In addition, continued labour shortages have caused workers to put pressure on employers to increase wages. Higher wages mean higher costs for businesses which forces them to put their prices up, therefore exacerbating inflation.\n' +
  'On top of all of this, when Russia invaded Ukraine in 2022, Russian supplies of gas, oil and other raw materials such as wheat were interrupted and internationally shunned. Countries decided to diversify their supplies in order to become independent from Russia and so as not to indirectly fund the war. In the case of energy, this meant electricity and fuel prices increased, which in turn increased the price of transporting and producing raw materials, adding further inflationary pressure.  \n' +
  'This combination of different factors has pushed businesses to all put up their prices at the same time, and this net increase in price is the crux of inflation.';

const ThematicBlock: FC<IProps> = ({ title, text }) => {
  const formattedText = text || mockText.replace(/\n/g, '<br /><br />');
  return (
    <div className='max-w-[842px] px-8 md:p-0'>
      <CustomTitle
        title={title}
        color='blue1000'
        classes='md:mt-12 mt-8 md:text-[32px]'
      />
      <p className='mt-4' dangerouslySetInnerHTML={{ __html: formattedText }} />
    </div>
  );
};

export default ThematicBlock;
