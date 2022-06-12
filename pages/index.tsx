import {
  Center,
  Flex,
  Heading,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import React from "react";
import { LinkedIn } from "@mui/icons-material";

const Home: NextPage = () => {
  return (
    <Flex h="80vh" alignItems="center" justifyContent="center">
      <Center>
        <VStack spacing={2}>
          <Heading fontSize={{ base: "4xl", md: "6xl" }}>Neil Joaquin</Heading>
          <Text fontSize={{ base: "sm", md: "xl" }}>Melbourne Based</Text>
          <Text fontSize={{ base: "sm", md: "xl" }} pb={2}>
            Software Developer | Gamer | Gin Lover
          </Text>
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/neil-jonathan-joaquin-457906121"}
            rel="noopener noreferrer"
          >
            <IconButton
              icon={<LinkedIn />}
              aria-label={"Open my linkedin page"}
            />
          </a>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Home;
