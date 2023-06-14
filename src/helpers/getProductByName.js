import { products } from "../data/products";

export const getProductByName = (name = "") => {
  if (name === "") {
    return [];
  }
  name = name.toLowerCase();

  return products.filter((product) =>
    product.title.toLowerCase().trim().includes(name)
  );
};
