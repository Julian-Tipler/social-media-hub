import { Grid, GridItem } from "@chakra-ui/react";
import Welcome from "./Welcome";
import { Meta } from "./Meta";

export const Home = () => {
  // FB.getLoginStatus(function (response: any) {
  //   console.log(response);
  // });
  return (
    <Grid
      h="800px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={{ base: 4, md: 2 }}>
        <Welcome />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 4, md: 2 }}>
        <Welcome />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 4, md: 2 }}>
        <Meta />
      </GridItem>
    </Grid>
  );
};
