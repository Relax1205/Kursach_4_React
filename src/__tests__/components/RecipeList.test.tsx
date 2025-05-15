import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecipeProvider } from '../../contexts/RecipeContext';
import RecipeList from '../../components/RecipeList';

describe('RecipeList Component', () => {
  beforeEach(() => {
    render(
      <RecipeProvider>
        <RecipeList />
      </RecipeProvider>
    );
  });

  it('displays selected category and products section', () => {
    expect(screen.getByText('Ваш выбор:')).toBeInTheDocument();
    expect(screen.getByText('Категория:')).toBeInTheDocument();
    expect(screen.getByText('Продукты:')).toBeInTheDocument();
  });

  it('displays recipes section', () => {
    expect(screen.getByText('Рецепты:')).toBeInTheDocument();
  });

  it('shows "no recipes" message when no recipes match', () => {
    expect(screen.getByText('Подходящих рецептов не найдено')).toBeInTheDocument();
  });
});