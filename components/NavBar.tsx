import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink";

interface LinkItem {
  text: string;
  href: string;
}

const Links: LinkItem[] = [{ text: "Timeline", href: "/timeline" }];

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box borderBottomStyle={"solid"} borderBottomWidth={"1px"} borderColor={"neonAccent"} w="100%">
      <Center>
        <Box w={{ base: "100%", md: "50%" }} px={4}>
          <Flex
            h={{ base: 14, md: 16 }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack
              as={"nav"}
              spacing={{ base: 2, md: 4 }}
              display={{ md: "none" }}
            >
              <NavLink href="/">Neil</NavLink>
              <IconButton
                aria-label={"Change Theme"}
                size={"md"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </HStack>

            <Box display={{ base: "none", md: "flex" }}>
              <NavLink href="/">Neil</NavLink>
            </Box>

            <HStack
              as={"nav"}
              spacing={{ base: 2, md: 4 }}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink href={link.href} key={link.text}>
                  {link.text}
                </NavLink>
              ))}
              <IconButton
                aria-label={"Change Theme"}
                size={"md"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={2} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink href={link.href} key={link.text}>
                    {link.text}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Center>
    </Box>
  );
}
