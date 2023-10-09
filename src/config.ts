type Card = "vertical" | "horizontal";
type CategoriesStyle = "whiteCard" | "grayCard" | "colorCard" | "blackCard";

export interface IConfig {
  cardType: Card;
  changeImagePosition?: boolean;
  hasBtn?: boolean;
  btnName?: string;
  bgColor?: string;
  categoriesStyle?: CategoriesStyle;
  margin?: string;
  fontSizeTitle?: string;
  configWidth?: string;
  splitText?: boolean;
  cardShadow?: boolean;
}

export const CARD_DEFAULT_STYLE_CONFIG: IConfig = {
  cardType: "vertical",
  bgColor: "grey30",
  categoriesStyle: "grayCard",
};

export const CARD_STYLE_COLOR_CONFIG: { [key: number]: IConfig } = {
  0: {
    cardType: "vertical",
    bgColor: "yellow1000",
    categoriesStyle: "colorCard",
  },
  1: {
    cardType: "vertical",
    bgColor: "paleGreen",
    categoriesStyle: "colorCard",
  },
  2: { cardType: "vertical", bgColor: "blue400", categoriesStyle: "colorCard" },
};

export const CARD_SUBSCRIBE_CONFIG: IConfig = {
  cardType: "horizontal",
  changeImagePosition: true,
  hasBtn: true,
  btnName: "Subscribe",
  bgColor: "blue1000",
  fontSizeTitle: "text-2xl",
  margin: "md:mr-8",
};

export const BLOG_CARD_CONFIG: IConfig = {
  cardType: "horizontal",
  bgColor: "lightBlue",
  categoriesStyle: "colorCard",
};

export const BLOG_CARD_DEFAULT_CONFIG: IConfig = {
  cardType: "horizontal",
  categoriesStyle: "whiteCard",
  cardShadow: true,
};

export const BLOG_CARD_BLACK_CONFIG: IConfig = {
  cardType: "horizontal",
  bgColor: "black",
  categoriesStyle: "blackCard",
};

export const CARD_REVIEW_CONFIG: IConfig = {
  cardType: "horizontal",
  bgColor: "blue1000",
  margin: "md:ml-10",
};

export const CARD_HELP_BUSINESS_CONFIG: IConfig = {
  cardType: "horizontal",
  changeImagePosition: true,
  hasBtn: true,
  btnName: "Leave your details",
  bgColor: "blue1000",
  fontSizeTitle: "text-2xl",
  margin: "md:mr-8",
  splitText: true,
};

export const POST_DEFAULT_CONFIG: IConfig = {
  cardType: "horizontal",
  configWidth: "lg:w-1/2",
  fontSizeTitle: "text-[40px]",
  categoriesStyle: "whiteCard",
  cardShadow: true,
};
