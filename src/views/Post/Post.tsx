import { Flex, Grid, Box } from "@chakra-ui/react";
import { CreateNewPost } from "./CreateNewPost";
import { DalleWidget } from "./DalleWidget";
import { Card } from "../../components/Card";

export const Post = () => {
  return (
    <Flex>
      <Box flex={1}></Box>
      <Grid
        flex={1}
        templateRows={"repeat(4, 400px)"}
        height="80vh"
        overflowY="scroll"
        gap={4}
      >
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
