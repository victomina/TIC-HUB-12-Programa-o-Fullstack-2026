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
    this.$instance.interceptors.request.use((config)=>{
      const token = localStorage.getItem('token')
      if(token){
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    })
    this.$instance.interceptors.response.use((response)=>{
      return response
    })
  }
}

const api = new AxiosConfig().setconfig()
export default api
