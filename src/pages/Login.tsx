import { Container, Heading, Text } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container>
      <Heading size="3xl" mb="15px" textAlign="center">
        Login
      </Heading>
      <LoginForm />
      <Text>don't have an account yet?</Text>
      <ChakraLink color="teal.500" as={ReactRouterLink} to="/signup">
        Signup
      </ChakraLink>
    </Container>
  );
};

export default Login;
