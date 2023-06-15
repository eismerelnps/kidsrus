import { products } from "../data/products";

export const getRandomProduct = ( amount ) => {
  const randomProducts = [...products].sort(() => 0.5 - Math.random());
  return randomProducts.slice(0, amount);
};
