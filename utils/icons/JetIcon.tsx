"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GiJetFighter } from "react-icons/gi";

const JetIcon = (props: ChakraProps) => {
  return <Icon as={GiJetFighter} {...props} />;
};

export default JetIcon;
