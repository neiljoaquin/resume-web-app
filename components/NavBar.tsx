import { ReactNode } from "react";
import { Box, Center, Flex, HStack, Link } from "@chakra-ui/react";

const Links = ["Timeline"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: 'primaryAccent',
    }}
    href={"#"}
    color={"primaryText"}
    fontFamily="poppins"
  >
    {children}
  </Link>
);

export default function NavBar() {
  return (
    <Box
      bg="primaryBackground"
      borderBottom='1px solid #ff944d'
      w="100%"
      position="absolute"
    >
      <Center>
        <Box w={{ base: "100%", md: "50%" }} px={4}>
          <Flex h={{ base: 12, md: 16}} alignItems={"center"} justifyContent={"space-between"}>
            <NavLink>Neil</NavLink>
            <HStack as={"nav"} spacing={{ base: 2, md: 4 }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}
