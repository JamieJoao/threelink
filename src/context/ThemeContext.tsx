import { createContext, ReactNode, useState } from "react"

type ThemeType = 'dark' | 'light'

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}