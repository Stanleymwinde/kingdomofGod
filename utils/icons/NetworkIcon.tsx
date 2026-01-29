"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoGitNetwork } from "react-icons/io5";

const NetworkIcon = (props: ChakraProps) => {
  return <Icon as={IoGitNetwork} {...props} />;
};

export default NetworkIcon;
