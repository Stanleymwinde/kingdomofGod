"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { RiMessage2Fill } from "react-icons/ri";

const MessageIcon = (props: ChakraProps) => {
  return <Icon as={RiMessage2Fill} {...props} />;
};

export default MessageIcon;
