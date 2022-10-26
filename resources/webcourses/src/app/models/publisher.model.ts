import { Theme } from "./theme.model"

export class Publisher {
  public id: number
  public name: string
  public website: string
  public contact_fname: string
  public contact_lname: string
  public contact_email: string
  public contact_phone: string
  public country: string
  public province: string
  public city: string
  public theme: Theme
  public created_at: string
  public updated_at: string
}
