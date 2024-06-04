import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCleint from "../services/api-cleint";

interface Recipe {
  title: string;
  author: string;
  category: string;
  description: string;
  ingridients: string[];
  instructions: string[];
  image: string;
}

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    apiCleint
      .get("/recipes/" + id)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Card borderRadius="10px" overflow="hidden">
        <Image src={recipe?.image} />
        <CardBody>
          <Heading mb={3} fontSize="2xl">
            {recipe?.title}
          </Heading>
          <Text>Category: {recipe?.category}</Text>
          <Text mb={4}>{recipe?.description}</Text>
          <UnorderedList my={5}>
            <Heading as="h2">Ingridients</Heading>
            {recipe?.ingridients.map((ing) => (
              <ListItem>{ing}</ListItem>
            ))}
          </UnorderedList>
          <OrderedList>
            <Heading as="h2">instructions</Heading>
            {recipe?.instructions.map((instruction) => (
              <ListItem>{instruction}</ListItem>
            ))}
          </OrderedList>
        </CardBody>
        <CardFooter>
          <Text>Author: {recipe?.author}</Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RecipeDetails;
