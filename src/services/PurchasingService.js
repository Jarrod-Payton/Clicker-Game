import { AppState } from "../AppState"
import Pop from "../utils/Pop"

class PurchasingService {
  click() {
    AppState.points += AppState.amplifier
  }
  purchaseUpgrade(increase, cost) {
    if (AppState.points >= cost) {
      AppState.points -= cost
      cost += Math.floor(Math.random() * 10)
      AppState.amplifier += increase
      return cost
    } else {
      Pop.toast('Not enough points')
    }
  }
}

export const purchasingService = new PurchasingService()