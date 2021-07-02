import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface ProfileLink {
  id: number
  icon: IconProp
  name: string
  url: string
}

export interface UserProfile {
  photoUrl: string
  fullname: string
  alias: string
  job: string

}