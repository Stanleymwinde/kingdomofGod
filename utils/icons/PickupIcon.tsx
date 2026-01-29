"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaTruckPickup } from "react-icons/fa6";

const PickupIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaTruckPickup} {...props} />;
};

export default PickupIcon;
