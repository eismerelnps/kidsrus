import { useMemo } from 'react'
import { ProductCard } from './ProductCard'

import { getProductByCategory } from '../../helpers/getProductByCategory'


export const ProductList = ({ category }) => {

    const products = useMemo( () => getProductByCategory( category ), [ category ]);
 
  return (
    <div className='row'>
       {
        products.map((product) => (
            <ProductCard
            key={product.id}
            {...product}
            />
        ))
       }
    </div>
  );
};
