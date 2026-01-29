"use client";

import { ChakraProviderProps, Icon } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const YoutubeIcon = (props: ChakraProviderProps) => {
  return <Icon as={FaYoutube} {...props} />;
};

export default YoutubeIcon;
