import { products } from "../data/products";

export const getRandomProduct = () => {
  const randomProducts = [...products].sort(() => 0.5 - Math.random());
  return randomProducts.slice(0, 9);
};
