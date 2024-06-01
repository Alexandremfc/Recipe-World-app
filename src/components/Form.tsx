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

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Box mb="3">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            onChange={(event) => setUser({ ...user, name: event.target.value })}
            value={user.name}
            id="name"
            type="text"
          />
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
            id="email"
            type="email"
          />
        </Box>
        <Box mb="3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
            value={user.password}
            id="password"
            type="password"
          />
        </Box>
        <Button mt={4} type="submit" colorScheme="teal">
          Signup
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
