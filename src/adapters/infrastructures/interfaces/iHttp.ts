export interface IRequestOption {
  readonly method: string;
  readonly url: string;
  readonly headers?: any;
  readonly body?: any;
}

export interface IHttp {
  request(requestOption: IRequestOption): Promise<any>;
}