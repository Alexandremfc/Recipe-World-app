import { useContext, useState } from "react";
import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";
import AuthContext from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  
  const storeToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };
  
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    apiClient
      .post("auth", data)
      .then((res) => {
        storeToken(res.data);
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch(onError);
  };

  const onError = (err: AxiosError) => {
    console.error(err);

    if (err.response?.data) {
      setError(
        typeof err.response.data === "string"
          ? err.response.data
          : JSON.stringify(err.response.data)
      );
    } else {
      setError("An unknown error occurred");
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <FormControl>
        <Box mb="3">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input {...register("email")} id="email" type="email" />
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input {...register("password")} id="password" type="password" />
        </Box>
        <Button my={5} type="submit" colorScheme="teal">
          Login
        </Button>
        {error && <Text color="tomato">{error}</Text>}
      </FormControl>
    </form>
  );
};

export default LoginForm;
