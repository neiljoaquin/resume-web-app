import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useDisclosure,
  VStack,
  Text,
  useColorModeValue,
  Collapse,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function TimelineCard({
  date,
  description,
  children,
}: {
  date: string;
  description: string;
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={"100%"}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={useColorModeValue("black", "white")}
      p={6}
    >
      <Flex direction={"column"}>
        <Flex>
          <VStack align={"normal"}>
            <Heading fontSize={{ base: "xl" }}>{date}</Heading>
            <Text>{description}</Text>
          </VStack>
          <Spacer></Spacer>
          <Center>
            <IconButton
              size={"md"}
              icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              aria-label={"Open Detailed Description"}
              onClick={isOpen ? onClose : onOpen}
              display={children != null ? "md" : "none"}
            />
          </Center>
        </Flex>
        <Collapse in={isOpen} unmountOnExit={true}>
          <Box display={isOpen && children != null ? "md" : "none"}>
            {children}
          </Box>
        </Collapse>
      </Flex>
    </Box>
  );
}
