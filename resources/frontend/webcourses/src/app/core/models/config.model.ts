/*
    Compiled app uses config.json from Laravel's /public. It never is auto updated.
    Live compiled dev uses config.json from webcourses' root path (/public/webcourses
    as of writing.) It's updated with every recompile.
*/

export class Config {
  public assetsPath: string

  public domain: string

  public logoutRedirectPath: string

  public api: {
    v1: { path: string, customDomain: string },
    v3: { path: string, customDomain: string },
    v4: { path: string, customDomain: string }
  }

  public login: string
  public auth0: {
    client_id: string,
    prompt: string,
    domain: string,
    audience: string,
    response_type: string,
    redirect_uri: string,
    scope: string
  }
  public auth0_new: {
    audience: string
    client_id: string
    domain: string
    redirect_uri: string
    return_to: string
    hack_path: string
  }
  public stripe: { key: string }
}
