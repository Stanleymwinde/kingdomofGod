import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Box position="relative" minH="calc(100vh - 80px)" overflow="hidden">
      {/* Background Image */}
      <Image
        src="/hero-throne.jpg" // replace with your uploaded image
        alt="The Kingdom of God"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Dark + Gold Overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="to-b"
        gradientFrom={"blackAlpha.700"}
        gradientTo={"blackAlpha.800"}
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={1}
        h="full"
        align="center"
        justify="center"
        px={{ base: 6, md: 12 }}
        py={{ base: "12rem", md: "12rem" }}
        textAlign="center"
      >
        <VStack gap={{ base: 10, md: 8 }} maxW="900px" color="white">
          {/* Top Pill */}
          <Box
            px={5}
            py={2}
            borderRadius="full"
            bg="blackAlpha.600"
            border="1px solid"
            borderColor="yellow.500"
          >
            <Text
              fontSize="xs"
              letterSpacing="0.25em"
              color="yellow.400"
              fontWeight="medium"
            >
              GLOBAL CHURCH PARADIGM SHIFT
            </Text>
          </Box>

          {/* Main Title */}
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.1"
            color="yellow.300"
            textTransform="uppercase"
            fontFamily="'Playfair Display', serif"
          >
            The Kingdom of God
          </Text>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontStyle="italic"
            color="whiteAlpha.800"
          >
            Humanity&apos;s Original Blueprint
          </Text>

          {/* Divider */}
          <Box w="60px" h="2px" bg="yellow.400" />

          {/* Scripture */}
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="yellow.200"
            fontStyle="italic"
            maxW="600px"
          >
            “Therefore, since we are receiving a Kingdom that cannot be shaken…”
          </Text>

          <Text fontSize="md" color="whiteAlpha.700">
            — Hebrews 12:28
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Hero;
