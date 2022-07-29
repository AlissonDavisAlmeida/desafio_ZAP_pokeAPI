import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from '@react-aria/ssr';
import { ReactNode } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>

      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  )
}

export default MyApp
