import { CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

export const DalleWidget = () => {
  return (
    <Card height={500}>
      <CardHeader>
        <Heading size="sm">Dalle</Heading>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
};
