export type Project = {
  key: string;
  type: "video" | "component" | "all";
  category: "work" | "side";
  title: string;
  author: string;
  description: string;
  poster: string;
  year: string;
  path: string;
  embed?: string;
  disabled?: boolean;
};
