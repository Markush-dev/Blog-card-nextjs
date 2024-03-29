import Image from "next/image";
import React from "react";

const BusinessOwnersViews = () => {
  return (
    <div className="flex-center flex-col w-full bg-[#E3F9FC] mt-16 py-12">
      <p className="mb-6 max-w-content px-4 md:px-0">
        Similarly, Matt Bisaro from The Floral Craftsman in Mosman doesn’t think
        the inflated supply costs were warranted. “It’s increased 10 fold since
        Covid. I put it down to corruption… Obviously the cost of freight
        increased, but my belief is that once someone realises that they can get
        more for it… they’ll just keep it the same.” 1400 kilometres away in
        Victor Harbor, Kirsten Pitman, owner of two restaurants and Deputy Chair
        of the local chamber of commerce shares the same opinion “part of me
        wonders whether it's a bit of a cash grab”.
      </p>
      <div className="md:px-20 md:py-6">
        <Image
          className="rounded-2xl w-auto"
          src="/zellerFlorist.png"
          alt="zellerFlorist"
          width={1280}
          height={500}
        />
      </div>
      <div className="md:min-w-content">
        <p className="text-sm text-grey-550 mt-6">
          Matt Bisaro, co-owner of Floral Craftsman, NSW
        </p>
      </div>
    </div>
  );
};

export default BusinessOwnersViews;
