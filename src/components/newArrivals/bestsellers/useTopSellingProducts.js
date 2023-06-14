import { getTopSellingProducts } from "../../../helpers/getTopSellingProducts";

export const useTopSellingProducts = (limit) => {
    const products = getTopSellingProducts(limit);
    return products;
  };
  