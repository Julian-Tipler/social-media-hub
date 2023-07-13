import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Topbar = () => {
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      justifyContent={"space-between"}
      p={2}
      bg={"brand.cardBackground"}
      borderBottomWidth={1}
      borderBottomColor={"brand.border"}
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
