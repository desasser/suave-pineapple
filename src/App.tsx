import { useState, useEffect } from 'react';
import './App.css'
import RecipeList from './components/recipeList'
import RecipeRandomizer from './components/recipeRandomizer'

// TODO: Meal planner
// TODO: Meal plan randomizer
// TODO: Grocery list generator
// TODO: Tags sorting/filtering
// TODO: Search/filter by groceries available
// TODO: Calory counting/tagging

export interface RecipeListProps {
  readonly recipes: string[];
}

function App() {
  const [recipes, setRecipes] = useState<string[]>([]);

  useEffect(() => {
    const files = import.meta.glob("/src/recipes/*.md", { query: "?url", import: "default" });

    const fileNames = Object.keys(files).map((filePath) => {
      return filePath.split("/").pop() || "";
    });

    setRecipes(fileNames);
  }, []);


  return (
    <>
      <h1>Your Recipe Randomizer and Meal Planner</h1>
      <div>
        <h2>Randomizer</h2>
        <RecipeRandomizer recipes={recipes}/>
      </div>
      <div>
        <h2>Recipe List</h2>
        <RecipeList recipes={recipes}/>
      </div>
      <div>
        <h2>Meal Planner</h2>
      </div>
    </>
  )
}

export default App
