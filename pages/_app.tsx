import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import React from 'react';

const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Rubik', sans-serif;",
        bgColor: '#eeeeee',
      },
    },
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={myTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
