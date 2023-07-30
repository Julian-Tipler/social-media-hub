import { Flex, Text } from "@chakra-ui/react";

export const UserIcon = ({ name }: { name: string }) => {
  return (
    <Flex>
      {/* idk figure out how to fetch this later */}
      <img
        src="https://avatars.githubusercontent.com/u/1024025?v=4"
        alt="user icon"
      />
      <Text>{name}</Text>
    </Flex>
  );
};
