import { BlogData } from '@/components/Blog/types';
import { IConfig } from '@/app/config';

export interface BlogCardProps {
  data: BlogData;
  configuration: IConfig;
}