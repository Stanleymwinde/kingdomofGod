"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";

const CallbackIcon = (props: ChakraProviderProps) => {
  return <Icon as={FiPhoneCall} {...props} />;
};

export default CallbackIcon;
