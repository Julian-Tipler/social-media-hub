import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Topbar = () => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
      bg={"brand.cardBackground"}
      borderBottomWidth={1}
      borderBottomColor={"brand.border"}
      height={"60px"}
    >
      <Button bg={"brand.primary"}>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button bg={"brand.secondary"}>
        <NavLink to="/about">About</NavLink>
      </Button>
    </Flex>
  );
};

export default Topbar;
