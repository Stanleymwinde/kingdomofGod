"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";

const SupportIcon = (props: ChakraProviderProps) => {
  return <Icon as={BiSupport} {...props} />;
};

export default SupportIcon;
