import { MainRoute } from 'routes'
import { ThemeProvider } from 'context/ThemeContext'

import 'styles/global.sass'

const ThreeLink = () => {
  return (
    <ThemeProvider>
      <MainRoute />
    </ThemeProvider>
  )
}

export default ThreeLink
