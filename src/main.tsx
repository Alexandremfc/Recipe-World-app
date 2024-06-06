import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Flex, Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import AuthContext from "./contexts/authContext";
import Footer from "./components/Footer";

function Root() {

  const token = localStorage.getItem("authToken");

  const [isLoggedIn, setIsLoggedIn] = useState(token != null);

  return (
    <AuthContext.Provider value={{isLoggedIn , setIsLoggedIn}}>
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <Flex
            minHeight={"100vh"}
            flexDirection={"column"}
          >
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Box flexGrow={1}>
              <RouterProvider router={router} />
            </Box>
            <Footer/>
          </Flex>
        </ChakraProvider>
      </React.StrictMode>
    </AuthContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root/>);
