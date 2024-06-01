import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import apiCleint from "../services/api-cleint";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const passwordComplexitySchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .refine((value) => /[A-Z]/.test(value), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine((value) => /[a-z]/.test(value), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine((value) => /[0-9]/.test(value), {
    message: "Password must contain at least one number",
  })
  .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
    message: "Password must contain at least one special character",
  });

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 chraractes." })
    .max(50, { message: "Name must be under 50 characters." }),
  email: z.string().email(),
  password: passwordComplexitySchema,
});

// // extract a type from the schema object
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    apiCleint
      .post("/users", data)
      .then((res) => console.log(res))
      .catch((err: AxiosError) => console.log(err.response?.data));
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <FormControl>
        <Box mb="3">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input {...register("name")} id="name" type="text" />
          {errors.name && <Text color="tomato">{errors.name.message}</Text>}
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input {...register("email")} id="email" type="email" />
          {errors.email && <Text color="tomato">{errors.email.message}</Text>}
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input {...register("password")} id="password" type="password" />
          {errors.password && (
            <Text color="tomato">{errors.password.message}</Text>
          )}
        </Box>
        <Button mt={4} type="submit" colorScheme="teal" isDisabled={!isValid}>
          Signup
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
