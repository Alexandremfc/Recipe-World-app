import { HStack } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa6";
import ColorModeSwitch from "./ColorModeSwitch";


const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <FaReact size={60} color="dodgerblue" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar