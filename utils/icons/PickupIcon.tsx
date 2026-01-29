"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaTruckPickup } from "react-icons/fa6";

const PickupIcon = (props: ChakraProps) => {
  return <Icon as={FaTruckPickup} {...props} />;
};

export default PickupIcon;
