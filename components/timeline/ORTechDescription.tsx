import DescriptionSection from "./DescriptionSection";
import TimelineCard from "./TimelineCard";

export default function ORTechDescription() {
  return (
    <TimelineCard
      date={"2019 July"}
      description={"Started working for OR Technologies as a Software Engineer"}
    >
      <DescriptionSection
        product={"Android and iOS apps:"}
        description={
          "Apps were mainly used to interface with the nodes using technologies such as IR, BLE and NFC."
        }
        tech={"Tech used:"}
        techUsed={"Java, Kotlin, Swift, Objective C, Flutter and Dart"}
      />

      <DescriptionSection
        product={"Embedded Devices:"}
        description={
          'Organic Response\'s main product that is mainly used for IoTlighting. We also refer to them as "nodes".'
        }
        tech={"Tech used:"}
        techUsed={"C and Wirepas tech stack"}
      />

      <DescriptionSection
        product={"Embedded Devices:"}
        description={
          "The pipelines for embedded devices and mobile apps (Android and iOS) are used to automate development, testing and deployment."
        }
        tech={"Tech used:"}
        techUsed={"Docker, Jenkins and Bitrise"}
      />

      <DescriptionSection
        product={"IoT device:"}
        description={
          "The IoT device or as we call it, the gateway, is what we use as a middleman for our web app portal to be able to communicate with our nodes."
        }
        tech={"Tech used:"}
        techUsed={"Python and Rigado tech stack"}
      />

      <DescriptionSection
        product={"Web Portal:"}
        description={
          "The web app portal is like the central hub of the IoT system where all of the node's data are collected. We can also use this to interface with the nodes remotely."
        }
        tech={"Tech used:"}
        techUsed={"Java, Spring Boot and Hibernate"}
      />

    </TimelineCard>
  );
}
