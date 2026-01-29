"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const MainFooter = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      direction="column"
      px={4}
      bgColor="#202a42"
      position="relative"
      overflow="hidden"
    >
      {/* Sunlight Rays / Divine Glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="1200px"
        h="1200px"
        bg={`
          radial-gradient(
            ellipse at center,
            rgba(202, 162, 77, 0.25) 0%,
            rgba(202, 162, 77, 0.18) 20%,
            rgba(202, 162, 77, 0.10) 35%,
            rgba(202, 162, 77, 0.04) 50%,
            rgba(202, 162, 77, 0.0) 65%
          )
        `}
        filter="blur(90px)"
        opacity={0.9}
        zIndex={0}
      />

      {/* Main Manifesto Card */}
      <Box
        position="relative"
        zIndex={1}
        maxW="900px"
        w="100%"
        bgGradient="linear(to-r, #2b3142, #1b2133)"
        border="1px solid rgba(255,255,255,0.08)"
        borderRadius="2px"
        px={{ base: 6, md: 14 }}
        py={{ base: 10, md: 16 }}
        textAlign="center"
        boxShadow="0 20px 60px rgba(0,0,0,0.45)"
      >
        {/* Crown */}
        <Flex justify="center" mb={8}>
          <Box
            w="56px"
            h="56px"
            borderRadius="full"
            bg="black"
            border="1px solid #caa24d"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="28px"
            color="#caa24d"
          >
            👑
          </Box>
        </Flex>

        {/* Quote */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="1.9"
          fontStyle="italic"
          color="rgba(255,255,255,0.95)"
          textShadow="0 2px 12px rgba(0,0,0,0.6)"
        >
          “We pledge our full allegiance to the Kingdom of God and our homage to
          Jesus Christ alone, the eternal King. We do not build our own kingdom;
          we represent His. We exist to unveil, live, and proclaim the
          government of God on earth.”
        </Text>
      </Box>

      {/* Scripture Section */}
      <Container
        position="relative"
        zIndex={1}
        maxW="container.md"
        mt={16}
        textAlign="center"
      >
        <Text fontSize="md" color="rgba(255,255,255,0.85)" mb={2}>
          For of Him, and through Him, and to Him are all things.
        </Text>

        <Text fontSize="md" color="#caa24d" mb={6}>
          To Him be glory forever.
        </Text>

        <Text
          fontSize="2xl"
          fontWeight="600"
          letterSpacing="0.05em"
          color="rgba(255,255,255,0.95)"
        >
          Amen.
        </Text>

        {/* Divider */}
        <Box w="80px" h="1px" bg="rgba(255,255,255,0.2)" mx="auto" my={10} />

        {/* Footer Text */}
        <Text
          fontSize="xs"
          letterSpacing="0.25em"
          color="rgba(255,255,255,0.6)"
          mb={2}
        >
          A GCPS WEBSITE MANIFESTO
        </Text>

        <Text fontSize="sm" color="#caa24d">
          The Kingdom of God — Humanity’s Original Blueprint
        </Text>
      </Container>
    </Flex>
  );
};

export default MainFooter;
