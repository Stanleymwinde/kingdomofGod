"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { IoMdPricetags } from "react-icons/io";

const PriceIcon = (props: ChakraProviderProps) => {
  return <Icon as={IoMdPricetags} {...props} />;
};

export default PriceIcon;
