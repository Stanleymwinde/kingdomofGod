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
              <Heading size="lg">Ready to join the Kingdom of God?</Heading>
              <Text color="black">
                Accept Jesus Christ as your Savior and experience eternal
                salvation and abundant life.
              </Text>
            </Stack>
            <Button size="lg" colorPalette="blackAlpha">
              Accept Jesus Christ
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Cta;
