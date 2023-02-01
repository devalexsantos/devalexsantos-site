import { ThemeModeContextProvider } from '@/contexts/ThemeModeContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {


  return (
  <ThemeModeContextProvider>
    <Component {...pageProps} />
  </ThemeModeContextProvider>
  )
}
