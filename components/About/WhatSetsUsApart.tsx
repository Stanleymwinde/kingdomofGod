import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const WhatSetsUsApart = () => {
  return (
    <>
      <Box bg="blackAlpha.700" py={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <VStack gap={12}>
            <Heading size="xl" textAlign="center" color="white">
              What Sets Us Apart
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
              {[
                {
                  title: "Independent & Unbiased",
                  text: "Honest, transparent advice focused on your best interests — not commissions.",
                },
                {
                  title: "Access to Top Insurers",
                  text: "We work with Kenya’s leading insurance providers to give you competitive options in one place.",
                },
                {
                  title: "Fast Claims Support",
                  text: "From notification to settlement, we ensure claims are handled professionally and fairly.",
                },
                {
                  title: "Digital + Human Touch",
                  text: "Reach us via WhatsApp, phone, email, or face-to-face — whatever works for you.",
                },
              ].map((item) => (
                <Box
                  key={item.title}
                  p={6}
                  bg="gray.900"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color={"yellow.400"}
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "yellow.400",
                  }}
                  transition="all 0.3s ease"
                >
                  <Heading size="md" mb={3}>
                    {item.title}
                  </Heading>
                  <Text color="whiteAlpha.900" lineHeight="1.8">
                    {item.text}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default WhatSetsUsApart;
