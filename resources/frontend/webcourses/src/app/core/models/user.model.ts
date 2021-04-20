export class User {
  public profile: {
    id: number
    publisherId: number
    email: string
    emailVerified: number
    firstName: string
    lastName: string
    username: string
    picture: string
    country: string
  }
  public roles: string
}
