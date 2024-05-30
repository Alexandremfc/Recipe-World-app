import { useEffect, useState } from "react";
import apiCleint from "../services/api-cleint";
import { Text } from "@chakra-ui/react";

interface Recipe {
  id: number;
  title: string;
}

interface FetchRecipesResponse {
  count: number;
  results: Recipe[];
}

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiCleint
      .get<FetchRecipesResponse>("/recipes")
      .then((res) => setRecipes(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
