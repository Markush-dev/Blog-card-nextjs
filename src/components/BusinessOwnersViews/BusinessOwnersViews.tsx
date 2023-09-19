import Image from 'next/image';
import React from 'react';

const BusinessOwnersViews = () => {
  return (
    <div className='w-full bg-[#E3F9FC]'>
      <p className='mt-12 max-w-[842px]'>Similarly, Matt Bisaro from The Floral Craftsman in Mosman doesn’t think the inflated supply costs were
        warranted. “It’s increased 10 fold since Covid. I put it down to corruption… Obviously the cost of freight
        increased, but my belief is that once someone realises that they can get more for it… they’ll just keep it the
        same.” 1400 kilometres away in Victor Harbor, Kirsten Pitman, owner of two restaurants and Deputy Chair of the
        local chamber of commerce shares the same opinion “part of me wonders whether it's a bit of a cash grab”.</p>
      <Image
        className='object-cover relative rounded-2xl h-96 mt-80 z-10 md:h-auto md:mt-0 md:z-0'
        src='/billsFarm.png'
        alt='billsFarm'
        width={1280}
        height={500}
        priority={true}
      />
    </div>
  );
};

export default BusinessOwnersViews;
