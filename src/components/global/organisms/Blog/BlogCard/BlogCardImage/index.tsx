import { FC } from "react";
import Image from "next/image";

interface IPropsImage {
  imageUrl: string;
  title: string;
  classes: string;
}

const BlogCardImage: FC<IPropsImage> = ({ imageUrl, title, classes }) => {
  return (
    <Image
      className={classes}
      src={imageUrl}
      alt={title}
      width={624}
      height={320}
      priority={true}
    />
  );
};

export default BlogCardImage;
