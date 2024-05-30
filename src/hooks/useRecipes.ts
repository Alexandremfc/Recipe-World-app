import { useEffect, useState } from "react";
import apiCleint from "../services/api-cleint";
import { CanceledError } from "axios";

interface Recipe {
    id: number;
    title: string;
  }
  
  interface FetchRecipesResponse {
    count: number;
    results: Recipe[];
  }

const useRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiCleint
      .get<FetchRecipesResponse>("/recipes" , {signal: controller.signal})
      .then((res) => setRecipes(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
      });

      return () => controller.abort();
  }, []);

  return {recipes , error};

}

export default useRecipes;