"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { MdMedicalServices } from "react-icons/md";
const SafetyIcon = (props: ChakraProviderProps) => {
  return <Icon as={MdMedicalServices} {...props} />;
};

export default SafetyIcon;
