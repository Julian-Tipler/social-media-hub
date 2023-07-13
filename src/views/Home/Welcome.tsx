import { CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";

function Welcome() {
  return (
    <Card>
      <Heading size="sm"> Welcome to My Page</Heading>
      <CardBody>
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
          ligula sit amet nulla vehicula dignissim. Mauris vel interdum justo,
          sed sollicitudin elit.
        </Text>
        <Text>
          In commodo lacus eu odio tincidunt, at venenatis mauris scelerisque.
          Ut fermentum mauris sit amet lectus gravida, eget ultricies ipsum
          congue. Integer tristique interdum lorem, ac placerat risus.
        </Text>
      </CardBody>
    </Card>
  );
}

export default Welcome;
