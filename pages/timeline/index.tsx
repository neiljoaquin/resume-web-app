import {
  Center,
  Flex,
  Heading,
  Box,
  Text,
  VStack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import ORTechDescription from "../../components/timeline/ORTechDescription";
import PersonalWebDescription from "../../components/timeline/PersonalWebDescription";
import SamsungDescription from "../../components/timeline/SamsungDescription";
import TimelineCard from "../../components/timeline/TimelineCard";

const Timeline: NextPage = () => {
  return (
    <Flex
      h={"fit-content"}
      w="100%"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Center h="100%" w={{ base: "100%", md: "50%" }} p={4} pb={10}>
        <Flex
          alignItems={"normal"}
          h="100%"
          w="100%"
          justifyContent={"left"}
          direction={"column"}
          pt={4}
        >
          <Box
            w="fit-content"
            borderBottomStyle={"solid"}
            borderBottomWidth={"2px"}
            borderColor={"neonAccent"}
          >
            <Heading fontSize={{ base: "3xl", md: "3xl" }}>Timeline</Heading>
          </Box>

          <VStack pt={6} spacing={"4"}>
            <PersonalWebDescription/>
            <ORTechDescription/>

            <TimelineCard
              date={"2019 July"}
              description={"Moved to Australia"}
            >
            </TimelineCard>

            <TimelineCard
              date={"2017 January"}
              description={
                "Graduated from University of the Philippines - Diliman"
              }
            >
                <Text pt={3} fontSize={"sm"}>Bachelor of Science in Computer Science</Text>
            </TimelineCard>

            <SamsungDescription/>

            <TimelineCard
              date={"2015 August - 2016 June"}
              description={
                "Worked as an Undergraduate Student Researcher at University of the Philippines - Diliman"
              }
            >
                <Text pt={3} fontSize={"sm"}>Algorithms and Complexity Laboratory</Text>
            </TimelineCard>
          </VStack>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Timeline;
