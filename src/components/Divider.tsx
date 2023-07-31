import {
  Divider as ChakraDivider,
  DividerProps as ChakraDividerProps,
} from "@chakra-ui/react";

interface DividerProps extends ChakraDividerProps {
  margin?: "sm" | "md" | "lg";
  vertical?: boolean;
}

const marginChart = {
  sm: 2,
  md: 5,
  lg: 10,
};

export const Divider = ({
  margin = "sm",
  orientation,
  ...props
}: DividerProps) => {
  const marginProps =
    orientation === "vertical"
      ? { marginLeft: marginChart[margin], marginRight: marginChart[margin] }
      : { marginTop: marginChart[margin], marginBottom: marginChart[margin] };
  return <ChakraDivider color={"white"} {...props} {...marginProps} />;
};
