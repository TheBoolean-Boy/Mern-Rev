import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
    
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {/* NAVBAR */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />}/>
        </Routes>
      </Box>

    </div>
  );
}

export default App;
