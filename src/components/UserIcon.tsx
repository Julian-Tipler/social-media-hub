import { Flex, Image, Text, Spacer } from "@chakra-ui/react";

export const UserIcon = ({ name }: { name: string }) => {
  return (
    <Flex alignItems={"center"} marginBottom={2} >
      {/* idk figure out how to fetch this later */}
      <Image
        src="https://avatars.githubusercontent.com/u/1024025?v=4"
        alt="user icon"
        height={8}
        marginRight={5}
        borderRadius={"full"}
      />
      <Text>{name}</Text>
    </Flex>
  );
};
