"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoBonfire } from "react-icons/io5";

const FireIcon = (props: ChakraProps) => {
  return <Icon as={IoBonfire} {...props} />;
};

export default FireIcon;
