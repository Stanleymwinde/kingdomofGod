"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { IoBonfire } from "react-icons/io5";

const FireIcon = (props: ChakraProviderProps) => {
  return <Icon as={IoBonfire} {...props} />;
};

export default FireIcon;
