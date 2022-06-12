import {
  Center,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";

const Timeline: NextPage = () => {
  return (
    <Flex
      h="90vh"
      w="100%"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Center
        h="100%"
        w={{ base: "100%", md: "50%" }}
        // border="1px solid #ff944d"
        p={4}
      >
        <Flex
          alignItems={"normal"}
          h="100%"
          w="100%"
          justifyContent={"left"}
        //   border="1px solid #ff944d"
          direction={"column"}
        >
            <Box w="fit-content" borderBottom="2px solid #ff944d">
            <Heading
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Timeline
          </Heading>
            </Box>
          
          <Text
            fontSize={{ base: "sm", md: "md" }}
          >
            Software Developer | Gamer | Gin Lover
          </Text>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Timeline;
