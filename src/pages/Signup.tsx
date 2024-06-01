import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Heading size='3xl' mb="15px" textAlign="center">
          Signup
        </Heading >
        <Text textAlign="center" mb="10px">
          Welcome to Recipe World . please signup or login in order to share
          your meals.{" "}
        </Text>
        <Form />
      </Container>
    </>
  );
};

export default Signup;
