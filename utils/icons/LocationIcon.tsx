"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

const LocationIcon = (props: ChakraProviderProps) => {
  return <Icon as={MdLocationPin} {...props} />;
};

export default LocationIcon;
