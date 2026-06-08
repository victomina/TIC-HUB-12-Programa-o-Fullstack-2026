import { HttpClient, type IHttp } from '../config/config'

export class RegisterRest {
  constructor(private httpClient: IHttp = new HttpClient()) {}
  registerUser(body: {
    name: string
    email: string
    password: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): Promise<any> {
    const path = 'auth/register'
    return this.httpClient.post(path, body)
  }
}
