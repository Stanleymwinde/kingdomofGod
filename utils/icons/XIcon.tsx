"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";

const XIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaXTwitter} {...props} />;
};

export default XIcon;
