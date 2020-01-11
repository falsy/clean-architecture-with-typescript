import { TokenDTO } from "../infrastructures/Remote";

export interface SessionPresenterImpl {
  login(id: string, pw: string): Promise<TokenDTO>;
}