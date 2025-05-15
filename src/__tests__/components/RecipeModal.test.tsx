import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecipeProvider } from '../../contexts/RecipeContext';
import RecipeModal from '../../components/RecipeModal';

const mockRecipe = {
  category: 'main',
  title: 'Test Recipe',
  requiredIngredients: ['ingredient1', 'ingredient2'],
  fullRecipe: 'Ингредиенты:\nTest ingredients\nПлан готовки:\nTest steps'
};

describe('RecipeModal Component', () => {
  it('renders recipe details when open', () => {
    render(
      <RecipeProvider>
        <RecipeModal recipe={mockRecipe} isOpen={true} onClose={() => {}} />
      </RecipeProvider>
    );

    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText(/Test ingredients/)).toBeInTheDocument();
    expect(screen.getByText(/Test steps/)).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <RecipeProvider>
        <RecipeModal recipe={mockRecipe} isOpen={false} onClose={() => {}} />
      </RecipeProvider>
    );

    expect(screen.queryByText('Test Recipe')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <RecipeProvider>
        <RecipeModal recipe={mockRecipe} isOpen={true} onClose={onClose} />
      </RecipeProvider>
    );

    fireEvent.click(screen.getByText('×'));
    expect(onClose).toHaveBeenCalled();
  });
});