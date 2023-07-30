import {
  Box,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";

export const CreateNewPost = () => {
  return (
    <Card>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Heading size="sm">Create new post</Heading>
      </Flex>
      <CardBody display={"flex"}>
        {/* Desktop */}
        <Flex
          flex={1}
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Image flex={5} />
          <Box backgroundColor={"blue"} flex={4}></Box>
        </Flex>
        {/* Mobile */}
        <Flex display={{ base: "flex", md: "none" }}>
          <Image flex={5} />
          <Box backgroundColor={"blue"} flex={4}></Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
