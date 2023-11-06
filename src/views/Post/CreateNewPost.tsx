import { CardBody, CardHeader, Flex, Heading, Image } from "@chakra-ui/react";
import { Divider } from "../../components/Divider";
import { Card } from "../../components/Card";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { useState } from "react";
import { ImageUploader } from "./ImageUploader";

export const CreateNewPost = () => {
  const [caption, setCaption] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [accessibility, setAccessibility] = useState<string>("");
  const [advancedSettings, setAdvancedSettings] = useState<string>("");

  return (
    <Card flex={1}>
      <CardHeader>
        <Heading size="sm">Create new post</Heading>
      </CardHeader>
      <CardBody paddingTop={0} display={"flex"} flex={1}>
        {/* Desktop */}
        <Flex flexDir={"column"} flex={1}>
          <Flex height={"400px"} justifyContent={"center"} className="image-uploader-container">
            <ImageUploader />
          </Flex>
          <Divider margin={"md"} />
          <Flex flex={1} flexDir={"column"}>
            <Flex flex={3}>
              <Textarea
                userIcon="julian"
                value={caption}
                maxLength={20}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
              />
            </Flex>
            <Divider margin={"sm"} />
            <Input
              flex={1}
              placeholder="Add location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Divider margin={"sm"} />
            <Input
              flex={1}
              placeholder="Accesibility"
              value={accessibility}
              onChange={(e) => setAccessibility(e.target.value)}
            />
            <Divider margin={"sm"} />
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
