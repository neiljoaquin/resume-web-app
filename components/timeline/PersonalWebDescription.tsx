import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import TechUsedComponent from "./TechUsedComponent";
import TimelineCard from "./TimelineCard";

export default function PersonalWebDescription() {
  return (
    <TimelineCard
      date={"2022 June"}
      description={"Started working on this personal website"}
    >
      <Divider></Divider>
      <Box pt={"3"}>
        <TechUsedComponent
          tech={"Infra Tech used:"}
          techUsed={"Oracle Cloud, Kubernetes, Docker, Terraform"}
        />
      </Box>
    
      <Divider />
      <Box pt={"3"}>
        <TechUsedComponent
          tech={"Web Tech used:"}
          techUsed={"Nginx, Next.js, React, Chakra UI, Node.js"}
        />
      </Box>

      <Divider />
      <Box pt={"3"}>
        <Text fontSize={"sm"}>
          I know it&#39;s a little bit of an overkill to use Kubernetes on this
          use case but I&#39;m just interested in Kubernetes and the
          microservices architecture.
        </Text>
      </Box>
    </TimelineCard>
  );
}
