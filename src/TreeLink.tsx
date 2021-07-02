import { MainRoute } from 'routes'
import { ThemeProvider } from 'context/ThemeContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faChevronUp, faTrash } from '@fortawesome/free-solid-svg-icons'

import 'styles/global.sass'

library.add(faChevronDown, faChevronUp, faTrash, faLinkedin, faFacebook, faInstagram)

const TreeLink = () => {
  return (
    <ThemeProvider>
      <MainRoute />
    </ThemeProvider>
  )
}

export default TreeLink
