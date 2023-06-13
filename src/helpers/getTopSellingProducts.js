
import { products } from "../data/products";


export const getTopSellingProducts =( amount ) => {
    // Ordenar la lista de productos en función del stock de menor a mayor
    const sortedProducts = products.sort((a, b) => a.stock - b.stock);
  
    // Obtener los 4 primeros productos (los de menor stock)
    const topSellingProducts = sortedProducts.slice(0, amount);
  
    return topSellingProducts;
  }
  