import { GlobalStyle } from '@/styles/global'
import { lightMode } from '../styles/themes/lightMode'
import { darkMode } from '../styles/themes/darkMode'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from '@/layout'

export default function App({ Component, pageProps }: AppProps) {
  const [darkTheme, setDarkTheme] = useState(true)
  function handleChangeTheme() {
    setDarkTheme(!darkTheme)
  }


  return (
    <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
      <Layout darkIsSelected={darkTheme} changeTheme={handleChangeTheme}>
      <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}
