"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaRegCalendarDays } from "react-icons/fa6";
const CalendarIcon = (props: ChakraProps) => {
  return <Icon as={FaRegCalendarDays} {...props} />;
};

export default CalendarIcon;
