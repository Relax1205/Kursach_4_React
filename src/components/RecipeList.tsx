import React, { useState } from 'react';
import { useRecipe } from '../contexts/RecipeContext';
import { Recipe } from '../models/types';
import { ingredientTranslations } from '../data/products';
import RecipeModal from './RecipeModal';
import '../styles/recipeList.css';

const RecipeList: React.FC = () => {
  const { filteredRecipes, selectedCategory, selectedProducts, isInFavorites, addToFavorites, removeFromFavorites } = useRecipe();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const toggleFavorite = (e: React.MouseEvent, recipe: Recipe) => {
    e.stopPropagation();
    
    if (isInFavorites(recipe.title)) {
      removeFromFavorites(recipe.title);
    } else {
      addToFavorites(recipe);
    }
  };
  
  return (
    <div className="recipe-page">
      <img 
        src={require('../assets/backgrounds/book.png')} 
        alt="Книга с блюдами" 
        className="product-page__book-background" 
      />
      <div className="product-page__container">
        <div className="selected-list">
          <h2>Ваш выбор:</h2>
          <div className="selected-category">
            <p>Категория: {selectedCategory ? filteredRecipes[0]?.category : 'Не выбрана'}</p>
          </div>
          <h3>Продукты:</h3>
          <ul className="selected-products-list">
            {selectedProducts.length > 0 ? (
              selectedProducts.map(product => (
                <li key={product.id}>
                  <img 
                    src={product.imgSrc} 
                    alt={product.name} 
                    className="selected-product-image" 
                  />
                  <span className="product-name-text">{product.name}</span>
                </li>
              ))
            ) : (
              <li>Продукты не выбраны</li>
            )}
          </ul>
        </div>
        
        <div className="recipe-list">
          <h2>Рецепты:</h2>
          <ul id="recipe-list-ul">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map(recipe => (
                <li 
                  key={recipe.title} 
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <strong>{recipe.title}</strong>
                  <small className="recipe-ingredients">
                    Ингредиенты: {recipe.requiredIngredients.map(ing => (
                      ingredientTranslations[ing as keyof typeof ingredientTranslations] || ing
                    )).join(', ')}
                  </small>
                  <span 
                    className={`favorite-icon ${isInFavorites(recipe.title) ? 'favorited' : ''}`}
                    onClick={(e) => toggleFavorite(e, recipe)}
                  >
                    {isInFavorites(recipe.title) ? '♥' : '♡'}
                  </span>
                </li>
              ))
            ) : (
              <li>Подходящих рецептов не найдено</li>
            )}
          </ul>
        </div>
      </div>
      
      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default RecipeList;