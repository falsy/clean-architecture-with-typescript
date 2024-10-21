import { API_URL } from "../../constants"
import { ICarrierRepository, ICarrier } from "domains"
import IClientHTTP from "../infrastructures/interfaces/IClientHTTP"

export default class CarrierRepository implements ICarrierRepository {
  private readonly clientHTTP: IClientHTTP

  constructor(clietHTTP: IClientHTTP) {
    this.clientHTTP = clietHTTP
  }

  async getCarriers(): Promise<ICarrier[]> {
    try {
      const res = await this.clientHTTP.get(`${API_URL}/carriers`)
      const data = await res.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async getCarrier(carrierId: string): Promise<ICarrier> {
    try {
      const res = await this.clientHTTP.get(`${API_URL}/carrier/${carrierId}`)
      const data = await res.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }
}
