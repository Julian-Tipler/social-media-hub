import { Flex, Input, InputProps } from "@chakra-ui/react";
import { UserIcon } from "./UserIcon";

interface TextInputBoxProps extends InputProps {
  userIcon?: string;
}

export const TextInputBox = ({
  value,
  onChange,
  userIcon,
  ...props
}: TextInputBoxProps) => {
  return (
    <Flex>
      {userIcon && <UserIcon name={userIcon} />}
      <Input {...props} value={value} onChange={onChange} />;
    </Flex>
  );
};
