import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import MeatPage from './pages/MeatPage';
import VegetablesPage from './pages/VegetablesPage';
import AnimalOriginPage from './pages/AnimalOriginPage';
import PlantOriginPage from './pages/PlantOriginPage';
import RecipeListPage from './pages/RecipeListPage';
import FavoritesPage from './pages/FavoritesPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/meat" element={<MeatPage />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/animal-origin" element={<AnimalOriginPage />} />
        <Route path="/plant-origin" element={<PlantOriginPage />} />
        <Route path="/recipe-list" element={<RecipeListPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;