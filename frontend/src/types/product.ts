export interface Product {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
  badge?: string;
  specs?: string[];
}

export interface ProductFilter {
  category?: string;
  searchQuery?: string;
}
