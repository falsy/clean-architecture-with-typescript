import IUserDTO from "domains/dtos/interfaces/IUserDTO"
import UserDTO from "../../dtos/UserDTO"

describe("UserDTO", () => {
  it("should set all properties correctly", () => {
    const params: IUserDTO = {
      id: "12345",
      name: "Falsy",
      email: "falsy@mail.com",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-02T00:00:00Z"
    }

    const user = new UserDTO(params)

    expect(user.id).toBe("12345")
    expect(user.name).toBe("Falsy")
    expect(user.email).toBe("falsy@mail.com")
    expect(user.createdAt).toEqual("2023-01-01T00:00:00Z")
    expect(user.updatedAt).toEqual("2023-01-02T00:00:00Z")
  })
})
