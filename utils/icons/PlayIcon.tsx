"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";

const PlayIcon = (props: ChakraProps) => {
  return <Icon as={FaPlayCircle} {...props} />;
};

export default PlayIcon;
