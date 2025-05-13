import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { plantOriginProducts } from '../data/products';

const PlantOriginPage: React.FC = () => {
  return (
    <ProductGrid 
      products={plantOriginProducts.products}
      prevPage={plantOriginProducts.prevPage}
      nextPage={plantOriginProducts.nextPage}
    />
  );
};

export default PlantOriginPage;