import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { Textarea } from "@chakra-ui/react";
import apiCleint from "../services/api-cleint";
import { FieldValues, useForm } from "react-hook-form";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import { linesArray } from "../services/lines-array";
import UploadImage from "./UploadImage";

const RecipeForm = () => {
  const [value, setValue] = useState("Breakfast");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const newRecipe = {
      ...data,
      ingridients: linesArray(data.ingridients),
      instructions: linesArray(data.instructions),
    };
    // apiCleint
    //   .post("/recipes", data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err: AxiosError) => console.log(err.response?.data));
  };

  return (
    <>
      <UploadImage />
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <FormControl>
          <Box mb="3">
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input {...register("title")} id="title" type="text" size="sm" />
            {/* {errors.name && <Text color="tomato">{errors.name.message}</Text>} */}
          </Box>
          <Box mb="3">
            <HStack>
              <Heading as="h2" size="md">
                category:
              </Heading>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <Radio value="Breakfast">Breakfast</Radio>
                  <Radio value="Lunch">Lunch</Radio>
                  <Radio value="Dinner">Dinner</Radio>
                  <Radio value="Snack">Snack</Radio>
                </Stack>
              </RadioGroup>
            </HStack>
          </Box>
          <Box mb="3">
            <FormLabel htmlFor="description">description</FormLabel>
            <Input {...register("description")} id="description" type="text" />
            {/* {errors.email && <Text color="tomato">{errors.email.message}</Text>} */}
          </Box>
          <Box mb="3">
            <FormLabel htmlFor="ingridients">ingridients</FormLabel>
            <Textarea
              {...register("ingridients")}
              id="ingridients"
              placeholder="please Enter each ingridient in seperate line."
            />
            {/* {errors.password && (
                    <Text color="tomato">{errors.password.message}</Text>
                  )} */}
          </Box>
          <Box mb="3">
            <FormLabel htmlFor="instructions">instructions</FormLabel>
            <Textarea
              {...register("instructions")}
              id="instructions"
              placeholder="please Enter each instruction in seperate line."
            />
            {/* {errors.password && (
                    <Text color="tomato">{errors.password.message}</Text>
                  )} */}
          </Box>
          <Button mt={4} type="submit" colorScheme="teal">
            Create
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default RecipeForm;
