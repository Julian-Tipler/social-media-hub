import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Topbar = () => {
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      justifyContent={"space-between"}
      p={2}
      bg={useColorModeValue("white", "gray.900")}
    >
      <Button bg={"brand.primary"}>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button bg={"brand.secondary"}>
        <NavLink to="/about">About</NavLink>
      </Button>
    </Box>
  );
};

export default Topbar;
