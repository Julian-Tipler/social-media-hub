import {
  Box,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { TextInputBox } from "../../components/TextInputBox";
import { useState } from "react";

export const CreateNewPost = () => {
  const [caption, setCaption] = useState<string>("");
  console.log(caption)
  return (
    <Card>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Heading size="sm">Create new post</Heading>
      </Flex>
      <CardBody>
        {/* Desktop */}
        <Flex flexDir={"column"} height={"100%"}>
          <Image flex={5} border={"2px solid red"} />
          <Flex backgroundColor={"white"} flex={4} flexDir={"column"}>
            <TextInputBox
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </Flex>
          {/* Mobile
          <Flex>
            <Image flex={5} />
            <Box flex={4}></Box>
          </Flex> */}
        </Flex>
      </CardBody>
    </Card>
  );
};
