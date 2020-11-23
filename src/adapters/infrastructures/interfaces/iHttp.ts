export interface IHttp {
  get(request: { url: string }): Promise<any>
  post(request: { url: string, body?: unknown }): Promise<any>
}