import { IConfig } from "@/config";
import { BlogData } from "@/models/blog-component.model";

export interface BlogCardListProps {
  data: BlogData[];
  configuration: Record<number, IConfig> | IConfig;
  differentColor?: boolean;
  pagination?: boolean;
}
