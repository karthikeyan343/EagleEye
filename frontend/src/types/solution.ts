export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  bgColor: string;
  capabilities: string[];
}

export type SolutionItem = ServiceItem;
