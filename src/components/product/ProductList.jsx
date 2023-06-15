import { useMemo } from "react";
import { ProductCard } from "./ProductCard";

import { getProductByCategory } from "../../helpers/getProductByCategory";

export const ProductList = ({ category, amount, size = "col-xl-4" }) => {
  
  const products = useMemo(() => getProductByCategory(category), [category]);

  if (amount === null || amount === undefined || amount === 0) {
    amount = products.length;
  }

  const fixedProducts = products.slice(0, amount);

  return (
    <div className="row">
      {fixedProducts.map((product) => (
        <ProductCard size={size} key={product.id} {...product} />
      ))}
    </div>
  );
};
