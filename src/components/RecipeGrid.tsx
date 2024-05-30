import { Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";

const RecipeGrid = () => {
  const { recipes, error } = useRecipes();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </>
  );
};

export default RecipeGrid;
