import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function page() {
  return (
    <Box bg="gray.950" color="gray.100" py={{ base: 20, md: 32 }}>
      <Container maxW="5xl">
        <VStack gap={10} align="center" textAlign="center" divideX={"2rem"}>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            letterSpacing="widest"
          >
            OUR CORE CONVICTION
          </Heading>

          <Text fontSize={{ base: "lg", md: "2xl" }} lineHeight="tall">
            We believe the greatest crisis facing humanity today is not
            political, economic, cultural, or religious — it is a governance
            crisis. Humanity has drifted from God’s original design: life under
            the loving rule of the Creator.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} mt={24}>
          <VStack align="start" gap={6}>
            <Heading fontSize="2xl" fontWeight="semibold">
              Humanity’s Drift
            </Heading>
            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              From the beginning, humanity was designed to function under divine
              governance — reflecting Heaven’s order, wisdom, and culture upon
              the earth. The fracture of history began when man chose autonomy
              over alignment.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              Every societal crisis we witness today is evidence of a deeper
              spiritual misalignment — a departure from God’s Kingdom framework.
            </Text>
          </VStack>

          <VStack align="start" gap={6}>
            <Heading fontSize="2xl" fontWeight="semibold">
              The Kingdom Is Given
            </Heading>
            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              The Kingdom of God is not a religious system constructed by men.
              It is God’s government — His rule, His order, His life expressed
              on earth through redeemed humanity.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="gray.300">
              It is given, not earned. It is received, not engineered. The
              invitation remains open to all who will realign with the eternal
              design of Heaven.
            </Text>
          </VStack>
        </SimpleGrid>

        <Box mt={32} textAlign="center">
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontStyle="italic"
            color="gold"
          >
            “Do not fear, little flock, for it is your Father’s good pleasure to
            give you the Kingdom.” — Luke 12:32
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
