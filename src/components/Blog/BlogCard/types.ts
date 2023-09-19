import { BlogData } from '@/components/Blog/types';
import { IConfig } from '@/app/config';

export interface BlogCardProps {
  data: BlogData;
  // cardType: 'vertical' | 'horizontal';
  // changeImagePosition?: boolean;
  // hasBtn?: boolean;
  // bgColor?: string;
  configuration: IConfig;
}