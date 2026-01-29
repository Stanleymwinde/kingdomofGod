"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";

const SupportIcon = (props: ChakraProps) => {
  return <Icon as={BiSupport} {...props} />;
};

export default SupportIcon;
