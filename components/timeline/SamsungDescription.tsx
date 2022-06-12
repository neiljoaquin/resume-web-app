import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import TechUsedComponent from "./TechUsedComponent";
import TimelineCard from "./TimelineCard";

export default function SamsungDescription() {
  return (
    <TimelineCard
      date={"2016 September - 2019 May"}
      description={
        "Worked for Samsung Research and Development Philippines as a Software Engineer"
      }
    >
      <Text fontSize={"sm"} fontWeight={"bold"}>Knox Configure Client Android app:</Text>
      <Text fontSize={"sm"} pl={"3"} pb={"2"}>
        Knox Configure is a cloud-based service that enables enterprises to
        configure their company Samsung devices. The Android app works hand in
        hand with a Portal based web app to configure the customer&#39;s
        devices.
      </Text>
      <TechUsedComponent
        tech={"Tech used:"}
        techUsed={"Java, Android and Knox SDKs"}
      />

      <Divider></Divider>
      <Box pt={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>CI/CD pipeline:</Text>
        <Text fontSize={"sm"} pl={"3"} pb={"2"}>
          The pipeline for the Android app is used to automate development and
          testing.
        </Text>
        <TechUsedComponent
          tech={"Tech used:"}
          techUsed={"Jenkins, Sonarqube, Gradle, Instrumentation and Bash"}
        />
      </Box>

      <Divider></Divider>
      <Box pt={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>Samsung Algo Challenge:</Text>
        <Text fontSize={"sm"} pl={"3"} pb={"2"}>
          Web app that is used to facilitate coding competitions. 
        </Text>
        <TechUsedComponent
          tech={"Tech used:"}
          techUsed={"AWS Services(Lambda, S3, Api Gateway and Cognito)"}
        />
      </Box>
    </TimelineCard>
  );
}
