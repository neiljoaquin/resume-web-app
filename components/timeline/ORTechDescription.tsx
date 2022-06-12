import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import TechUsedComponent from "./TechUsedComponent";
import TimelineCard from "./TimelineCard";

export default function ORTechDescription() {
  return (
    <TimelineCard
      date={"2019 July"}
      description={"Started working for OR Technologies as a Software Engineer"}
    >
      <Text fontSize={"sm"} fontWeight={"bold"}>
        Android and iOS apps:
      </Text>
      <Text fontSize={"sm"} pl={"3"} pb={"2"}>
        Apps were mainly used to interface with the nodes using technologies
        such as IR, BLE and NFC.
      </Text>
      <TechUsedComponent
        tech={"Tech used:"}
        techUsed={"Java, Kotlin, Swift, Objective C, Flutter and Dart"}
      />

      <Divider></Divider>
      <Box pt={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          Embedded Devices:
        </Text>
        <Text fontSize={"sm"} pl={"3"} pb={"2"}>
          Organic Response&#39;s main product that is mainly used for IoT
          lighting. We also refer to them as &#34;nodes&#34;.
        </Text>
        <TechUsedComponent
          tech={"Tech used:"}
          techUsed={"C and Wirepas tech stack"}
        />
      </Box>

      <Divider></Divider>
      <Box pt={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          CI/CD Pipelines:
        </Text>
        <Text fontSize={"sm"} pl={"3"} pb={"2"}>
          The pipelines for embedded devices and mobile apps (Android and iOS)
          are used to automate development, testing and deployment.
        </Text>
        <TechUsedComponent
          tech={"Tech used:"}
          techUsed={"Jenkins and Bitrise"}
        />
      </Box>

      <Divider></Divider>
      <Box pt={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          IoT device:
        </Text>
        <Text fontSize={"sm"} pl={"3"} pb={"2"}>
          The IoT device or as we call it, the gateway, is what we use as a
          middleman for our web app portal to be able to communicate with our
          nodes.
        </Text>
        <TechUsedComponent
          tech={"Tech used:"}
          techUsed={"Python and Rigado tech stack"}
        />
      </Box>

      <Divider></Divider>
      <Box pt={"2"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          Web Portal:
        </Text>
        <Text fontSize={"sm"} pl={"3"} pb={"2"}>
          The web app portal is like the central hub of the IoT system where all
          of the node&#39;s data are collected. We can also use this to
          interface with the nodes remotely.
        </Text>
        <TechUsedComponent
          tech={"Tech used:"}
          techUsed={"Java, Spring Boot and Hibernate"}
        />
      </Box>
    </TimelineCard>
  );
}
