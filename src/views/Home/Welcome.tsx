import { Box, Card, Heading, Text } from "@chakra-ui/react";

function Welcome() {
  return (
    <Card h="100%" p="20px" border="1px solid #ddd">
      <Heading as="h2" size="md" mb={2}>
        Welcome to My Page
      </Heading>
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
        ligula sit amet nulla vehicula dignissim. Mauris vel interdum justo, sed
        sollicitudin elit.
      </Text>

      <Text>
        In commodo lacus eu odio tincidunt, at venenatis mauris scelerisque. Ut
        fermentum mauris sit amet lectus gravida, eget ultricies ipsum congue.
        Integer tristique interdum lorem, ac placerat risus.
      </Text>
    </Card>
  );
}

export default Welcome;
