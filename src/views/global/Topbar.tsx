import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Topbar() {
  return (
    <Box>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </Box>
  );
}

export default Topbar;
