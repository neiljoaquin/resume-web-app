import { Center, Flex, Heading, VStack, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex h="90vh" alignItems="center" justifyContent="center">
      <Center>
        <VStack spacing={2}>
          <Heading fontSize={{ base: "4xl", md: "6xl" }}>Neil Joaquin</Heading>
          <Text fontSize={{ base: "sm", md: "xl" }}>
            Software Developer | Gamer | Gin Lover
          </Text>
          <Text fontSize={{ base: "sm", md: "xl" }}>Melbourne Based</Text>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Home;
