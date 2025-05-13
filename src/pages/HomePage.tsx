import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="main-page">
      <h1>Добро пожаловать!</h1>
      <p>Готовьте еду только по вкусным рецептам</p>
      <Link to="/categories" className="button button--cta">
        Начать
      </Link>
    </div>
  );
};

export default HomePage;