"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { GrUserExpert } from "react-icons/gr";
const ExpertIcon = (props: ChakraProps) => {
  return <Icon as={GrUserExpert} {...props} />;
};

export default ExpertIcon;
