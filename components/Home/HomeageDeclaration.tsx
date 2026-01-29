"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function HomageDeclaration() {
  return (
    <Box
      position="relative"
      minH="80vh"
      color="white"
      bgGradient={"to-b"}
      gradientFrom={"#1a1f2b"}
      gradientTo={"#05070c"}
      px={{ base: 4, md: 16 }}
      py={{ base: 16, md: 24 }}
    >
      {/* Heading */}
      <VStack gap={3} textAlign="center" mb={16}>
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="semibold"
          letterSpacing="widest"
          color="yellow.400"
          fontFamily="serif"
        >
          Homage Declaration
        </Text>
        <Text fontStyle="italic" color="yellow.200">
          To the Eternal King and His Unshakable Kingdom
        </Text>
        <Box w="60px" h="2px" bg="yellow.400" mt={4} />
      </VStack>

      {/* Content */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 12, lg: 20 }}
        align="center"
      >
        {/* Image */}
        <Box position="relative" w={{ base: "100%", lg: "45%" }}>
          <Box
            borderRadius="xl"
            overflow="hidden"
            boxShadow="0 30px 80px rgba(0,0,0,0.8)"
          >
            <Image
              src="/sacred-scroll.jpg" // replace with your image
              alt="Homage Scroll"
              width={800}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          <Box
            position="absolute"
            bottom={-6}
            right={-6}
            bg="blackAlpha.700"
            border="1px solid"
            borderColor="yellow.400"
            px={4}
            py={3}
            borderRadius="md"
            fontStyle="italic"
            fontSize="sm"
          >
            "I will build My Ekklesia."
            <br />
            <Text as="span" color="yellow.300">
              — Matthew 16:18
            </Text>
          </Box>
        </Box>

        {/* Text */}
        <VStack align="start" gap={6} w={{ base: "100%", lg: "55%" }}>
          <Text lineHeight="1.9" color="whiteAlpha.900">
            We declare our total homage, allegiance, and submission to the
            Kingdom of God, the only eternal, divine, and unshakable government.
          </Text>

          <Text lineHeight="1.9" color="whiteAlpha.900">
            We acknowledge{" "}
            <Text as="span" color="yellow.300">
              Jesus Christ
            </Text>{" "}
            alone as King of Kings and Lord of Lords, the Builder of the
            Ekklesia, the Head of the Body, and the rightful Ruler of heaven and
            earth.
          </Text>

          <Text lineHeight="1.9" color="whiteAlpha.900">
            We confess that the Kingdom of God is not a church, a movement, a
            ministry, or a brand, but God’s{" "}
            <Text as="span" color="yellow.300">
              original government
            </Text>
            , established before time, revealed through Christ, and advancing by
            divine authority.
          </Text>

          <Box
            mt={4}
            p={6}
            w="full"
            bg="blackAlpha.600"
            borderLeft="3px solid"
            borderColor="yellow.400"
            borderRadius="md"
          >
            <Text mb={3} fontWeight="semibold">
              We proclaim that:
            </Text>
            <Box as={"ul"} gap={3} pl={4} listStyleType="circle">
              <li>
                The Kingdom belongs to{" "}
                <Text as="span" color="yellow.300">
                  God
                </Text>
              </li>
              <li>
                The authority belongs to{" "}
                <Text as="span" color="yellow.300">
                  Christ
                </Text>
              </li>
              <li>
                The glory belongs to the{" "}
                <Text as="span" color="yellow.300">
                  Lord alone
                </Text>
              </li>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
