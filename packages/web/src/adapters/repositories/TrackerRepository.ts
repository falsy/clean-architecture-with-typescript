import { API_URL, TRACKER_LIST } from "../../constants"
import {
  ITrackerRepository,
  ITrackerDTO,
  IDeliveryDTO,
  ICarrierDTO,
  TrackerDTO,
  ITracker
} from "domains"
import IBrowserStorage from "../infrastructures/interfaces/IBrowserStorage"
import IClientHTTP from "../infrastructures/interfaces/IClientHTTP"

export default class TrackerRepository implements ITrackerRepository {
  private readonly clientHTTP: IClientHTTP
  private readonly browserStorage: IBrowserStorage

  constructor(clientHTTP: IClientHTTP, browserStorage: IBrowserStorage) {
    this.clientHTTP = clientHTTP
    this.browserStorage = browserStorage
  }

  async getDelivery(
    carrier: ICarrierDTO,
    trackingNumber: string
  ): Promise<IDeliveryDTO> {
    try {
      const { id: carrierId } = carrier
      const res = await this.clientHTTP.get(
        `${API_URL}/tracker/${carrierId}/${trackingNumber}`
      )
      const { data } = await res.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async getTrackers(): Promise<ITrackerDTO[]> {
    try {
      const data = await this.browserStorage.getItem(TRACKER_LIST)
      const trackerList = data[TRACKER_LIST]

      if (typeof trackerList !== "string") {
        return []
      }

      const parseJSON = JSON.parse(trackerList)
      if (parseJSON === null || !Array.isArray(parseJSON)) {
        return []
      }

      return parseJSON.map((tracker: ITrackerDTO) => {
        return new TrackerDTO({
          id: tracker.id,
          carrierId: tracker.carrierId,
          label: tracker.label,
          trackingNumber: tracker.trackingNumber,
          memos: tracker.memos
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  async addTracker(tracker: ITracker): Promise<boolean> {
    const data = await this.getTrackers()

    try {
      const newTrackers = data.concat(tracker)
      const parseString = JSON.stringify(newTrackers)

      const innerData = await this.browserStorage.setItem(
        TRACKER_LIST,
        parseString
      )

      return innerData
    } catch (error) {
      console.error(error)
    }
  }

  async updateTracker(tracker: ITracker): Promise<boolean> {
    const data = await this.getTrackers()

    try {
      const newTrackers = data.map((target) => {
        return target.id === tracker.id ? tracker : target
      })

      const innerData = await this.browserStorage.setItem(
        TRACKER_LIST,
        JSON.stringify(newTrackers)
      )

      return innerData
    } catch (error) {
      console.error(error)
    }
  }

  async deleteTracker(trackerId: string): Promise<boolean> {
    const data = await this.getTrackers()

    try {
      const newTrackers = data.filter((target) => {
        return target.id !== trackerId
      })

      const innerData = await this.browserStorage.setItem(
        TRACKER_LIST,
        JSON.stringify(newTrackers)
      )

      return innerData
    } catch (error) {
      console.error(error)
    }
  }

  async clearTrackers(): Promise<boolean> {
    try {
      const data = await this.browserStorage.removeItem(TRACKER_LIST)

      return data
    } catch (error) {
      console.error(error)
    }
  }
}
