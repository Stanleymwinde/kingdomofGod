"use client";
import { ChakraProps, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const StarIcon = (props: ChakraProps) => {
  return <Icon as={AiFillStar} {...props} />;
};

export default StarIcon;
