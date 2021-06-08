import { Theme } from './../../../core/models/theme.model'

export class PublisherModel {
  id: number
  name: string
  website: string
  contact_fname: string
  contact_lname: string
  contact_email: string
  contact_phone: string
  country: string
  province: string
  city: string
  settings: {
    theme: Theme
  }
  created_at: string
  updated_at: string
}
