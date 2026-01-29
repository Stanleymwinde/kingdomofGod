"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaTiktok } from "react-icons/fa6";

const TiktokIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaTiktok} {...props} />;
};

export default TiktokIcon;
