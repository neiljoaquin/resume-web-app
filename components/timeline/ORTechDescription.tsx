import { DescriptionItem, DescriptionSection } from "./DescriptionSection";
import TimelineCard from "./TimelineCard";

const descriptions: DescriptionItem[] = [
  {
    product: "Android and iOS apps:",
    description:
      "Apps were mainly used to interface with the nodes using technologies such as IR, BLE and NFC.",
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["Java", "Kotlin", "Swift", "Flutter", "Dart", "Objective C",],
    },
  },

  {
    product: "Embedded Devices:",
    description:
      "Organic Response\'s main product that is mainly used for IoT lighting. We also refer to them as \"nodes\".",
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["C",  "Wirepas"],
    },
  },

  {
    product: "IoT device:",
    description:
      "The IoT device or as we call it, the gateway, is what we use as a middleman for our web app portal to be able to communicate with our nodes.",
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["Python", "Rigado Tech Stack"],
    },
  },

  {
    product: "Web Portal:",
    description:
      "The web app portal is like the central hub of the IoT system where all of the node's data are collected. We can also use this to interface with the nodes remotely.",
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["Java", "Spring Boot","Hibernate"],
    },
  },
];

export default function ORTechDescription() {
  return (
    <TimelineCard
      date={"2019 July"}
      description={"Started working for OR Technologies as a Software Engineer"}
    >
      {descriptions.map((item) => (
        <DescriptionSection descriptionItem={item} key={item.product}/>
      ))}
    </TimelineCard>
  );
}
