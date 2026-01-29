"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";

const PhoneIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaPhone} {...props} />;
};

export default PhoneIcon;
