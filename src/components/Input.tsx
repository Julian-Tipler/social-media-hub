import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
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

export const Input = ({ ...props }: InputProps) => {
  return <ChakraInput color={"white"} {...minimalStyling} {...props} />;
};
