import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
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
    <Box
      bg={useColorModeValue("primaryBackground", "darkModeBackground")}
      borderBottom="1px solid #ff944d"
      w="100%"
      position="absolute"
    >
      <Center>
        <Box w={{ base: "100%", md: "50%" }} px={4}>
          <Flex
            h={{ base: 12, md: 16 }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              w={{ base: 4 }}
              h={{ base: 9 }}
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
              <Button w={{ base: 4 }} h={{ base: 9 }} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
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
              <Button w={{ base: 4 }} h={{ base: 9 }} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
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
