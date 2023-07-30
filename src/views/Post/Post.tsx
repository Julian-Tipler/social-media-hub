import { Flex, Grid, Box, Spacer, Divider, Center } from "@chakra-ui/react";
import { CreateNewPost } from "./CreateNewPost";
import { DalleWidget } from "./DalleWidget";
import { Card } from "../../components/Card";

export const Post = () => {
  return (
    <Flex overflow={"scroll"} height={"100%"}>
      <Box flex={1}>
        <CreateNewPost />
      </Box>
      <Divider
        orientation="vertical"
        padding={0}
        height={"100%"}
        marginLeft={4}
        marginRight={4}
      />
      <Grid flex={1} templateRows={"repeat(4, 400px)"} overflowY="auto" gap={4}>
        {/* First two "widget" cards */}
        <DalleWidget />
        <DalleWidget />
        <DalleWidget />
        <DalleWidget />
      </Grid>
    </Flex>
  );
};
