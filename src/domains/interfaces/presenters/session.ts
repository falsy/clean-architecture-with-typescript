import { TokenDTO } from "../infrastructures/remote";

export interface SessionPresenterImpl {
  login(id: string, pw: string): Promise<TokenDTO>;
}