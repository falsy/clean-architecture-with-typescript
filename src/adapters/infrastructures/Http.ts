import { IHttp } from "./interfaces/iHttp"

class Http implements IHttp {

  get(request: { url: string }): Promise<any> {
    const option = {
      method: 'GET'
    }
    
    return fetch(request.url, option)
    .then(res => res.json())
    .catch((e) => {
      console.log(e)
    })
  }

  post(request: { url: string, body?: unknown }): Promise<any> {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: request?.body ? JSON.stringify(request.body) : ''
    }

    return fetch(request.url, option)
    .then(res => res.json())
    .catch((e) => {
      console.log(e)
    })
  }

}

export default Http
