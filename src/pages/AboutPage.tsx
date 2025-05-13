import React from 'react';
import '../styles/aboutPage.css';
import cutleryIcon from '../assets/icons/cutlery.png';
import easyIcon from '../assets/icons/easy.png';
import trophyIcon from '../assets/icons/trophy.png';

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <h1>Наши рецепты</h1>
      <div className="features">
        <div className="feature">
          <div className="feature__icon">
            <img src={cutleryIcon} alt="Вилка и нож" className="feature__icon-img" />
          </div>
          <p>Это проверенные временем<br />сочетания вкусов</p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={easyIcon} alt="EASY" className="feature__icon-img" />
          </div>
          <p>Это простые шаги</p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={trophyIcon} alt="Кубок" className="feature__icon-img" />
          </div>
          <p>Это гарантированно вкусный результат</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;