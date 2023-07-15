import { products } from "../data/products";

export const getProductByCategory = (category, amount) => {
  const validCategories = [
    "For Babies",
    "For Boys",
    "For Girls",
    "For Home",
    "For Play",
  ];
  if (!validCategories.includes(category)) {
    throw new Error(`${category} is not a valid category`);
  }

  return products
    .filter((product) => product.category === category)
    .slice(0, amount);
};
