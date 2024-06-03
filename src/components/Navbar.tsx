import { Button, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize='100px'  />
      <Button><Link to="/addRecipe">Create a new Recipe</Link></Button>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
