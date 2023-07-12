import { Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Topbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      <Button>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button>
        <NavLink to="/about">About</NavLink>
      </Button>
    </Box>
  );
};

export default Topbar;
