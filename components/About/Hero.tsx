import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box
        position="relative"
        bgGradient="to-r"
        gradientFrom={"blackAlpha.800"}
        gradientTo={"blackAlpha.600"}
        py={{ base: 20, md: 28 }}
      >
        <Container maxW="7xl">
          <VStack align="start" gap={6} maxW="3xl">
            <Text color="yellow.400" fontWeight="semibold" letterSpacing="wide">
              ABOUT US
            </Text>

            <Heading size={{ base: "2xl", md: "3xl" }} lineHeight="1.1">
              Independent Insurance Advice You Can Trust
            </Heading>

            <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.8">
              Intent Insurance Agency is built on trust, transparency, and a
              deep commitment to protecting what matters most to individuals,
              families, and businesses across Kenya.
            </Text>

            <HStack gap={4} pt={4}>
              <Link href="/contact-us">
                <Button
                  size="lg"
                  bg="yellow.400"
                  color="black"
                  _hover={{ bg: "yellow.300" }}
                >
                  Talk to an Advisor
                </Button>
              </Link>
              <Link href={"/our-covers"}>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="whiteAlpha.400"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  View Our Covers
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
