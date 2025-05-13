import React, { useState } from 'react';
import { useRecipe } from '../contexts/RecipeContext';
import { ingredientTranslations } from '../data/products';
import RecipeModal from '../components/RecipeModal';
import { Recipe } from '../models/types';
import '../styles/favoritesPage.css';

const FavoritesPage: React.FC = () => {
  const { favoriteRecipes, removeFromFavorites } = useRecipe();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="product-page">
      <img 
        src={require('../assets/backgrounds/book.png')} 
        alt="Книга с блюдами" 
        className="product-page__book-background" 
      />
      <div className="product-page__container">
        <div id="favorites-list-container" className="selected-list">
          <h2>Избранные рецепты:</h2>
          <ul id="favorites-list-ul">
            {favoriteRecipes.length > 0 ? (
              favoriteRecipes.map(recipe => (
                <li 
                  key={recipe.title} 
                  onClick={() => handleRecipeClick(recipe)}
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  <strong>{recipe.title}</strong>
                  <small className="recipe-ingredients">
                    Ингредиенты: {recipe.requiredIngredients.map(ing => (
                      ingredientTranslations[ing as keyof typeof ingredientTranslations] || ing
                    )).join(', ')}
                  </small>
                  <span 
                    className="favorite-icon favorited"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromFavorites(recipe.title);
                    }}
                  >
                    ♥
                  </span>
                </li>
              ))
            ) : (
              <li className="empty-message">Избранных рецептов не найдено</li>
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

export default FavoritesPage;