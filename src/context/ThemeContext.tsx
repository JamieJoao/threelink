import { createContext, ReactNode, useState, useEffect } from "react"

import { Wrapper } from 'components/layout'

type ThemeType = 'dark' | 'light'

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  useEffect(() => {
    updateBodyClass(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const updateBodyClass = (theme: ThemeType) => {
    document.body.className = `theme-${theme}`
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </ThemeContext.Provider>
  )
}