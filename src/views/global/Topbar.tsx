import { Button, Flex } from "@chakra-ui/react";
import { Form, NavLink, useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"brand.cardBackground"}
      borderBottomWidth={1}
      borderBottomColor={"brand.border"}
      height={"100%"}
    >
      <Button bg={"brand.primary"}>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Form method="post" action="/logout">
        <Button type="submit" bg={"brand.secondary"}>
          Logout
        </Button>
      </Form>
    </Flex>
  );
};

export default Topbar;
