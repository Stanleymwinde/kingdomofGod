"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { BsPersonCheckFill } from "react-icons/bs";

const TrainedPerson = (props: ChakraProviderProps) => {
  return <Icon as={BsPersonCheckFill} {...props} />;
};

export default TrainedPerson;
