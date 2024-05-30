import { Recipe } from "../hooks/useRecipes";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card borderRadius="10px" overflow='hidden'>
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize='2xl'>{recipe.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
