import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";

const colors = {
  primaryBackground: "#ffffff",
  primaryAccent: "#e6e6e6",
  primaryText: "#0d0d0d",
  neonAccent: "orange",
  darkModeBackground: "#26292e",
  darkModeText: "#ffffff",
  darkModeAccent: "#4d4d4d",
};

const theme = extendTheme({
  colors,
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      "html, body": {
        backgroundColor: props.colorMode === "dark" ? "#26292e" : "#ffffff",
      },
      p: {
        color: props.colorMode === "dark" ? "#ffffff" : "#0d0d0d",
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Neil Joaquin</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Flex minH={"100vh"} direction={"column"}>
          <NavBar/>
          <Component {...pageProps} />
          <Footer/>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
