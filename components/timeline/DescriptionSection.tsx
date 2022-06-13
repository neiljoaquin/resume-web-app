import { Box, Divider, VStack, Text } from "@chakra-ui/react";
import { TechUsedComponent, TechUsedItem } from "./TechUsedComponent";

export interface DescriptionItem {
  product: string;
  description: string;
  techUseditem: TechUsedItem;
}

export function DescriptionSection({
  descriptionItem,
}: {
  descriptionItem: DescriptionItem;
}) {
  return (
    <Box>
      <Divider></Divider>
      <VStack align={"normal"} spacing={3} pt={3}>
        <VStack align={"normal"} spacing={2}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {descriptionItem.product}
          </Text>
          <Text fontSize={"sm"} pl={"3"}>
            {descriptionItem.description}
          </Text>
        </VStack>
        <TechUsedComponent techUsedItem={descriptionItem.techUseditem} />
      </VStack>
    </Box>
  );
}
