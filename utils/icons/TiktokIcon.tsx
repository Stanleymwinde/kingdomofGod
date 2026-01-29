"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaTiktok } from "react-icons/fa6";

const TiktokIcon = (props: ChakraProps) => {
  return <Icon as={FaTiktok} {...props} />;
};

export default TiktokIcon;
