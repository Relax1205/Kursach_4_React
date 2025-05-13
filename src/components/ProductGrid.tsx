import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/types';
import { useRecipe } from '../contexts/RecipeContext';
import '../styles/productGrid.css';

interface ProductGridProps {
  products: Product[];
  prevPage: string;
  nextPage: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, prevPage, nextPage }) => {
  const { selectedProducts, setSelectedProducts } = useRecipe();
  
  const toggleProduct = (product: Product) => {
    setSelectedProducts(prev => {
      const isSelected = prev.some(p => p.id === product.id);
      if (isSelected) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };
  
  const isSelected = (productId: string) => {
    return selectedProducts.some(p => p.id === productId);
  };
  
  return (
    <div className="product-page">
      <img 
        src={require('../assets/backgrounds/book.png')} 
        alt="Книга с блюдами" 
        className="product-page__book-background" 
      />
      <div className="product-page__container">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`product product--position-${index + 1}`}
          >
            <div 
              className={`product__card ${isSelected(product.id) ? 'product__card--selected' : ''}`}
              onClick={() => toggleProduct(product)}
            >
              <img 
                src={product.imgSrc} 
                alt={product.name} 
                className="product__image" 
              />
            </div>
            <h2 className="product__title">{product.name}</h2>
          </div>
        ))}
        <Link to={prevPage} className="nav-arrow nav-arrow--left">
          <div className="nav-arrow__symbol">›</div>
        </Link>
        <Link to={nextPage} className="nav-arrow nav-arrow--right">
          <div className="nav-arrow__symbol">›</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;