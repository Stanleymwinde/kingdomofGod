"use client";

import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Constitutional() {
  return (
    <>
      {" "}
      <Box position="relative" minH="30vh" overflow="hidden">
        {/* Background Image */}
        <Image
          src="/kingdom-mountain.jpg" // replace with your image
          alt="Mountain above clouds"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        {/* Dark + Gold Overlay */}
        <Box
          position="absolute"
          inset={0}
          // bg="linear-gradient(to bottom, rgba(5,10,20,0.4), rgba(2,5,12,0.95))"
          bgGradient={"to-b"}
          gradientFrom={"rgba(5,10,20,0.4)"}
          gradientTo={"rgba(2,5,12,0.95)"}
        />
        {/* Content */}
        <Flex
          position="relative"
          zIndex={1}
          minH="50vh"
          align="center"
          justify="center"
          px={{ base: 4, md: 12 }}
        >
          <VStack gap={6} textAlign="center" maxW="900px">
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="0.35em"
              textTransform="uppercase"
              color="yellow.300"
            >
              One-Page Constitutional Declaration
            </Text>

            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="semibold"
              fontFamily="serif"
              color="yellow.400"
            >
              The Foundation
            </Text>
          </VStack>
        </Flex>{" "}
      </Box>
      <Box
        bgGradient={"to-b"}
        gradientFrom={"#05070c  "}
        gradientTo={"#080c17"}
        pb={8}
      >
        <Container maxW="5xl">
          <VStack
            align="stretch"
            gap={20}
            divideY={"3px solid"}
            divideColor={"whiteAlpha.300"}
          >
            {/* Section 1 */}
            <VStack align="stretch" gap={6} color={"white"}>
              <HStack gap={4}>
                <Circle
                  size="42px"
                  border="1px solid"
                  borderColor="goldenrod"
                  color="goldenrod"
                  fontWeight="bold"
                >
                  1
                </Circle>
                <Heading
                  fontFamily="serif"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="semibold"
                >
                  Preamble
                </Heading>
              </HStack>

              <Text fontSize="md" color="gray.200" lineHeight="1.8">
                We affirm that the Kingdom of God is the supreme, eternal, and
                divine government established by God Himself. All human
                kingdoms, systems, institutions, and religious empires are
                temporary and subject to change, decline, and judgment. The
                Kingdom of God alone is uncreated, unshakable, and everlasting.
              </Text>

              <Box pl={4} borderLeft="2px solid" borderColor="goldenrod">
                <Text fontStyle="italic" color="gray.300" mb={1}>
                  “The God of heaven will set up a Kingdom that shall never be
                  destroyed.”
                </Text>
                <Text fontSize="sm" color="gray.400">
                  — Daniel 2:44
                </Text>
              </Box>
            </VStack>

            {/* Section 2 */}
            <VStack align="stretch" gap={6} color={"white"}>
              <HStack gap={4}>
                <Circle
                  size="42px"
                  border="1px solid"
                  borderColor="goldenrod"
                  color="goldenrod"
                  fontWeight="bold"
                >
                  2
                </Circle>
                <Heading
                  fontFamily="serif"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="semibold"
                >
                  Christ-Centered Foundation
                </Heading>
              </HStack>

              <Text fontSize="md" color="gray.200" lineHeight="1.8">
                We confess that Jesus Christ is the revealed King of this
                Kingdom. He alone announced it, embodied it, and continues to
                build its governing body—the Ekklesia. Ownership, authority, and
                succession belong exclusively to Him.
              </Text>

              <Box pl={4} borderLeft="2px solid" borderColor="goldenrod">
                <Text fontStyle="italic" color="gray.300" mb={1}>
                  “I must preach the good news of the Kingdom of God… for this
                  purpose I was sent.”
                </Text>
                <Text fontSize="sm" color="gray.400">
                  — Luke 4:43
                </Text>
              </Box>
            </VStack>

            {/* Section 3 */}
            <VStack align="stretch" gap={6} color={"white"}>
              <HStack gap={4}>
                <Circle
                  size="42px"
                  border="1px solid"
                  borderColor="goldenrod"
                  color="goldenrod"
                  fontWeight="bold"
                >
                  3
                </Circle>
                <Heading
                  fontFamily="serif"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="semibold"
                >
                  Kingdom Supremacy
                </Heading>
              </HStack>

              <Text fontSize="md" color="gray.200" lineHeight="1.8">
                We declare that all earthly powers and dominions will ultimately
                yield to the reign of God and of His Christ. The Kingdom of God
                is not in competition with the world's systems; it outlasts
                them.
              </Text>

              <Box pl={4} borderLeft="2px solid" borderColor="goldenrod">
                <Text fontStyle="italic" color="gray.300" mb={1}>
                  “The kingdoms of this world have become the Kingdom of our
                  Lord and of His Christ.”
                </Text>
                <Text fontSize="sm" color="gray.400">
                  — REvelation 11:15
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
