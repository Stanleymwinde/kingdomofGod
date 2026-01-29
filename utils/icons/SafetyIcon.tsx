"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdMedicalServices } from "react-icons/md";
const SafetyIcon = (props: ChakraProps) => {
  return <Icon as={MdMedicalServices} {...props} />;
};

export default SafetyIcon;
