"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";

const PlayIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaPlayCircle} {...props} />;
};

export default PlayIcon;
