import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  madeGames: [
    {
      id: 1,
      name: "Default",
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
      cost5: 175,
      amplifier5: 25,
      cost5: 200,
      amplifier5: 30,
      backgroundImg: "https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      clickableImg: "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"
    },
    {
      id: 2,
      name: "Default",
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
      cost5: 175,
      amplifier5: 25,
      cost5: 200,
      amplifier5: 30,
      backgroundImg: "https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      clickableImg: "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"
    }
  ],
  activeGame: {},
  defaultGame:
  {
    id: 0,
    name: "Default",
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
    cost5: 175,
    amplifier5: 25,
    cost5: 200,
    amplifier5: 30,
    backgroundImg: "https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    clickableImg: "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"
  },
})
