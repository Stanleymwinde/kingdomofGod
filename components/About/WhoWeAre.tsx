import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const WhoWeAre = () => {
  return (
    <Box bg={"gray.50"}>
      {" "}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
          <VStack align="start" gap={6}>
            <Heading size="xl">Who We Are</Heading>

            <Text lineHeight="1.9">
              Kingdom of God is a faith-centered community committed to
              advancing God's kingdom through service, compassion, and spiritual
              growth. We believe in empowering individuals to live out their
              divine purpose and make a meaningful impact in their communities.
            </Text>

            <Text lineHeight="1.9">
              We serve{" "}
              <Text as="span" color="yellow.400" fontWeight="semibold">
                faithful individuals seeking spiritual community
              </Text>
              . Our mission is to support your spiritual journey, foster
              meaningful connections, and help you discover and fulfill your
              God-given calling within our kingdom-focused fellowship.
            </Text>

            <Text lineHeight="1.9">
              From spiritual growth to community service, we walk with you every
              step of the way.
            </Text>
          </VStack>
          <Image
            src="/who-we-are.webp"
            alt="Who We Are"
            w="full"
            h="auto"
            borderRadius={"md"}
            overflow={"hidden"}
          />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
          {/* APPROACH */}
          <Image
            src="/approach.jpg"
            alt="Our Approach"
            w="full"
            h="auto"
            borderRadius={"md"}
            overflow={"hidden"}
          />{" "}
          <VStack
            align="start"
            gap={6}
            p={8}
            bg="whiteAlpha.50"
            borderRadius="2xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Heading size="xl">Our Approach</Heading>

            <Text lineHeight="1.9">
              At Kingdom of God, you're not just another member — you're a
              valued part of our spiritual family.
            </Text>

            <Text lineHeight="1.9">
              We take time to understand your spiritual needs and goals before
              recommending ways to deepen your faith and strengthen your
              connection to God's purpose.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
