import IUserDTO from "domains/dtos/interfaces/IUserDTO"

export default interface IUserRepository {
  getUser(): Promise<IUserDTO>
}
