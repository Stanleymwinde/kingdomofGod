"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { IoGitNetwork } from "react-icons/io5";

const NetworkIcon = (props: ChakraProviderProps) => {
  return <Icon as={IoGitNetwork} {...props} />;
};

export default NetworkIcon;
