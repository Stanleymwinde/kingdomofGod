"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";

const MapIcon = (props: ChakraProviderProps) => {
  return <Icon as={RiMapPin2Fill} {...props} />;
};

export default MapIcon;
