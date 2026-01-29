"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { RiMessage2Fill } from "react-icons/ri";

const MessageIcon = (props: ChakraProviderProps) => {
  return <Icon as={RiMessage2Fill} {...props} />;
};

export default MessageIcon;
