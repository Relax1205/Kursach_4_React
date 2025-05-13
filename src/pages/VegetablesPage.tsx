import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { vegetableProducts } from '../data/products';

const VegetablesPage: React.FC = () => {
  return (
    <ProductGrid
      products={vegetableProducts.products}
      prevPage={vegetableProducts.prevPage}
      nextPage={vegetableProducts.nextPage}
    />
  );
};

export default VegetablesPage;