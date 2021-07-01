import { MainRoute } from 'routes'
import { ThemeProvider } from 'context/ThemeContext'

import 'styles/global.sass'

const TreeLink = () => {
  return (
    <ThemeProvider>
      <MainRoute />
    </ThemeProvider>
  )
}

export default TreeLink
