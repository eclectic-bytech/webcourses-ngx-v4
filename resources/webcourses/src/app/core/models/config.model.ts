/*
  Live compiled dev uses public/webcourses/config.json - it's updated with every recompile.
  Compiled app uses public/config.json - it's never auto-updated.
*/

export class Config {
  public api: {
    'domain': string,
    'route': string
  }
  public cookies: {
    'domain': string
  }
  public assetsPath: string
  public domain: string
  public logoutRedirectPath: string
  public devMode: boolean
  public freeAccessCode: string
}
