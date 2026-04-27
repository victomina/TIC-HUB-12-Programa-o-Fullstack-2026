import axios from 'axios'

const api = axios.create()

interface IHttp {
  get(path: string, params: unknown, baseURL?: string): Promise<unknown>
  post(path: string, body: unknown, baseURL?: string): Promise<unknown>
  put(path: string, body: unknown, baseURL?: string): Promise<unknown>
  delete(path: string, params: unknown, baseURL?: string): Promise<unknown>
}
export class HttpClient implements IHttp {
  get(path: string, params: unknown, baseURL?: string): Promise<unknown> {
    return api.get(path, { params, baseURL }).then((response) => response.data)
  }
  post(path: string, body: unknown, baseURL?: string): Promise<unknown> {
    return api.post(path, body, { baseURL }).then((response) => response.data)
  }
  put(path: string, body: unknown, baseURL?: string): Promise<unknown> {
    return api.put(path, body, { baseURL }).then((response) => response.data)
  }
  delete(path: string, params: unknown, baseURL?: string): Promise<unknown> {
    return api.delete(path, { params, baseURL }).then((response) => response.data)
  }
}

export const httpClient = new HttpClient()
