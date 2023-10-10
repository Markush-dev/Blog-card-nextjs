type Card = "vertical" | "horizontal";
type CategoriesStyle = "whiteCard" | "grayCard" | "colorCard" | "blackCard";
type Colors =
  | "bg-grey-30"
  | "bg-yellow-1000"
  | "bg-green-paleGreen"
  | "bg-blue-400"
  | "bg-blue-lightBlue"
  | "bg-blue-1000"
  | "bg-black";
export interface IConfig {
  cardType: Card;
  changeImagePosition?: boolean;
  hasBtn?: boolean;
  btnName?: string;
  bgColor?: Colors;
  categoriesStyle?: CategoriesStyle;
  margin?: string;
  fontSizeTitle?: string;
  configWidth?: string;
  splitText?: boolean;
  cardShadow?: boolean;
}

export const CARD_DEFAULT_STYLE_CONFIG: IConfig = {
  cardType: "vertical",
  bgColor: "bg-grey-30",
  categoriesStyle: "grayCard",
};

export const CARD_STYLE_COLOR_CONFIG: IConfig[] = [
  {
    cardType: "vertical",
    bgColor: "bg-yellow-1000",
    categoriesStyle: "colorCard",
  },
  {
    cardType: "vertical",
    bgColor: "bg-green-paleGreen",
    categoriesStyle: "colorCard",
  },
  {
    cardType: "vertical",
    bgColor: "bg-blue-400",
    categoriesStyle: "colorCard",
  },
];

export const CARD_SUBSCRIBE_CONFIG: IConfig = {
  cardType: "horizontal",
  changeImagePosition: true,
  hasBtn: true,
  btnName: "Subscribe",
  bgColor: "bg-blue-1000",
  fontSizeTitle: "text-2xl",
  margin: "md:mr-8",
};

export const BLOG_CARD_CONFIG: IConfig = {
  cardType: "horizontal",
  bgColor: "bg-blue-lightBlue",
  categoriesStyle: "colorCard",
};

export const BLOG_CARD_DEFAULT_CONFIG: IConfig = {
  cardType: "horizontal",
  categoriesStyle: "whiteCard",
  cardShadow: true,
};

export const BLOG_CARD_BLACK_CONFIG: IConfig = {
  cardType: "horizontal",
  bgColor: "bg-black",
  categoriesStyle: "blackCard",
};

export const CARD_REVIEW_CONFIG: IConfig = {
  cardType: "horizontal",
  bgColor: "bg-blue-1000",
  margin: "md:ml-10",
};

export const CARD_HELP_BUSINESS_CONFIG: IConfig = {
  cardType: "horizontal",
  changeImagePosition: true,
  hasBtn: true,
  btnName: "Leave your details",
  bgColor: "bg-blue-1000",
  fontSizeTitle: "text-2xl",
  margin: "md:mr-8",
  splitText: true,
};

export const POST_DEFAULT_CONFIG: IConfig = {
  cardType: "horizontal",
  configWidth: "lg:w-1/2",
  fontSizeTitle: "heading-4xl",
  categoriesStyle: "whiteCard",
  cardShadow: true,
};
