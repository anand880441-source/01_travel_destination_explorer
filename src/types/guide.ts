export interface Guide {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  readTime: string;

  introduction: string;

  tips: string[];

  checklist: string[];

  sections: {
    title: string;
    content: string;
  }[];
}