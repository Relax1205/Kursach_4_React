import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/layout.css';
import logoIcon from '../assets/icons/logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav__logo-link">
          <img src={logoIcon} alt="Recipe Composer Logo" className="nav__logo" />
        </Link>
        <Link 
          to="/" 
          className={`nav__link ${location.pathname === '/' ? 'nav__link--selected' : ''}`}
        >
          Главная
        </Link>
        <Link 
          to="/about" 
          className={`nav__link ${location.pathname === '/about' ? 'nav__link--selected' : ''}`}
        >
          О наших рецептах
        </Link>
        <Link 
          to="/favorites" 
          className={`nav__link ${location.pathname === '/favorites' ? 'nav__link--selected' : ''}`}
        >
          Избранное
        </Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;