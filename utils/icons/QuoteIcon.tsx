"use client";
import { ChakraProps, Icon } from "@chakra-ui/react";
import React from "react";
import { PiQuotesFill } from "react-icons/pi";

const QuoteIcon = (props: ChakraProps) => {
  return <Icon as={PiQuotesFill} {...props} />;
};

export default QuoteIcon;
