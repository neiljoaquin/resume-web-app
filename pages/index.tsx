import {
  Center,
  Flex,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex
      h="100vh"
      bg={useColorModeValue("primaryBackground", "darkModeBackground")}
      alignItems="center"
      justifyContent="center"
    >
      <Center>
        <VStack spacing={4}>
          <Heading
            fontFamily="poppins"
            color={useColorModeValue("primaryText", "darkModeText")}
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            Neil Joaquin
          </Heading>
          <Text
            fontFamily="poppins"
            color={useColorModeValue("primaryText", "darkModeText")}
            fontSize={{ base: "sm", md: "xl" }}
          >
            Software Developer | Gamer | Gin Lover
          </Text>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Home;
