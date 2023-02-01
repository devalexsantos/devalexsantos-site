import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { lightMode } from '../styles/themes/lightMode'
import { darkMode } from '../styles/themes/darkMode'
import { Layout } from '@/layout';
import { GlobalStyle } from '@/styles/global';

interface ThemeModeContextProps {
  darkTheme: boolean,
  handleChangeTheme: ()=> void
}

export const ThemeModeContext = createContext({} as ThemeModeContextProps)

interface ThemeModeContextProviderProps{
  children: React.ReactNode
}

export function ThemeModeContextProvider({children}: ThemeModeContextProviderProps){
  const [darkTheme, setDarkTheme] = useState(true)

  function handleChangeTheme() {
    setDarkTheme(!darkTheme)
    localStorage.setItem('@devalexsantos-site-theme', JSON.stringify(darkTheme.toString()));
  }

  useEffect(()=> {
    const darkThemeInLocalStorage = localStorage.getItem('@devalexsantos-site-theme');
    if(darkThemeInLocalStorage){
      const convertData = JSON.parse(darkThemeInLocalStorage)
      if(convertData === 'false'){
        setDarkTheme(true)
      } else {
        setDarkTheme(false)
      }
    }
  },[])


  return(
    <ThemeModeContext.Provider value={{darkTheme, handleChangeTheme}}>
      <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
      <Layout>
      {children}
      </Layout>
      <GlobalStyle />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}