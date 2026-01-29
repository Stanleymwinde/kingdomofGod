import { socials } from "@/utils/constants";
import { Box, Stack, StackProps } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  bg?: StackProps["bg"];
}

const Socials = ({ bg = "primary" }: Props) => {
  return (
    <>
      {socials.map((item, i) => (
        <Link href={item.link} key={i} target="_blank">
          <Stack
            p=".3rem"
            borderRadius="full"
            color="white"
            bg={bg}
            _hover={{
              bg: "black",
              color: "yellow.400",
            }}
          >
            <Box as={item.icon} cursor="pointer" />
          </Stack>
        </Link>
      ))}
    </>
  );
};

export default Socials;
