"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const MailIcon = (props: ChakraProviderProps) => {
  return <Icon as={IoMail} {...props} />;
};

export default MailIcon;
