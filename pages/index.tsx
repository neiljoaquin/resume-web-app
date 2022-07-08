import { Center, Flex, Heading, SlideFade, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const isActive = router.pathname === "/";
  return (
    <Flex alignItems="center" justifyContent="center" flex={"1"}>
      <SlideFade in={isActive} offsetY='20px'>
        <Center>
          <VStack spacing={2}>
            <Heading fontSize={{ base: "4xl", md: "6xl" }}>
              Neil Joaquin
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }}>Melbourne Based</Text>
            <Text fontSize={{ base: "sm", md: "xl" }} pb={1}>
              Software Engineer | Gamer | Gin Lover
            </Text>
            <a
              target="_blank"
              href={
                "https://www.linkedin.com/in/neil-jonathan-joaquin-457906121"
              }
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ fontSize: 35 }} />
            </a>
          </VStack>
        </Center>
      </SlideFade>
    </Flex>
  );
};

export default Home;
