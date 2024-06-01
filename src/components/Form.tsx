import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Box mb="3">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input {...register("name")} id="name" type="text" />
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input {...register("email")} id="email" type="email" />
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input {...register("password")} id="password" type="password" />
        </Box>
        <Button mt={4} type="submit" colorScheme="teal">
          Signup
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
