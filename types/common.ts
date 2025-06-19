export type Product = {
  id: string;
  productName: string;
  description: string;
  price: number;
};

export type CartItem = Product & {
  quantity: number;
};