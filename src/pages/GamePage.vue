<template>
  <div class="row m-0">
    <div class="col-12 mt-2">
      <div class="d-flex justify-content-between">
        <div class="card elevation-3">
          <div class="card-body">
            <h3>Amplifier: {{ game.amplifier }}</h3>
          </div>
        </div>
        <div class="card elevation-3">
          <div class="card-body">
            <h3>Points: {{ game.points }}</h3>
          </div>
        </div>
        <button class="save elevation-3" title="Save Game" @click="save">
          Save Game
        </button>
      </div>
    </div>
    <div class="col-12">
      <button class="btn w-100">
        <div class="card vh20 elevation-3 selectable m-3" @click="click">
          <div class="card-body h-100">
            <h1 class="h-100 centered">Tap</h1>
          </div>
        </div>
      </button>
    </div>
    <div class="col-4">
      <div
        class="card vh20 elevation-3 selectable"
        @click="click"
        v-if="game.points >= game.cost1"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase By 1 (Costs {{ game.cost1 }} Points)
          </h4>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div
        class="card vh20 elevation-3 selectable"
        @click="click"
        v-if="game.points >= game.cost2"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase By 5 (Costs {{ game.cost2 }} Points)
          </h4>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div
        class="card vh20 elevation-3 selectable"
        @click="click"
        v-if="game.points >= game.cost3"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase By 10 (Costs {{ game.cost3 }} Points)
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
import { gameService } from "../services/GameService";
import { AppState } from "../AppState";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      gameService.setActive(route.params.id);
    });
    return {
      save() {
        gameService.saveGame();
      },
      click() {
        gameService.click();
      },
      game: computed(() => AppState.activeGame),
    };
  },
};
</script>
<style scoped>
.save {
  height: 5vh;
  font-size: 1.6vh;
  background-color: rgb(108, 204, 108);
  border-radius: 1vh;
  border: white;
}
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vh20 {
  height: 20vh;
}
</style>