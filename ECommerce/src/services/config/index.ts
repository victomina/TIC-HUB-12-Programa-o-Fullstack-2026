import axios from 'axios'
export class AxiosConfig {
  baseURL: string
  private $instance
  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL
    this.$instance = axios.create({
      baseURL: this.baseURL
    })
  }
  setconfig(){
    this.$instance.interceptors.request.use()
    this.$instance.interceptors.response.use()
  }
}
