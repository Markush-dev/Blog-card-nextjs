import CustomTitle from '@/components/CustomTitle';
import React, { FC } from 'react';

interface IProps {
  classes: string;
  title: string;
  titleClasses?: string;
  text?: string;
  textClasses?: string;
}


const ColorInfoBlock: FC<IProps> = ({
  classes, title,
  titleClasses, text, textClasses,
}) => {
  const formattedText = text?.replace(/\n/g, '<br /><br />');

  return (
    <div className={`w-full bg-[#E3F9FC] rounded-2xl ${classes}`}>
      <CustomTitle
        title={title}
        color='blue1000'
        classes={titleClasses}
      />
      {formattedText && (
        <p className={textClasses || ''} dangerouslySetInnerHTML={{ __html: formattedText }} />
      )}
    </div>
  );
};

export default ColorInfoBlock;
