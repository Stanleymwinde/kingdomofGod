"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaMapLocationDot } from "react-icons/fa6";

const TravelInfo = (props: ChakraProviderProps) => {
  return <Icon as={FaMapLocationDot} {...props} />;
};

export default TravelInfo;
