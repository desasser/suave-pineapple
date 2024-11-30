import RecipeLink from "./recipeLink"
import { RecipeListProps } from "../App";

// TODO: Recipe randomizer
// TODO: Meal planner
// TODO: Meal plan randomizer
// TODO: Grocery list generator
// TODO: Tags sorting/filtering
// TODO: Search/filter by groceries available
// TODO: Calory counting/tagging

export default function RecipeList({ recipes }: RecipeListProps) {

  //TODO: style the list
  return (
    <ul>
      {recipes.map((name) => (
        <RecipeLink name={name} key={name}/>
      ))}
    </ul>
  )
}
