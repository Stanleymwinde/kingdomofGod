"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const MoneyIcon = (props: ChakraProps) => {
  return <Icon as={FaMoneyBill1Wave} {...props} />;
};

export default MoneyIcon;
