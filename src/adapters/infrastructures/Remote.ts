import { RemoteInfrastructureImpl } from "../../domains/interfaces/infrastructures/Remote";
import { LoginInformation } from '../../domains/vo/LoginInfo';

class Remote implements RemoteInfrastructureImpl {

  login(LoginInfoVO: LoginInformation): Promise<string> {
    const { id, pw } = LoginInfoVO;
    console.log(`login id: ${id} / pw: ${pw}`);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve("use token value...");
      }, 1000);
    });
  }
}

export default Remote;
