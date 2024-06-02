import { Container, Heading, Text } from "@chakra-ui/react";
import ResgisterForm from "../components/ResgisterForm";
import Navbar from "../components/Navbar";

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
        <ResgisterForm />
      </Container>
    </>
  );
};

export default Signup;
