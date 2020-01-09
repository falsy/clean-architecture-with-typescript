import { RemoteInfrastructureImpl } from "../../domains/interfaces/infrastructures/Remote";

class Remote implements RemoteInfrastructureImpl {

  login(id: string, pw: string): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("ok");
      }, 1000);
    });
  }
}

export default Remote;
