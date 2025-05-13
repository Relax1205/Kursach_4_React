import React from 'react';
import { useRecipe } from '../contexts/RecipeContext';
import { Recipe } from '../models/types';
import '../styles/recipeModal.css';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {
  const { addToFavorites, removeFromFavorites, isInFavorites } = useRecipe();
  
  if (!isOpen || !recipe) return null;
  
  const formattedRecipe = recipe.fullRecipe
    .replace(/^Ингредиенты:/gm, '<h3 class="modal-section-heading">Ингредиенты:</h3>')
    .replace(/^План готовки:/gm, '<h3 class="modal-section-heading">План готовки:</h3>')
    .replace(/^Время приготовления:/gm, '<h3 class="modal-section-heading">Время приготовления:</h3>')
    .replace(/(\d+\s?\w*минут[ау]?)/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  
  const isFavorite = isInFavorites(recipe.title);
  
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(recipe.title);
    } else {
      addToFavorites(recipe);
    }
  };
  
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close-button" onClick={onClose}>&times;</span>
        <h2 id="modal-recipe-title">{recipe.title}</h2>
        <span 
          className={`favorite-icon ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '♥' : '♡'}
        </span>
        <div 
          id="modal-recipe-content" 
          dangerouslySetInnerHTML={{ __html: formattedRecipe }}
        />
      </div>
    </div>
  );
};

export default RecipeModal;