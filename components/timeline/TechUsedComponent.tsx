import { HStack, Text } from "@chakra-ui/react";

export default function TechUsedComponent({
    tech,
    techUsed
} : {
    tech: string;
    techUsed: string;
}) {
  return (
    <HStack>
      <Text fontSize={"sm"} w={"100%"}>
        {tech}
      </Text>
      <Text fontSize={"sm"} w={"100%"}>
        {techUsed}
      </Text>
    </HStack>
  );
}
