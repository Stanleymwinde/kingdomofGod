"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { BsPersonCheckFill } from "react-icons/bs";

const TrainedPerson = (props: ChakraProps) => {
  return <Icon as={BsPersonCheckFill} {...props} />;
};

export default TrainedPerson;
