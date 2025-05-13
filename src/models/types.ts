export interface Product {
  id: string;
  name: string;
  imgSrc: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Recipe {
  category: string;
  title: string;
  requiredIngredients: string[];
  fullRecipe: string;
  matchCount?: number;
  matchPercent?: number;
}

export interface ProductSection {
  id: string;
  title: string;
  products: Product[];
  nextPage: string;
  prevPage: string;
}