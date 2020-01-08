import { SessionRepositoryImpl } from "../../domains/interfaces/repositories/session";
import RemoteInfrastructureImpl from "../../domains/interfaces/infrastructures/Remote";

class SessionRepository implements SessionRepositoryImpl {
  readonly infrastructure: RemoteInfrastructureImpl;

  constructor(infrastructure: RemoteInfrastructureImpl) {
    this.infrastructure = infrastructure;
  }

  login(id: string, pw: string) {
    return this.infrastructure.login(id, pw);
  }
}

export default SessionRepository;
