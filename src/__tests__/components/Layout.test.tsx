import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../../components/Layout';

describe('Layout Component', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('О наших рецептах')).toBeInTheDocument();
    expect(screen.getByText('Избранное')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <BrowserRouter>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(
      <BrowserRouter>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByAltText('Recipe Composer Logo')).toBeInTheDocument();
  });
});