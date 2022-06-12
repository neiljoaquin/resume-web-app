import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import DescriptionSection from "./DescriptionSection";
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
      <DescriptionSection
        product={"Knox Configure Client Android app:"}
        description={
          "Knox Configure is a cloud-based service that enables enterprises to configure their company Samsung devices. The Android app works hand in hand with a Portal based web app to configure the customer's devices."
        }
        tech={"Tech used:"}
        techUsed={"Java, Android and Knox SDKs"}
      />

      <DescriptionSection
        product={"CI/CD pipeline:"}
        description={
          "The pipeline for the Android app is used to automate development and testing."
        }
        tech={"Tech used:"}
        techUsed={"Jenkins, Sonarqube, Gradle, Instrumentation and Bash"}
      />

      <DescriptionSection
        product={"Samsung Algo Challenge:"}
        description={
          "Web app that is used to facilitate coding competitions."
        }
        tech={"Tech used:"}
        techUsed={"AWS Services(Lambda, S3, Api Gateway and Cognito)"}
      />
    </TimelineCard>
  );
}
