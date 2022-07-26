export interface IProduct {
  _id: string;
  name: string;
  image: string;
  images: string[];
  description: string;
  category: string;
  oldPrice: number;
  price: number;
  rating: number;
  stock: number;
  sold: number;
  view: number;
  reviews: any[];
}
