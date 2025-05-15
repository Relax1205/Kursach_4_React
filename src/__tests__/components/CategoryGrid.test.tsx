import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecipeProvider } from '../../contexts/RecipeContext';
import CategoryGrid from '../../components/CategoryGrid';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('CategoryGrid Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipeProvider>
          <CategoryGrid />
        </RecipeProvider>
      </BrowserRouter>
    );
  });

  it('displays warning when trying to proceed without selection', () => {
    const nextButton = screen.getByText('›');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Пожалуйста, выберите категорию перед переходом!')).toBeInTheDocument();
  });

  it('navigates to next page after category selection', () => {
    const category = screen.getAllByRole('img')[1]; // First category after background image
    fireEvent.click(category);
    
    const nextButton = screen.getByText('›');
    fireEvent.click(nextButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/meat');
  });
});