import { Box, Text, Center, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("primaryBackground", "darkModeBackground")}
      w="100%"
    >
      <Center py={4}>
        <Text
          color={useColorModeValue("primaryText", "darkModeText")}
          fontSize="small"
          fontFamily="poppins"
        >
          © 2022 Neil Joaquin
        </Text>
      </Center>
    </Box>
  );
}
