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
              Intent Insurance Agency is an independent insurance intermediary
              committed to making insurance simple, transparent, and truly
              client-focused.
            </Text>

            <Text lineHeight="1.9">
              We represent{" "}
              <Text as="span" color="yellow.400" fontWeight="semibold">
                you — not insurance companies
              </Text>
              . Our role is to help you compare options, understand your risks,
              and choose cover that fits your needs and budget.
            </Text>

            <Text lineHeight="1.9">
              From policy selection to claims support, we walk with you every
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
              At Intent Insurance Agency, you’re not just another policyholder —
              you’re a valued partner.
            </Text>

            <Text lineHeight="1.9">
              We take time to understand your risks and goals before
              recommending insurance solutions that genuinely protect what
              matters most.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
