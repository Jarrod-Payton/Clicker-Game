import { AppState } from "../AppState"
import Pop from "../utils/Pop"

class DefaultPurchasingService {
  click() {
    AppState.defaultGame.points += AppState.defaultGame.amplifier
  }
  purchaseUpgrade(increase, cost) {
    if (AppState.defaultGame.points >= cost) {
      AppState.defaultGame.points -= cost
      cost += Math.floor(Math.random() * 10)
      AppState.defaultGame.amplifier += increase
      return cost
    } else {
      Pop.toast('Not enough points')
    }
  }
}

export const defaultPurchasingService = new DefaultPurchasingService()