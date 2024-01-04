import { Grid, GridItem } from "@chakra-ui/react";
import Welcome from "./Welcome";
import { CreateNewPost } from "../post/CreateNewPost";

export const Home = () => {
  return (
    <Grid
      h="800px"
      templateRows="repeat(4, 1fr)"
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}>
        <Welcome />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}>
        <CreateNewPost />
      </GridItem>
    </Grid>
  );
};
