import { navItems } from "@/utils/constants";
import { Button, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const NewNAv = () => {
  return (
    <>
      {/* Navbar */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 12 }}
        py={4}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <HStack gap={3}>
          <Image
            src="/logo.png" // replace with your logo
            alt="Kingdom Of God "
            width={70}
            height={60}
          />
          <VStack align="start" gap={0}>
            <Text fontWeight="bold">Kingdom Of God</Text>
            <Text fontSize="sm" color="gray.500">
              Humanity’s Original Blueprint
            </Text>
          </VStack>
        </HStack>

        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <Text
                fontSize="sm"
                fontWeight={item.label === "Home" ? "semibold" : "normal"}
                borderBottom={item.label === "Home" ? "2px solid" : "none"}
                borderColor="green.500"
                pb={1}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </HStack>

        <HStack gap={3}>
          <Button variant="outline" size="sm">
            Get Involved
          </Button>
          <Button colorScheme="green" size="sm">
            Give
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default NewNAv;
