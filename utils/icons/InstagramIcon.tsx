"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { SiInstagram } from "react-icons/si";

const InstagramIcon = (props: ChakraProviderProps) => {
  return <Icon as={SiInstagram} {...props} />;
};

export default InstagramIcon;
