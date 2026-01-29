"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoMdPricetags } from "react-icons/io";

const PriceIcon = (props: ChakraProps) => {
  return <Icon as={IoMdPricetags} {...props} />;
};

export default PriceIcon;
