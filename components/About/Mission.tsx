import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const Mission = () => {
  return (
    <>
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
          <VStack align="start" gap={6}>
            <Image
              src="/mission.webp"
              alt="Our Mission"
              w="full"
              h="auto"
              borderRadius={"md"}
              overflow={"hidden"}
            />
            <Heading size="2xl">Our Mission</Heading>
            <Text lineHeight="1.9">
              To make insurance accessible, reliable, and stress-free by putting
              clients first and delivering trusted professional advice.
            </Text>
          </VStack>

          <VStack align="start" gap={6}>
            <Image
              src="/national-reach.webp"
              alt="Our Mission"
              w="full"
              h="auto"
              borderRadius={"md"}
              overflow={"hidden"}
            />
            <Heading size="2xl">Local Expertise, National Reach</Heading>
            <Text lineHeight="1.9">
              With deep understanding of the Kenyan market, we serve clients
              across Nairobi, Mombasa, Kisumu, Eldoret, Murang’a, and beyond.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Mission;
