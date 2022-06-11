import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
    Center,
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box
        bg="primaryBackground"
        w="100%">
        <Center py={4}>
          <Text 
            color="primaryText"
            fontSize="small"
            fontFamily="poppins"
          >© 2022 Neil Joaquin</Text>
        </Center>
      </Box>
    );
  }