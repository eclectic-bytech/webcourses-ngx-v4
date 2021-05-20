/*
    Compiled app uses config.json from Laravel's /public. It never is auto updated.
    Live compiled dev uses config.json from webcourses' root path (/public/webcourses
    as of writing.) It's updated with every recompile.
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
  public logoutRedirectPath: string
}
