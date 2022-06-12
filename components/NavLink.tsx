import { ReactNode } from "react";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <ChakraLink
        px={2}
        py={1}
        border={isActive ? "2px solid #ff944d" : "2px solid transparent"}
        rounded={"lg"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("primaryAccent", "darkModeAccent"),
        }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}
