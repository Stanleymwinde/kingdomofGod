"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { GiJetFighter } from "react-icons/gi";

const JetIcon = (props: ChakraProviderProps) => {
  return <Icon as={GiJetFighter} {...props} />;
};

export default JetIcon;
