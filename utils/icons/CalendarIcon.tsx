"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaRegCalendarDays } from "react-icons/fa6";
const CalendarIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaRegCalendarDays} {...props} />;
};
export default CalendarIcon;
