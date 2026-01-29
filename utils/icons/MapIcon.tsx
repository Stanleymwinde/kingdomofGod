"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";

const MapIcon = (props: ChakraProps) => {
  return <Icon as={RiMapPin2Fill} {...props} />;
};

export default MapIcon;
