import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Box minH={"100vh"}>
        {/* NAVBAR */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
