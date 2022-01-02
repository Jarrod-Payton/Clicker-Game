import { AppState } from "../AppState"

class PurchasingService {
  click() {
    AppState.points += AppState.amplifier
  }
  purchaseUpgrade(increase) {
    if (AppState.points >= AppState.cost) {
      AppState.points -= AppState.cost
      AppState.amplifier += increase
    }
  }
}

export const purchasingService = new PurchasingService()