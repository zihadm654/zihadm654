export interface ProjectsTypes {
  _id: number;
  createdAt: number;
  img: string;
  title: string;
  description: string;
  time: string;
  client: string;
  repo: string;
  role: string[];
  site: string;
}
export interface BlogTypes {
  title: string;
  cover_img: string;
  description: string;
  slug: string;
  tags: string[];
  created_at: string;
}
