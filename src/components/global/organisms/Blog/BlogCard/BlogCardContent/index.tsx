import React, { FC } from "react";

interface IPropsContent {
  content: string;
  title: string;
  splitText?: boolean;
  fontSizeTitle?: string;
}

const BlogCardContent: FC<IPropsContent> = ({
  content,
  title,
  splitText,
  fontSizeTitle,
}) => {
  return (
    <>
      <h2 className={`${fontSizeTitle || "heading-xl"} font-semibold`}>
        {title}
      </h2>
      {splitText ? (
        <div>
          <p>{content.split(".")[0]}.</p>
          <p>{content.split(".")[1]}.</p>
        </div>
      ) : (
        <p>{content}</p>
      )}
    </>
  );
};

export default BlogCardContent;
