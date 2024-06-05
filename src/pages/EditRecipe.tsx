import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiClient from "../services/api-cleint";
import RecipeForm from "../components/RecipeForm";
import Recipe from "../interfaces/Recipe";

const EditRecipe = () => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    apiClient
      .get("/api/recipes/" + id, {headers: {"x-auth-token" : localStorage.getItem("authToken")}})
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <RecipeForm recipe={recipe}/>
  );
};

export default EditRecipe;
