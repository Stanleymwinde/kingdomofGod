import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function page() {
  return (
    <Box bg="gray.900" color="gray.100" py={{ base: 20, md: 32 }}>
      <Container maxW="5xl">
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
            CHRIST THE KING
          </Heading>

          <Text fontSize="xl" lineHeight="tall" color="gray.300">
            Jesus Christ did not come to start a religion. He came to announce,
            demonstrate, and restore the Kingdom of God.
          </Text>
        </VStack>

        <Box mt={24}>
          <VStack gap={8} align="start">
            <Heading fontSize="2xl" fontWeight="semibold">
              The Revealed King
            </Heading>

            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              He alone proclaimed the Kingdom. He embodied its culture,
              manifested its authority, and revealed the heart of its King. The
              Kingdom is inseparable from the King.
            </Text>

            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              Ownership belongs to Him. Authority flows from Him. Succession is
              determined by Him.
            </Text>

            <Text
              fontSize="xl"
              fontStyle="italic"
              color="gold"
              textAlign="center"
              w="100%"
            >
              “I will build My Ekklesia.” — Matthew 16:18
            </Text>

            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              We do not build personal kingdoms, ministries, or empires. We
              align with what He is already building. The Ekklesia is His
              governing people — called out, commissioned, and authorized to
              reflect Heaven on earth.
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
