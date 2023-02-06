import { ThemeModeContextProvider } from '@/contexts/ThemeModeContext'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {


  return (
  <ThemeModeContextProvider>
    <NextNProgress />
    <Component {...pageProps} />
  </ThemeModeContextProvider>
  )
}
