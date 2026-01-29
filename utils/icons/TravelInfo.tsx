"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaMapLocationDot } from "react-icons/fa6";

const TravelInfo = (props: ChakraProps) => {
  return <Icon as={FaMapLocationDot} {...props} />;
};

export default TravelInfo;
