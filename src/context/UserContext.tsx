import { createContext, ReactNode, useState } from 'react'
import { UserProfile, ProfileLink } from 'types/responses'

import JsonUser from 'data/user.json'

interface UserContextProps {
  user: UserProfile
  links: ProfileLink[]
  updateLinks: (links: ProfileLink[]) => void
}

export const UserContext = createContext({} as UserContextProps)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { photoUrl, fullname, alias, job, links: userLinks } = JsonUser
  const user: UserProfile = {
    photoUrl,
    fullname,
    alias,
    job,
  }
  const [links, setLinks] = useState<any[]>(userLinks)

  const updateLinks = (links: ProfileLink[]) => {
    setLinks(links)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        links,
        updateLinks,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}