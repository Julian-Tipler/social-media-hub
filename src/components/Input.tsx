import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface TextInputBoxProps extends InputProps {
  userIcon?: string;
}

const minimalStyling = {
  border: "none",
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.outline = "none";
    e.target.style.border = "none";
    e.target.style.boxShadow = "none";
  },
  padding: 0,
};

export const Input = ({ ...props }: TextInputBoxProps) => {
  return <ChakraInput {...minimalStyling} {...props} />;
};
