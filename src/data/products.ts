import { ProductSection } from '../models/types';

// Import product images

// Animal origin
import eggImg from "../assets/food/animal_origin/egg.png";
import milkImg from "../assets/food/animal_origin/milk.png";
import cheeseImg from "../assets/food/animal_origin/cheese.png";
import cottageCheeseImg from "../assets/food/animal_origin/cottage_cheese.png";
import honeyImg from "../assets/food/animal_origin/honey.png";
import sourCreamImg from "../assets/food/animal_origin/sour_cream.png";

// Meat
import beefImg from "../assets/food/meat/beef.png";
import chickenImg from "../assets/food/meat/chicken.png";
import muttonImg from "../assets/food/meat/mutton.png";
import porkImg from "../assets/food/meat/pork.png";
import boldFishImg from "../assets/food/meat/bold_fish.png";
import lowFatFishImg from "../assets/food/meat/low-fat_fish.png";

// Vegetables
import bananaImg from "../assets/food/vegetables/banana.png";
import appleImg from "../assets/food/vegetables/apples.png";
import lemonImg from "../assets/food/vegetables/lemons.png";
import carrotImg from "../assets/food/vegetables/carrot.png";
import onionImg from "../assets/food/vegetables/onion.png";
import potatoImg from "../assets/food/vegetables/potato.png";

// Plant origin
import riceImg from "../assets/food/plant_origin/rice.png";
import buckwheatImg from "../assets/food/plant_origin/buckwheat.png";
import pastaImg from "../assets/food/plant_origin/pasta.png";
import beansImg from "../assets/food/plant_origin/beans.png";
import oilImg from "../assets/food/plant_origin/oil.png";
import flourImg from "../assets/food/plant_origin/flour.png";

// Categories
import snackImg from "../assets/food/categories/snack.png";
import soupImg from "../assets/food/categories/soup.png";
import drinkImg from "../assets/food/categories/drink.png";
import mainDishImg from "../assets/food/categories/main_dish.png";
import dessertImg from "../assets/food/categories/dessert.png";
import garnishImg from "../assets/food/categories/garnish.png";
import bakeryImg from "../assets/food/categories/backery.png";


export const animalOriginProducts: ProductSection = {
  id: 'animal-origin',
  title: 'Продукты животного происхождения',
  products: [
    { id: 'egg', name: 'Яйца', imgSrc: eggImg },
    { id: 'milk', name: 'Молоко', imgSrc: milkImg },
    { id: 'cheese', name: 'Сыр', imgSrc: cheeseImg },
    { id: 'cottage_cheese', name: 'Творог', imgSrc: cottageCheeseImg },
    { id: 'honey', name: 'Мёд', imgSrc: honeyImg },
    { id: 'sour_cream', name: 'Сметана', imgSrc: sourCreamImg }
  ],
  prevPage: '/vegetables',
  nextPage: '/plant-origin'
};

export const meatProducts: ProductSection = {
  id: 'meat',
  title: 'Типы мяса',
  products: [
    { id: 'beef', name: 'Говядина', imgSrc: beefImg },
    { id: 'chicken', name: 'Курица', imgSrc: chickenImg },
    { id: 'mutton', name: 'Баранина', imgSrc: muttonImg },
    { id: 'pork', name: 'Свинина', imgSrc: porkImg },
    { id: 'bold_fish', name: 'Жирная рыба', imgSrc: boldFishImg },
    { id: 'low-fat_fish', name: 'Нежирная рыба', imgSrc: lowFatFishImg }
  ],
  prevPage: '/categories',
  nextPage: '/vegetables'
};

export const vegetableProducts: ProductSection = {
  id: 'vegetables',
  title: 'Типы овощей',
  products: [
    { id: 'banana', name: 'Бананы', imgSrc: bananaImg },
    { id: 'apple', name: 'Яблоки', imgSrc: appleImg },
    { id: 'lemon', name: 'Лимоны', imgSrc: lemonImg },
    { id: 'carrot', name: 'Морковь', imgSrc: carrotImg },
    { id: 'onion', name: 'Лук', imgSrc: onionImg },
    { id: 'potato', name: 'Картофель', imgSrc: potatoImg }
  ],
  prevPage: '/meat',
  nextPage: '/animal-origin'
};

export const plantOriginProducts: ProductSection = {
  id: 'plant-origin',
  title: 'Продукты растительного происхождения',
  products: [
    { id: 'rice', name: 'Рис', imgSrc: riceImg },
    { id: 'buckwheat', name: 'Гречка', imgSrc: buckwheatImg },
    { id: 'pasta', name: 'Макароны', imgSrc: pastaImg },
    { id: 'beans', name: 'Фасоль', imgSrc: beansImg },
    { id: 'oil', name: 'Раст. масло', imgSrc: oilImg },
    { id: 'flour', name: 'Мука', imgSrc: flourImg }
  ],
  prevPage: '/animal-origin',
  nextPage: '/recipe-list'
};

export const categories = [
  { id: 'snack', name: 'Закуска', imgSrc: snackImg },
  { id: 'soup', name: 'Суп', imgSrc: soupImg },
  { id: 'drink', name: 'Напиток', imgSrc: drinkImg },
  { id: 'main', name: 'Основное Блюдо', imgSrc: mainDishImg },
  { id: 'dessert', name: 'Десерт', imgSrc: dessertImg },
  { id: 'garnish', name: 'Гарнир', imgSrc: garnishImg },
  { id: 'bakery', name: 'Выпечка', imgSrc: bakeryImg }
];

export const ingredientTranslations = {
  'cottage_cheese': 'Творог',
  'egg': 'Яйца',
  'flour': 'Мука',
  'honey': 'Мёд',
  'beans': 'Фасоль',
  'onion': 'Лук',
  'oil': 'Масло',
  'apple': 'Яблоки',
  'chicken': 'Курица',
  'cheese': 'Сыр',
  'lemon': 'Лимоны',
  'water': 'Вода',
  'milk': 'Молоко',
  'rice': 'Рис',
  'buckwheat': 'Гречка',
  'carrot': 'Морковь',
  'beef': 'Говядина',
  'potato': 'Картофель',
  'pork': 'Свинина',
  'bold_fish': 'Жирная рыба',
  'banana': 'Бананы',
  'sour_cream': 'Сметана',
  'mutton': 'Баранина',
  'low-fat_fish': 'Нежирная рыба',
  'pasta': 'Макароны'
};