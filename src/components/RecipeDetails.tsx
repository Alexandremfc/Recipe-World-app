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
  Button,
  Spinner,
  Center,
  Box,
  Stack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import Recipe from "../interfaces/Recipe";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const [reviewsCount, setReviewsCount] = useState(0);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("recipes/" + id, {headers: {"x-auth-token" : localStorage.getItem("authToken")}})
      .then((res) => {
        setRecipe(res.data);
        setReviewsCount(res.data.reviews?.length || 0);
        setRating(getReviewAverage(res.data));
    })
      .catch((err) => console.log(err));
  }, []);

  function getReviewAverage (recipe: Recipe) {
    return recipe.reviews.length == 0 ? 0 : recipe.reviews.map((a: any) => a.rating).reduce((a: any, b: any) => a + b, 0) / recipe.reviews.length
  }

  function handleDelete() {
    if (!recipe) return;

    apiClient
      .delete(`/recipes/${id}`, {headers: {"x-auth-token" : localStorage.getItem("authToken")}})
      .then((response) => {
        console.log("Recipe Deleted", response.data);
        navigate('/');
      })
      .catch((error) => {
        console.log("Something Went Wrong", error);
      });
  }

  const saveRating = (ratingValue: number) => {
    setRating(ratingValue);
    apiClient
        .put(`recipes/${id}/rating`, { rating: ratingValue }, {headers: {"x-auth-token" : localStorage.getItem("authToken")}})
        .then(() => setReviewsCount(prevCount => prevCount + 1))
        .catch(console.error);
  };

  return (
    <>
    <Navbar />
      {!recipe && <Center height="100vh"><Spinner /></Center>}
      {recipe &&
        <Center >
          <Card borderRadius="1px" overflow="hidden" width="40%" mt={5}>
            <Center>
              <Image src={recipe.image} height="auto" width="full" objectFit="cover" />
            </Center>
            <CardBody>
              <Stack spacing={4}>
                <Heading mb={3} fontSize="2xl">
                  {recipe.title}
                </Heading>
                <Text>Category: {recipe.category}</Text>
                <Text mb={4}>{recipe.description}</Text>
                <Box>
                  <Heading as="h2" size="md">Ingredients</Heading>
                  <UnorderedList my={5}>
                    {recipe.ingridients.map((ing, i) => (
                      <ListItem key={i}>{ing}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
                <Box>
                  <Heading as="h2" size="md">Instructions</Heading>
                  <OrderedList>
                    {recipe.instructions.map((instruction, i) => (
                      <ListItem key={i}>{instruction}</ListItem>
                    ))}
                  </OrderedList>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter justifyContent="space-between" alignItems="center">
              <Box>
                <Text>Author: {recipe.author.email}</Text>
                <StarRating rating={rating} setRating={saveRating} />
                <Text>({reviewsCount} reviews)</Text>
              </Box>
              <Stack direction="row" spacing={4}>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button
                  colorScheme="yellow"
                  size="sm"
                >
                  <Link to={"/recipes/" + id + "/edit"}>Edit recipe</Link>
                </Button>
              </Stack>
            </CardFooter>
          </Card>
        </Center>
      }
    </>
  );
};

export default RecipeDetails;
