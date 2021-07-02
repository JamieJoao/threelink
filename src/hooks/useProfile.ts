import { useContext } from 'react'
import { UserContext } from 'context/UserContext'

export const useProfile = () => {
  const { user, links, updateLinks } = useContext(UserContext)

  return {
    user,
    links,
    updateLinks,
  }

}