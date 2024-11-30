interface RecipeProps {
  name: string,
}

export default function RecipeLink({ name }: RecipeProps) {
  return (
    <li key={name}>
      <a href={`/src/recipes/${name}`} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  )
}
