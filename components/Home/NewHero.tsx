"use client";

import { Box, Flex, Text, Button, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box minH="90vh" bg="white">
      {/* Hero */}
      <Box position="relative" minH="calc(100vh - 80px)">
        <Image
          src="/hero-throne.jpg" // replace with city image
          alt="Nairobi City"
          fill
          style={{ objectFit: "cover" }}
        />

        <Box position="absolute" inset={0} bg="blackAlpha.600" />

        <Flex
          position="relative"
          zIndex={1}
          h="full"
          align="center"
          justify="flex-start"
          px={{ base: 4, md: 12 }}
          py={{ base: 4, md: "12rem" }}
        >
          <VStack
            align="start"
            maxW="600px"
            gap={6}
            color="white"
            textAlign={"left"}
          >
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              lineHeight="1.1"
            >
              Insurance Solutions for Your Most Valuable Assets
            </Text>

            <Text fontSize="md" color="whiteAlpha.900">
              At Dawit Insurance Agency Limited, we serve the insurance needs of
              our customers through provision of thoughtful consultation. This
              leads to coverage at a cost that adds value to our relationship.
            </Text>

            <HStack gap={4} pt={2}>
              <Button variant="outline" colorScheme="whiteAlpha">
                Learn More
              </Button>
              <Button colorScheme="green">Our Covers</Button>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
