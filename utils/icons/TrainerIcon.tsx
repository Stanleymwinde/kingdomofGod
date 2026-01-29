"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
const TrainerIcon = (props: ChakraProps) => {
  return <Icon as={PiChalkboardTeacherDuotone} {...props} />;
};

export default TrainerIcon;
