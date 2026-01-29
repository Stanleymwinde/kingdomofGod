"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { GrUserExpert } from "react-icons/gr";
const ExpertIcon = (props: ChakraProviderProps) => {
  return <Icon as={GrUserExpert} {...props} />;
};

export default ExpertIcon;
