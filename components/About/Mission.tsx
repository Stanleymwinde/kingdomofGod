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
              To advance God's kingdom by serving our community with integrity,
              compassion, and excellence in all that we do.
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
            <Heading size="2xl">God's Kingdom and reach to humanity</Heading>
            <Text lineHeight="1.9">
              We are committed to spreading the Gospel and extending God's
              kingdom through community outreach, discipleship, and humanitarian
              service across all nations and cultures.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Mission;
