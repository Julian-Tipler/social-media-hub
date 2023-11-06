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
  vertical,
  ...props
}: DividerProps) => {
  const marginProps = vertical
    ? {
        marginLeft: marginChart[margin],
        marginRight: marginChart[margin],
        orientation: "vertical" as any,
      }
    : {
        marginTop: marginChart[margin],
        marginBottom: marginChart[margin],
        orientation: "horizontal" as any,
      };
  return <ChakraDivider color={"white"} {...props} {...marginProps} />;
};
