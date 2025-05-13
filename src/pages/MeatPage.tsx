import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { meatProducts } from '../data/products';

const MeatPage: React.FC = () => {
  return (
    <ProductGrid 
      products={meatProducts.products}
      prevPage={meatProducts.prevPage}
      nextPage={meatProducts.nextPage}
    />
  );
};

export default MeatPage;