import { Card as ChakraCard } from "@chakra-ui/react";
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <ChakraCard
      h="100%"
      p="20px"
      border="1px solid #2d3748"
      backgroundColor="#21262d"
    >
      {children}
    </ChakraCard>
  );
}

