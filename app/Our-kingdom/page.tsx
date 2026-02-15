"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function page() {
  return (
    <Box bg="black" color="gray.100" py={{ base: 20, md: 32 }}>
      <Container maxW="4xl">
        <VStack
          gap={12}
          align="center"
          textAlign="center"
          divideX={"2rem"}
          divideColor={"gold"}
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            letterSpacing="widest"
          >
            THE KINGDOM ABOVE ALL KINGDOMS
          </Heading>

          <Text fontSize="xl" lineHeight="tall" color="gray.300">
            Human history is filled with kingdoms — political empires, religious
            institutions, economic systems, and cultural powers. Yet Scripture
            reveals that God’s intention is not to reform these systems, but to
            establish His Kingdom above them all.
          </Text>

          <Text fontSize="lg" lineHeight="tall" color="gray.400">
            The Kingdom of God is not in competition with earthly powers; it
            outlasts them. It does not seek influence — it embodies authority.
            It does not negotiate permanence — it is eternal.
          </Text>
        </VStack>

        <Box mt={28}>
          <VStack gap={8}>
            <Heading fontSize="2xl" fontWeight="semibold">
              Supremacy of Divine Government
            </Heading>

            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              Every empire has risen and fallen. Every ideology has shifted.
              Every human structure eventually bends under the weight of time.
              Yet the Kingdom of God remains unshaken.
            </Text>

            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              This is not the rise of churches over churches, nor ministries
              over ministries. It is the supremacy of God’s government over
              every human construct.
            </Text>

            <Text
              fontSize="xl"
              fontStyle="italic"
              color="gold"
              textAlign="center"
            >
              “The mountain of the Lord’s house shall be established as the
              highest of the mountains… and all nations shall flow to it.” —
              Isaiah 2:2
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
