import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  madeGames: [],
  defaultGame:
  {
    points: 0,
    amplifier: 1,
    cost1: 25,
    amplifier1: 1,
    cost2: 50,
    amplifier2: 5,
    cost3: 100,
    amplifier3: 10,
    cost4: 150,
    amplifier4: 20,
  }
})
