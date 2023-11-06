import { Flex, Grid, Box } from "@chakra-ui/react";
import { CreateNewPost } from "./CreateNewPost";
import { DalleWidget } from "./DalleWidget";
import { MusicWidget } from "./MusicWidget";
import { Divider } from "../../components/Divider";

// This is a horizontally flexed two part page. On the left, the CreateNewPost component. On the right, a scrollable grid of widgets.
export const Post = () => {
  return (
    // this one might not be:
    <Flex overflow={"auto"} height={"100%"}>
      <Box flex={1}>
        <CreateNewPost />
      </Box>
      <Divider vertical={true} margin={"md"} />
      {/* This overflow def important: */}
      <Grid flex={1} overflowY="auto" gap={4}>
        {/* First two "widget" cards */}
        <DalleWidget />
        <MusicWidget />
      </Grid>
    </Flex>
  );
};
