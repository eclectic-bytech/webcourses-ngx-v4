export class JetstreamUser {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  email_verified_at: string
  current_team_id: number
  profile_photo_path: string
  created_at: string
  updated_at: string
  profile_photo_url: string
  current_team: {
    id: number
    user_id: number
    name: string
    personal_team: boolean
    created_at: string
    updated_at: string
  }
  all_teams:
    {
      id: number
      user_id: number
      name: string
      personal_team: boolean
      created_at: string
      updated_at: string
      membership?: {
        user_id: number
        team_id: number
        role: string
        created_at: string
        updated_at: string
      }
    }[]
  two_factor_enabled: boolean
}
