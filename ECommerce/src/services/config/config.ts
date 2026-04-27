interface IHttp{
  get():Promise<any>
  post():Promise<any>
  put():Promise<any>
  delete():Promise<any>
}
 export class HttpClient  implements IHttp{
  get(path:string, params:any, baseURL?:string): Promise<any> {
    api.get(path, {params, baseURL}).then((response)=>{
      return response.data
    }
  }
  post(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  put(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  delete(): Promise<any> {
    throw new Error('Method not implemented.')
 }
 }
