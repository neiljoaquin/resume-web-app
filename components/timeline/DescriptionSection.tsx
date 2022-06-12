import { Box, Divider, VStack, Text } from "@chakra-ui/react";
import TechUsedComponent from "./TechUsedComponent";

export default function DescriptionSection({
  product,
  description,
  tech,
  techUsed,
}: {
  product: string;
  description: string;
  tech: string;
  techUsed: string
}) {
  return (
    <Box>
      <Divider></Divider>
      <VStack align={"normal"} spacing={3} pt={3}>
        <VStack align={"normal"} spacing={2}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {product}
          </Text>
          <Text fontSize={"sm"} pl={"3"}>
            {description}
          </Text>
        </VStack>
        <TechUsedComponent
          tech={tech}
          techUsed={techUsed}
        />
      </VStack>
    </Box>
  );
}
