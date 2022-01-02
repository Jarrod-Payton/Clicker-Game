import { AppState } from "../AppState";

export class Game {
  constructor(data) {
    this.id = AppState.madeGames.length
    this.name = data.name
    this.points = data.points
    this.amplifier = data.amplifier
    this.cost1 = data.cost1
    this.amplifier1 = data.amplifier1
    this.cost2 = data.cost1
    this.amplifier2 = data.amplifier2
    this.cost3 = data.cost3
    this.amplifier3 = data.amplifier3
    this.cost4 = data.cost4
    this.amplifier4 = data.amplifier4
    this.cost5 = data.cost5
    this.amplifier5 = data.amplifier5
    this.backgroundImg = data.backgroundImg
    this.clickableImg = data.clickableImg
  }
}