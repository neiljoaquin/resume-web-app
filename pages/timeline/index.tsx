import {
    Center,
    Flex,
    Heading,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import type { NextPage } from "next";
  import { Text } from "@chakra-ui/react";

const Timeline: NextPage = () => {
    return (
      <Flex
        h="100vh"
        bg={useColorModeValue("primaryBackground", "darkModeBackground")}
        alignItems="center"
        justifyContent="center"
      >
      </Flex>
    );
  };
  
  export default Timeline;