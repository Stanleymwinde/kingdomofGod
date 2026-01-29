"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
const TrainerIcon = (props: ChakraProviderProps) => {
  return <Icon as={PiChalkboardTeacherDuotone} {...props} />;
};

export default TrainerIcon;
