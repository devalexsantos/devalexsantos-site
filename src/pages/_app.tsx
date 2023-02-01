import { GlobalStyle } from '@/styles/global'
import { lightMode } from '../styles/themes/lightMode'
import { darkMode } from '../styles/themes/darkMode'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  const [darkTheme, setDarkTheme] = useState(true)


  return (
    <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
