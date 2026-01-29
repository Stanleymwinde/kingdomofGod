"use client";

import {
  Box,
  Button,
  CloseButton,
  Drawer,
  IconButton,
  IconProps,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { navItems } from "@/utils/constants";
import { ArrowRightIcon } from "@/utils/icons";

const MobileNav = ({ color }: { color: IconProps["color"] }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navigate = (link: string) => {
    setOpen(false);
    router.push(link);
  };

  return (
    <Box>
      {/* Trigger */}
      <IconButton
        aria-label="menu"
        onClick={() => setOpen(true)}
        as={RxHamburgerMenu}
        zIndex={2}
        w="30px"
        h="30px"
        color={color}
        bg="none"
        _hover={{ bg: "none" }}
      />

      <Drawer.Root
        open={open}
        placement="start"
        size="xs"
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Drawer.Backdrop />

          <Drawer.Positioner>
            <Drawer.Content bg="primary">
              {/* Close button */}
              <Drawer.CloseTrigger asChild>
                <CloseButton
                  size="lg"
                  color="brand.white"
                  position="absolute"
                  top="4"
                  right="4"
                />
              </Drawer.CloseTrigger>

              <Drawer.Header />

              <Drawer.Body mt={5}>
                <Stack
                  direction="column"
                  align="flex-start"
                  fontWeight="300"
                  lineHeight="44px"
                  fontSize="20px"
                  color="brand.white"
                >
                  {navItems.map((nav) => (
                    <Text
                      key={nav.label}
                      onClick={() => navigate(nav.href)}
                      fontWeight="600"
                      fontSize="xl"
                      _hover={{
                        color: "brand.dark",
                        cursor: "pointer",
                      }}
                    >
                      {nav.label}
                    </Text>
                  ))}

                  <Link href="/inquiry">
                    <Stack direction="row" align="center">
                      <ArrowRightIcon />
                      <Button colorScheme="blue" w="100%" borderRadius="xl">
                        Request a Quote
                      </Button>
                    </Stack>
                  </Link>
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default MobileNav;
