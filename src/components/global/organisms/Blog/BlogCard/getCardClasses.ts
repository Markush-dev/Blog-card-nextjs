export const getArticleClass = (
  changeImagePosition?: boolean,
  styles?: string,
  cardShadow?: boolean,
  bgColor?: string,
) => {
  const baseClassName = "w-full flex cursor-pointer card-minHeight";
  const justifyBetweenClassName = changeImagePosition ? "justify-between" : "";
  const customBlockStylesClassName = styles || "";
  const shadowForCard = cardShadow ? "card-shadow" : "";
  const background = bgColor || "";
  return `${baseClassName} ${justifyBetweenClassName} ${customBlockStylesClassName} ${shadowForCard} ${background}`;
};

export const getContentClass = (
  styles?: string,
  margin?: string,
  configWidth?: string,
) => {
  const baseClassName =
    "flex flex-col justify-center relative w-full overflow-hidden ";
  const customContentStylesClassName = styles || "";
  const marginClassName = margin || "";
  const contentWidthClassName = configWidth || "";
  return `${baseClassName} ${customContentStylesClassName} ${marginClassName} ${contentWidthClassName}`;
};

export const getImageClass = (
  cardType: string,
  isVertical: boolean,
  changeImagePosition?: boolean,
  styles?: string,
  configWidth?: string,
) => {
  const baseClassName = "object-cover w-full";
  const responsiveImageClassName =
    cardType === "horizontal" && !isVertical ? "responsive-image" : "";
  const roundedImageClassName = !changeImagePosition
    ? styles
    : "rounded-b-2xl md:rounded-b-none md:rounded-tr-2xl md:rounded-br-2xl";
  const imageWidth = configWidth || "";
  return `${baseClassName} ${responsiveImageClassName} ${roundedImageClassName} ${imageWidth}`;
};
