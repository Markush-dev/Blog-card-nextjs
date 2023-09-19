import Image from 'next/image';
import { FC } from 'react';

interface ImageGridProps {
  imagePaths: string[];
}

const ImageGridGallery: FC<ImageGridProps> = ({ imagePaths }) => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-12'>
      {imagePaths.map((path, index) => (
        <div key={index}>
          <Image
            className='rounded-2xl'
            src={path}
            alt={`image-${index}`}
            width={270}
            height={200}
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGridGallery;
