import { Container, Heading } from "@chakra-ui/react"
import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"


const Login = () => {
  return (
    <>
    <Navbar />
      <Container>
        <Heading size='3xl' mb="15px" textAlign="center">
          Login
        </Heading >
        <LoginForm />
      </Container>
    </>
  )
}

export default Login