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
  console.log(caption);
  return (
    <Card>
      <CardHeader>
        <Heading size="sm">Create new post</Heading>
      </CardHeader>
      <CardBody paddingTop={0}>
        {/* Desktop */}
        <Flex flexDir={"column"} height={"100%"}>
          <Image flex={5} border={"2px solid red"} />
          <Flex backgroundColor={"gray.400"} flex={4} flexDir={"column"}>
            <TextInputBox
              flex={3}
              userIcon="julian"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
            />
            <Input flex={1} />
            <Input flex={1} />
            <Input flex={1} />
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
