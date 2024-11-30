import { useState, useEffect } from "react";
import { RecipeListProps } from "../App";
import { formatString } from '../utils/stringUtils';

export default function RecipeRandomizer({ recipes }: RecipeListProps) {
  const [randomRecipe, setRandomRecipe] = useState('');

  useEffect(() => {
    getRecipe();
  },[recipes])

  const getRecipe = () => {
    if (recipes.length === 0) (
      setRandomRecipe('empty')
    );
    const num = Math.floor(Math.random() * recipes.length);

    if (recipes[num] !== randomRecipe) {
      setRandomRecipe(formatString(recipes[num]));
    } else {
      getRecipe();
    }
  }


  //TODO: style the list
  return (
    <div>
      <button onClick={getRecipe}>Click me</button>
      <div>
        <h3>{randomRecipe}</h3>
      </div>
    </div>
  )
}