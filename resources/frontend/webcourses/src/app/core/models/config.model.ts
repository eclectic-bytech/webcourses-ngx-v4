export class Config {
  public api: {
    v1: { path: string, customDomain: string },
    v3: { path: string, customDomain: string }
  }
  public domain: string
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
