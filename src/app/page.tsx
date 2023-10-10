import BlogCardList from "@/components/global/organisms/Blog/BlogCardList";
import TitleText from "@/components/global/atoms/TitleText";
import BlogCard from "@/components/global/organisms/Blog/BlogCard";

import {
  dataCard,
  dataColorCard,
  dataPartnerHub,
  dataSubscribe,
} from "@/mockBlogData";

import {
  BLOG_CARD_BLACK_CONFIG,
  BLOG_CARD_CONFIG,
  BLOG_CARD_DEFAULT_CONFIG,
  CARD_DEFAULT_STYLE_CONFIG,
  CARD_STYLE_COLOR_CONFIG,
  CARD_SUBSCRIBE_CONFIG,
} from "@/config";
import ContentHeader from "@/components/global/molecules/ContentHeader";

export default function Home() {
  return (
    <>
      <div className="sm:px-20">
        <ContentHeader title="Zeller Business Blog" />
        <div className="flex flex-col items-center gap-4 sm:gap-16 ">
          <BlogCard
            data={dataCard[0]}
            configuration={BLOG_CARD_DEFAULT_CONFIG}
          />
          <BlogCardList
            data={dataCard.slice(1)}
            configuration={CARD_DEFAULT_STYLE_CONFIG}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center sm:mt-16 mt-8 mb-8 sm:px-20 text-white">
        <BlogCard data={dataSubscribe} configuration={CARD_SUBSCRIBE_CONFIG} />
      </div>
      <div className="flex flex-col bg-gray-50 py-10 sm:px-20">
        <TitleText title="Zeller Partner Hub" />
        <div className="flex flex-col items-center gap-4 sm:gap-16">
          <BlogCard data={dataColorCard} configuration={BLOG_CARD_CONFIG} />
          <BlogCardList
            differentColor
            data={dataCard.slice(1)}
            configuration={CARD_STYLE_COLOR_CONFIG}
          />
        </div>
      </div>
      <div className="sm:mt-16 mt-8 mb-8 sm:px-20 text-white">
        <BlogCard
          data={dataPartnerHub}
          configuration={BLOG_CARD_BLACK_CONFIG}
        />
      </div>
    </>
  );
}
