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
              Kingdom of God, GCCps..more info
            </Heading>

            <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.8">
              Kingdom of God, GCCps is dedicated to spreading the Gospel and
              building a community rooted in faith, hope, and love. We're
              committed to serving our congregation and community with integrity
              and spiritual guidance.
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
                  View Our Devotionals
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
