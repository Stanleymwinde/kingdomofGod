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
      <Box bg="blackAlpha.800" py={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <VStack gap={12}>
            <Heading
              size="xl"
              textAlign="center"
              color="white"
              letterSpacing="widest"
            >
              THE KINGDOM DISTINCTIVE
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
              {[
                {
                  title: "Divine Government, Not Religion",
                  text: "We do not represent another religious system. We proclaim the eternal government of God — His rule, His order, and His authority restored in humanity through Christ.",
                },
                {
                  title: "Christ as Sole Builder",
                  text: "We do not build personal ministries, empires, or brands. Jesus Christ alone builds His Ekklesia. Our role is alignment, obedience, and faithful stewardship.",
                },
                {
                  title: "Kingdom Above Systems",
                  text: "Political powers rise and fall. Institutions shift. Cultures evolve. The Kingdom of God stands unshaken, superior to every human construct.",
                },
                {
                  title: "Governed People, Not Gathered Crowds",
                  text: "The Ekklesia is not a building or denomination. It is a governing people — called out to embody Heaven’s culture and reflect divine authority on earth.",
                },
              ].map((item) => (
                <Box
                  key={item.title}
                  p={8}
                  bg="gray.900"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    transform: "translateY(-6px)",
                    borderColor: "yellow.400",
                    boxShadow: "0 10px 30px rgba(255, 215, 0, 0.1)",
                  }}
                  transition="all 0.4s ease"
                >
                  <Heading size="md" mb={4} color="yellow.400">
                    {item.title}
                  </Heading>
                  <Text color="whiteAlpha.900" lineHeight="1.9" fontSize="md">
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
