"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa6";
const FacebookIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaFacebookF} {...props} />;
};

export default FacebookIcon;
