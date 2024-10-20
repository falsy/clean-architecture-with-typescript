import { DeliveryStateVO } from "domains"

export default class DeliveryStateGenerator {
  static getState(
    status: "상품준비중" | "상품인수" | "배달출발" | "배달완료" | "상품이동중"
  ) {
    switch (status) {
      case "상품준비중":
        return new DeliveryStateVO({
          id: "preparing_item",
          name: "상품준비중"
        })
      case "상품인수":
        return new DeliveryStateVO({
          id: "item_received",
          name: "상품인수"
        })
      case "배달출발":
        return new DeliveryStateVO({
          id: "out_for_delivery",
          name: "배달출발"
        })
      case "배달완료":
        return new DeliveryStateVO({
          id: "delivered",
          name: "배달완료"
        })
      case "상품이동중":
        return new DeliveryStateVO({
          id: "in_transit",
          name: "상품이동중"
        })
    }
  }
}
