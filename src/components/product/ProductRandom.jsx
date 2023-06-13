import { getRandomProduct } from "../../helpers/getRandomProducts"
import { ProductCard } from "./ProductCard";

export const ProductRandom = () => {
  const randomProduct = getRandomProduct(9);
  return (
    <div className="row">
      {randomProduct.map((product) => (
        <ProductCard 
        size={'col-xl-4'}
        key={product.id} {...product} 
        />
      ))}
    </div>
  )
}
