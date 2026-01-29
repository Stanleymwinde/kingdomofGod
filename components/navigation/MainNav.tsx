"use client";
import { marginX, navItems } from "@/utils/constants";
import { ArrowRightIcon } from "@/utils/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  const pathname = usePathname();

  function handleActiveNav(nav: string) {
    if (nav === "/") {
      return pathname === nav ? "yellow.400" : "brand.white";
    }
    return pathname.includes(nav) ? "yellow.400" : "brand.white";
  }
  return (
    <Box bg="black" color="white">
      <Flex mx={marginX} py="0.5rem" align="center" justify="space-between">
        <Link href="/">
          <Image priority src="/logo.png" alt="logo" width={100} height={160} />
        </Link>

        <Flex gap={2} hideBelow="md">
          {navItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <Text
                fontWeight="semibold"
                fontSize="lg"
                color={handleActiveNav(item.href)}
                _hover={{
                  color: "yellow.400",
                }}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </Flex>
        <Link href="/inquiry">
          <Button
            hideBelow="md"
            colorScheme="primary"
            borderRadius="xl"
            fontStyle="capitalize"
          >
            Request a Quote
            <ArrowRightIcon />{" "}
          </Button>{" "}
        </Link>

        <Box hideFrom="md">
          <MobileNav color="brand.white" />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainNav;
