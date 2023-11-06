import { CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

export const MusicWidget = () => {
  return (
    <Card height={400}>
      <CardHeader>
        <Heading size="sm">Music</Heading>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
};
