import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { animalOriginProducts } from '../data/products';

const AnimalOriginPage: React.FC = () => {
  return (
    <ProductGrid 
      products={animalOriginProducts.products}
      prevPage={animalOriginProducts.prevPage}
      nextPage={animalOriginProducts.nextPage}
    />
  );
};

export default AnimalOriginPage;