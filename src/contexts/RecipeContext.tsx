import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe, Product, Category } from '../models/types';
import { allRecipes } from '../data/recipes';

interface RecipeContextType {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedProducts: Product[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  favoriteRecipes: Recipe[];
  addToFavorites: (recipe: Recipe) => void;
  removeFromFavorites: (recipeTitle: string) => void;
  isInFavorites: (recipeTitle: string) => boolean;
  filteredRecipes: Recipe[];
  allCategories: Category[];
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  
  const allCategories: Category[] = [
    { id: 'snack', name: 'Закуска' },
    { id: 'soup', name: 'Суп' },
    { id: 'drink', name: 'Напиток' },
    { id: 'main', name: 'Основное Блюдо' },
    { id: 'dessert', name: 'Десерт' },
    { id: 'garnish', name: 'Гарнир' },
    { id: 'bakery', name: 'Выпечка' }
  ];

  useEffect(() => {
    // Load selected category from localStorage
    const savedCategory = localStorage.getItem('selectedFoodCategory');
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
    
    // Load selected products from localStorage
    const savedProducts = localStorage.getItem('selectedProducts');
    if (savedProducts) {
      setSelectedProducts(JSON.parse(savedProducts));
    }
    
    // Load favorite recipes from localStorage
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavoriteRecipes(JSON.parse(savedFavorites));
    }
  }, []);
  
  useEffect(() => {
    // Save selected category to localStorage
    localStorage.setItem('selectedFoodCategory', selectedCategory);
  }, [selectedCategory]);
  
  useEffect(() => {
    // Save selected products to localStorage
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts]);
  
  useEffect(() => {
    // Save favorite recipes to localStorage
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);
  
  const addToFavorites = (recipe: Recipe) => {
    setFavoriteRecipes(prev => {
      if (prev.some(r => r.title === recipe.title)) return prev;
      return [...prev, recipe];
    });
  };
  
  const removeFromFavorites = (recipeTitle: string) => {
    setFavoriteRecipes(prev => prev.filter(recipe => recipe.title !== recipeTitle));
  };
  
  const isInFavorites = (recipeTitle: string) => {
    return favoriteRecipes.some(recipe => recipe.title === recipeTitle);
  };
  
  const filteredRecipes = allRecipes
    .filter(recipe => {
      // Category filter
      if (selectedCategory && recipe.category !== selectedCategory) {
        return false;
      }
      
      // Ingredients filter
      const selectedProductIds = selectedProducts.map(p => p.id);
      const matchingIngredients = recipe.requiredIngredients.filter(reqId => 
        selectedProductIds.includes(reqId)
      );
      
      // Has at least one matching ingredient
      return matchingIngredients.length > 0;
    })
    .map(recipe => {
      // Calculate match percentage
      const selectedProductIds = selectedProducts.map(p => p.id);
      const matchingIngredients = recipe.requiredIngredients.filter(reqId => 
        selectedProductIds.includes(reqId)
      );
      
      return {
        ...recipe,
        matchCount: matchingIngredients.length,
        matchPercent: (matchingIngredients.length / recipe.requiredIngredients.length) * 100
      };
    })
    .sort((a, b) => {
      // Sort by match percentage (highest first)
      return b.matchPercent - a.matchPercent;
    });
  
  return (
    <RecipeContext.Provider value={{
      selectedCategory,
      setSelectedCategory,
      selectedProducts,
      setSelectedProducts,
      favoriteRecipes,
      addToFavorites,
      removeFromFavorites,
      isInFavorites,
      filteredRecipes,
      allCategories
    }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
};