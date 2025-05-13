import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RecipeProvider } from './contexts/RecipeContext';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </BrowserRouter>
  </React.StrictMode>
);