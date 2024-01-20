import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'
import MainPage from './components/Products/MainPage'
 

const App = () => {

  const context = useContext(ThemeContext);
  const { theme } = context;


  return (
   
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <MainPage />
        </>
      </ThemeProvider>
    
  )
}

export default App