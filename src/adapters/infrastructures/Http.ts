import {IHttp, IRequestOption} from "./interfaces/iHttp"
import {Logger} from "../../domains/utils/Logger";

class Http implements IHttp {

  request(requestOption: IRequestOption): Promise<any> {
    const option: RequestInit = {method: requestOption.method}

    if (requestOption?.headers) option.headers = new Headers(requestOption.headers)
    if (requestOption?.body) option.body = JSON.stringify(requestOption.body)

    return fetch(requestOption.url, option)
        .then(res => res.json())
        .catch((e) => Logger.e(e))
  }

}

export default Http
