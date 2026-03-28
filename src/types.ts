export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isBestseller?: boolean;
}

export interface Deal {
  id: string;
  title: string;
  includes: string[];
  price: number;
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
}
