import Dropdown from "@/components/global/molecules/Dropdown";
import ArrowRightIcon from "@/components/icons/arrow-right";

import Link from "next/link";

const ContentNavigation = () => {
  return (
    <div className="text-blue-600 text-sm mt-4 sm:mt-0 flex gap-6 justify-between">
      <div className="flex-center gap-2">
        <Dropdown />
      </div>
      <div className="flex-center gap-2">
        <Link href="/posts">All Post</Link>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default ContentNavigation;
