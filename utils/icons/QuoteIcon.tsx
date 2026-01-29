"use client";
import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import React from "react";
import { PiQuotesFill } from "react-icons/pi";

const QuoteIcon = (props: ChakraProviderProps) => {
  return <Icon as={PiQuotesFill} {...props} />;
};

export default QuoteIcon;
