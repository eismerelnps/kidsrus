import { getRandomProduct } from "../../helpers/getRandomProducts"
import { ProductCard } from "./ProductCard";

export const ProductRandom = () => {
  const randomProduct = getRandomProduct();
  return (
    <div className="row">
      {randomProduct.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
