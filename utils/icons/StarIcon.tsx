"use client";
import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const StarIcon = (props: ChakraProviderProps) => {
  return <Icon as={AiFillStar} {...props} />;
};

export default StarIcon;
