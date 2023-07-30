import {
  Box,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { useState } from "react";

export const CreateNewPost = () => {
  const [caption, setCaption] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [accessibility, setAccessibility] = useState<string>("");
  const [advancedSettings, setAdvancedSettings] = useState<string>("");

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
          <Flex
            backgroundColor={"gray.400"}
            flex={4}
            flexDir={"column"}
            padding={5}
          >
            <Box flex={3}>
              <Textarea
                flex={3}
                userIcon="julian"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
              />
            </Box>
            <Divider />
            <Input
              flex={1}
              placeholder="Add location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Divider />
            <Input
              flex={1}
              placeholder="Accesibility"
              value={accessibility}
              onChange={(e) => setAccessibility(e.target.value)}
            />
            <Divider />
            <Input
              flex={1}
              placeholder="Advanced settings"
              value={advancedSettings}
              onChange={(e) => setAdvancedSettings(e.target.value)}
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
