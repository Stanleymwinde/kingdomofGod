import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Cta = () => {
  return (
    <>
      {" "}
      <Box bg="yellow.400" color="black" py={20}>
        <Container maxW="7xl">
          <Stack
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <Stack>
              <Heading size="lg">Ready to get insured?</Heading>
              <Text color="black.100">
                Get your quote in minutes and enjoy complete peace of mind.
              </Text>
            </Stack>
            <Button size="lg" colorPalette="blackAlpha">
              Get a Quote Now
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Cta;
