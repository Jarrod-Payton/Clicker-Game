import { AppState } from "../AppState"
import Pop from "../utils/Pop"

class GameService {
  newPrice(oldPrice) {
    const fourth = oldPrice / 4
    const newPrice = Math.floor(Math.random() * fourth + 3)
    return newPrice
  }
  setActive(gameId) {
    if (gameId == 0) {
      AppState.activeGame = AppState.defaultGame
    } else {
      const found = AppState.madeGames.filter(g => g.id == gameId)
      console.log(found)
      if (found.length == 1) {
        AppState.activeGame = found[0]
      } else {
        Pop.toast("This URL doesn't work so we are sending you to the default game")
        AppState.activeGame = AppState.defaultGame
      }
    }
  }
  click() {
    AppState.activeGame.points += AppState.activeGame.amplifier
  }
  purchaseAmplifier1() {
    if (AppState.activeGame.points >= AppState.activeGame.cost1) {
      AppState.activeGame.amplifier += AppState.activeGame.amplifier1
      AppState.activeGame.points -= AppState.activeGame.cost1
      AppState.activeGame.cost1 = this.newPrice(AppState.activeGame.cost1)
    } else {
      Pop.toast("Not enough points")
    }
  }
  purchaseAmplifier2() {
    if (AppState.activeGame.points >= AppState.activeGame.cost2) {
      AppState.activeGame.amplifier += AppState.activeGame.amplifier2
      AppState.activeGame.points -= AppState.activeGame.cost2
      AppState.activeGame.cost2 = this.newPrice(AppState.activeGame.cost2)
    } else {
      Pop.toast("Not enough points")
    }
  }
  purchaseAmplifier3() {
    if (AppState.activeGame.points >= AppState.activeGame.cost3) {
      AppState.activeGame.amplifier += AppState.activeGame.amplifier3
      AppState.activeGame.points -= AppState.activeGame.cost3
      AppState.activeGame.cost3 = this.newPrice(AppState.activeGame.cost3)
    } else {
      Pop.toast("Not enough points")
    }
  }
  purchaseAmplifier4() {
    if (AppState.activeGame.points >= AppState.activeGame.cost4) {
      AppState.activeGame.amplifier += AppState.activeGame.amplifier4
      AppState.activeGame.points -= AppState.activeGame.cost4
      AppState.activeGame.cost4 = this.newPrice(AppState.activeGame.cost4)
    } else {
      Pop.toast("Not enough points")
    }
  }
  purchaseAmplifier5() {
    if (AppState.activeGame.points >= AppState.activeGame.cost5) {
      AppState.activeGame.amplifier += AppState.activeGame.amplifier5
      AppState.activeGame.points -= AppState.activeGame.cost5
      AppState.activeGame.cost5 = this.newPrice(AppState.activeGame.cost5)
    } else {
      Pop.toast("Not enough points")
    }
  }
  saveGame() {
    console.log('HEllo')
    if (AppState.activeGame.id !== 0) {
      for (let g = 0; g < AppState.madeGames.length; g++) {
        if (AppState.madeGames[g].id == AppState.activeGame.id) {
          AppState.madeGames[g] = AppState.activeGame
        }
      }
      Pop.toast("Game Saved", 'success')
    } else {
      AppState.defaultGame = AppState.activeGame
    }
  }
}

export const gameService = new GameService()