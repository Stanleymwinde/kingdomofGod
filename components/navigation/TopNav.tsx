import Socials from "@/common/socials";
import { contactsData, marginX } from "@/utils/constants";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const TopNav = () => {
  return (
    <Box bg="yellow.400" py=".8rem">
      <Flex
        marginX={marginX}
        justify={{ base: "center", sm: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        align="center"
        color="black"
        gap={{ base: 2, sm: 1 }}
      >
        <Flex
          gap={{ base: 1, sm: 3 }}
          flexDir={{ base: "column", sm: "row" }}
          align={{ base: "center", sm: "start" }}
        >
          {contactsData.map((item, i) => (
            <Link href={item.link} key={i}>
              <Flex
                key={i}
                align="center"
                gap={1}
                // textAlign="center"
                _hover={{
                  color: "brand.black",
                  textDecor: "underline",
                }}
              >
                <Box as={item.icon} color="black" fontSize={"lg"} />

                <Text fontSize="md">{item.label}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Flex align="center" gap={2}>
          <Socials bg="black" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
