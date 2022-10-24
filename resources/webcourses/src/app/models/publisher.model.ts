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
  public theme: {
    label: string
    path: string
    bootstrap_nav: string
    headerBar: boolean|string
    sideBar: boolean|string
    mainArea: boolean|string
    logo: string
    publisherHome: string
    created_at: string
    updated_at: string
  }
  public created_at: string
  public updated_at: string
}
