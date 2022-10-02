export interface IRequestOption {
  readonly method: string
  readonly url: string
  readonly headers?: any
  readonly body?: any
}

export interface IHttp {
  request(requestOption: IRequestOption): Promise<any>
}

class Http implements IHttp {

  async request(requestOption: IRequestOption): Promise<any> {
    const option: RequestInit = { method: requestOption.method }

    if(requestOption?.headers) option.headers = new Headers(requestOption.headers)
    if(requestOption?.body) option.body = JSON.stringify(requestOption.body)

    try {
      const res = await fetch(requestOption.url, option)
      return await res.json()
    } catch (e) {
      return console.log(e)
    }
  }

}

export default Http
