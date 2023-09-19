type Card = 'vertical' | 'horizontal'

export interface IConfig {
  cardType: Card;
  changeImagePosition?: boolean;
  hasBtn?: boolean;
  bgColor?: string;
  categoriesStyle?: string;
}

export const CARD_DEFAULT_STYLE_CONFIG: { [key: number]: IConfig } = {
  0: { cardType: 'vertical', bgColor: 'grey30' },
  1: { cardType: 'vertical', bgColor: 'grey30' },
  2: { cardType: 'vertical', bgColor: 'grey30' },
};

export const CARD_STYLE_COLOR_CONFIG: { [key: number]: IConfig } = {
  0: { cardType: 'vertical', bgColor: 'yellow1000', categoriesStyle: 'color' },
  1: { cardType: 'vertical', bgColor: 'paleGreen', categoriesStyle: 'color' },
  2: { cardType: 'vertical', bgColor: 'blue400', categoriesStyle: 'color' },
};

export const CARD_SUBSCRIBE_CONFIG: IConfig = {
  cardType: 'horizontal',
  changeImagePosition: true,
  hasBtn: true,
  bgColor: 'blue1000',
};

export const BLOG_CARD_CONFIG: IConfig = {
  cardType: 'horizontal',
  bgColor: 'lightBlue',
  categoriesStyle: 'color',
};

export const BLOG_CARD_DEFAULT_CONFIG: IConfig = {
  cardType: 'horizontal',
};

export const BLOG_CARD_BLACK_CONFIG: IConfig = {
  cardType: 'horizontal',
  bgColor: 'black',
  categoriesStyle: 'light',
};