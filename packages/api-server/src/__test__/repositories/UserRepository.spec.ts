import { IUserDTO } from "domains"
import { UserDTO } from "adapters"
import UserRepository from "../../repositories/UserRepository"

describe("UserRepository", () => {
  let userRepository: UserRepository

  beforeEach(() => {
    userRepository = new UserRepository()
  })

  it("should be defined", () => {
    expect(userRepository).toBeDefined()
  })

  it("getUser should return a UserDTO with correct values", async () => {
    const expectedUser: IUserDTO = new UserDTO({
      id: "1",
      name: "sample",
      email: "sample@email.com",
      createdAt: userRepository["user"].createdAt,
      updatedAt: userRepository["user"].updatedAt
    })

    const result = await userRepository.getUser()

    expect(result).toBeInstanceOf(UserDTO)
    expect(result.id).toBe(expectedUser.id)
    expect(result.name).toBe(expectedUser.name)
    expect(result.email).toBe(expectedUser.email)
    expect(result.createdAt).toEqual(expectedUser.createdAt)
    expect(result.updatedAt).toEqual(expectedUser.updatedAt)
  })
})
