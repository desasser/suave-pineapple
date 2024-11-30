import { useEffect, useState } from 'react';
import { formatString } from '../utils/stringUtils';

interface RecipeProps {
  name: string,
}

export default function RecipeLink({ name }: RecipeProps) {
  const [recipe, setRecipe] = useState(name);

  useEffect(() => {
    setRecipe(formatString(name));
  }, [name])

  return (
    <li key={name}>
      <a href={`/src/recipes/${name}`} target="_blank" rel="noopener noreferrer">
        {recipe}
      </a>
    </li>
  )
}
