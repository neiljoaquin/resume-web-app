import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Head from "next/head";
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const colors = {
  primaryBackground: "#ffffff",
  primaryAccent: "#e6e6e6",
  neonAccent: "#ff944d",
  primaryText: "#0d0d0d",
  // '#26292e'
};

const theme = extendTheme({
  colors,
  fonts: {
    poppins: `'Poppins', sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Neil Joaquin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
