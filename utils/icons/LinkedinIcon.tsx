"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa6";

const LinkedinIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaLinkedinIn} {...props} />;
};

export default LinkedinIcon;
