"use client";
import { renounceItems } from "@/utils/constants";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
  Card,
} from "@chakra-ui/react";
import { FiXCircle, FiGlobe } from "react-icons/fi";

const WhatWeRenounce = () => {
  const commitmentText =
    "We exist only to reveal, represent, and realign humanity to God's eternal government.";

  return (
    <Box
      position="relative"
      minHeight="100vh"
      color="white"
      py={8}
      bgImage="url('/hero-throne.jpg')" // your image
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0, 0, 0, 0.7)" // adjust darkness here
        zIndex={0}
      />

      <Container maxW="container.xl">
        {/* Header */}
        <VStack gap={6} textAlign="center" mb={12}>
          <Flex align="center" justify="center" gap={4} mb={4}>
            <Icon as={FiGlobe} boxSize={10} color="blue.400" />
            <Heading
              as="h1"
              size="2xl"
              bgGradient="to-r"
              gradientTo={"blue.400"}
              gradientFrom={"purple.500"}
              bgClip="text"
              fontWeight="extrabold"
            >
              OUR SACRED COMMITMENT
            </Heading>
          </Flex>

          <Text fontSize="xl" color="gray.300" maxW="3xl">
            A declaration of our purpose and what we stand against in pursuit of
            God's eternal Kingdom
          </Text>
        </VStack>

        {/* What We Renounce Section */}
        <Box mb={16}>
          <VStack gap={8} align="stretch">
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              color="yellow.400"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={3}
            >
              <Icon as={FiXCircle} />
              What We Renounce
            </Heading>

            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={6}
              flexWrap="wrap"
              justify="center"
            >
              {renounceItems.map((item, index) => (
                <Card.Root
                  key={index}
                  bg="rgba(255, 255, 255, 0.05)"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="gray.700"
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "yellow.500",
                    transition: "all 0.3s",
                  }}
                  transition="all 0.3s"
                  flex={{ base: "1 1 100%", md: "1 1 45%", lg: "1 1 23%" }}
                  minH="220px"
                >
                  <Card.Body p={6}>
                    <VStack align="start" gap={4} h="100%">
                      <Flex
                        align="center"
                        justify="center"
                        w="50px"
                        h="50px"
                        borderRadius="full"
                        bg="rgba(112, 88, 88, 0.2)"
                        border="1px solid"
                        borderColor="yellow.500"
                      >
                        <Icon as={item.icon} boxSize={6} color="yellow.400" />
                      </Flex>

                      <Heading as="h3" size="md" color="white">
                        {item.title}
                      </Heading>

                      <Text color="gray.300" fontSize="sm">
                        {item.description}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Flex>
          </VStack>
        </Box>

        {/* Commitment Statement */}
        <Box
          bgGradient="linear(to-r, blue.900, purple.900)"
          borderRadius="xl"
          p={8}
          mb={12}
          border="1px solid"
          borderColor="blue.600"
          position="relative"
          overflow="hidden"
        >
          {/* Decorative elements */}
          <Box
            position="absolute"
            top="-50px"
            right="-50px"
            w="200px"
            h="200px"
            borderRadius="full"
            bg="rgba(59, 130, 246, 0.1)"
            blur="lg"
          />
          <Box
            position="absolute"
            bottom="-50px"
            left="-50px"
            w="200px"
            h="200px"
            borderRadius="full"
            bg="rgba(139, 92, 246, 0.1)"
            blur="lg"
          />

          <VStack gap={6} textAlign="center" position="relative" zIndex={1}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              maxW="4xl"
              lineHeight="1.8"
              fontStyle="italic"
            >
              "{commitmentText}"
            </Text>

            <Flex align="center" justify="center" gap={4} mt={4}>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="blue.400"
                animation="pulse 2s infinite"
              />
              <Text color="blue.200" fontSize="sm" fontWeight="medium">
                Our Eternal Purpose • God's Government • Divine Alignment
              </Text>
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="blue.400"
                animation="pulse 2s infinite"
                animationDelay="1s"
              />
            </Flex>
          </VStack>
        </Box>

        {/* Footer Note */}
        <Text
          textAlign="center"
          color="gray.500"
          fontSize="sm"
          fontStyle="italic"
          mt={8}
        >
          This commitment stands eternal, guiding every decision and action
        </Text>
      </Container>

      {/* Add CSS animation for pulse effect */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
      `}</style>
    </Box>
  );
};
export default WhatWeRenounce;
