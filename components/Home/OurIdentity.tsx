import { Box, Container, Stack, Text, Heading, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bgGradient={"to-b"}
      gradientFrom={"#1a1f2b"}
      gradientTo={"#05070c"}
      color="white"
      display="flex"
      alignItems="center"
    >
      <Container maxW="4xl">
        <Stack gap={16} textAlign="center">
          {/* WHO WE ARE */}
          <Stack gap={3}>
            <Text
              fontSize="sm"
              letterSpacing="0.3em"
              textTransform="uppercase"
              color="yellow.400"
            >
              Who We Are
            </Text>

            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="semibold"
            >
              Our Identity
            </Heading>
          </Stack>

          {/* Divider */}
          <HStack justify="center" gap={4}>
            <Box h="1px" w="40px" bg="yellow.400" opacity={0.6} />
            <Text color="yellow.400" fontSize="lg">
              ✦
            </Text>
            <Box h="1px" w="40px" bg="yellow.400" opacity={0.6} />
          </HStack>

          {/* Main Paragraph */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.9"
            maxW="3xl"
            mx="auto"
            color="whiteAlpha.900"
          >
            We submit our lives, voices, resources, influence, and assignments
            to the will, ways, culture, laws, and righteousness of the Kingdom
            of God.
          </Text>

          {/* Gold Statements */}
          <Stack gap={4} color="yellow.400">
            <Text fontSize="xl">We stand as ambassadors, not founders</Text>
            <Text fontSize="xl">Stewards, not owners</Text>
            <Text fontSize="xl">Servants, not monarchs</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
