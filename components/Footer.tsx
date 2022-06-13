import { Box, Text, Center } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box w="100%" bottom={"0"} position={"absolute"} py={4}>
      <Center >
        <Text fontSize="small">© 2022 Neil Joaquin</Text>
      </Center>
    </Box>
  );
}
