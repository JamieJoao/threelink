import { MainRoute } from 'routes'
import { ThemeProvider } from 'context/ThemeContext'
import { UserProvider } from 'context/UserContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook, faInstagram, faYoutube, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faChevronUp, faTrash } from '@fortawesome/free-solid-svg-icons'

import 'styles/global.sass'

library.add(faChevronDown, faChevronUp, faTrash, faLinkedin, faFacebook, faInstagram, faYoutube, faTiktok, faGithub)

const TreeLink = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        
        <MainRoute />
        
      </UserProvider>
    </ThemeProvider>
  )
}

export default TreeLink
