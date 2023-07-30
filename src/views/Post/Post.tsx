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
        <Box h="400px" w="100%" bg="green.100" flex="0 0 auto">
          {/* Your widget 1 content here */}
        </Box>
        <Box h="400px" w="100%" bg="green.200" flex="0 0 auto">
          {/* Your widget 1 content here */}
        </Box>
        <Box h="400px" w="100%" bg="green.300" flex="0 0 auto">
          {/* Your widget 1 content here */}
        </Box>
        <Box h="400px" w="100%" bg="green.400" flex="0 0 auto">
          {/* Your widget 1 content here */}
        </Box>
      </Grid>
    </Flex>
  );
};
