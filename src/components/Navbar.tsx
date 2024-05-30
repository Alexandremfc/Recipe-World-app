import { HStack, Text } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa6";


const Navbar = () => {
  return (
    <HStack>
        <FaReact size={60} color="dodgerblue" />
        <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar