import {
  Flex,
  Textarea as ChakraTextarea,
  TextareaProps,
} from "@chakra-ui/react";
import { UserIcon } from "./UserIcon";

interface TextInputBoxProps extends TextareaProps {
  userIcon?: string;
}

const minimalStyling = {
  border: "none",
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.target.style.outline = "none";
    e.target.style.border = "none";
    e.target.style.boxShadow = "none";
  },
  padding: 0,
};

export const Textarea = ({ userIcon, ...props }: TextInputBoxProps) => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"}>
      {userIcon && <UserIcon name={userIcon} />}
      <ChakraTextarea {...minimalStyling} {...props} resize={"none"} />
    </Flex>
  );
};
