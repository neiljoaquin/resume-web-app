import { HStack, Tag } from "@chakra-ui/react";

export interface TechUsedItem {
  tech: string;
  techUsed: string[];
}

export function TechUsedComponent({
  techUsedItem,
}: {
  techUsedItem: TechUsedItem;
}) {
  return (
    <HStack
      pb={1}
      align={"normal"}
      shouldWrapChildren={true}
      wrap={"wrap"}
      justify={"normal"}
      spacing={1}
    >
      {/* <Text fontSize={"sm"}>{techUsedItem.tech}</Text> */}
      {techUsedItem.techUsed.map((item) => (
        <Tag
          variant="subtle"
          size={"sm"}
          colorScheme={"orange"}
          borderRadius={"md"}
          key={item}
        >
          {item}
        </Tag>
      ))}
    </HStack>
  );
}
