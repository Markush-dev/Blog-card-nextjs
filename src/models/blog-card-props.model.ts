import { IConfig } from "@/config";
import { BlogData } from "@/models/blog-component.model";

export interface BlogCardProps {
  data: BlogData;
  configuration: IConfig;
}
