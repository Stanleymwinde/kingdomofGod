"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

const ArrowRightIcon = (props: ChakraProviderProps) => {
  return <Icon as={LuArrowRight} {...props} />;
};

export default ArrowRightIcon;
