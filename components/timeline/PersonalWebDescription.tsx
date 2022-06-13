import { Box, Divider, } from "@chakra-ui/react";
import { TechUsedComponent, TechUsedItem } from "./TechUsedComponent";
import TimelineCard from "./TimelineCard";

const techItems: TechUsedItem[] = [
  {
    tech: "Infra Tech used:",
    techUsed: ["Kubernetes",  "Docker", "Terraform", "Oracle Cloud" ],
  },

  {
    tech: "Web Tech used:",
    techUsed: ["Nginx", "React", "Next.js", "Node.js", "Chakra UI"],
  },
];

export default function PersonalWebDescription() {
  return (
    <TimelineCard
      date={"2022 June"}
      description={"Started working on this personal website"}
    >
      {techItems.map((item) => (
        <Box key={item.tech}>
          <Divider></Divider>
          <Box pt={3}>
            <TechUsedComponent techUsedItem={item} key={item.tech} />
          </Box>
        </Box>
      ))}
    </TimelineCard>
  );
}
