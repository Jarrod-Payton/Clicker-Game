<template>
  <div class="row m-0">
    <div class="col-12 mt-2">
      <div class="d-flex justify-content-between">
        <div class="card elevation-3">
          <div class="card-body">
            <h3>Points: {{ points }}</h3>
          </div>
        </div>
        <div class="card elevation-3">
          <div class="card-body">
            <h3>Amplifier: {{ amplifier }}</h3>
          </div>
        </div>
        <div class="card elevation-3">
          <div class="card-body">
            <h3>Extra: {{ points }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card vh20 elevation-3 selectable m-3" @click="tap()">
        <div class="card-body h-100">
          <h1 class="h-100 centered">Tap</h1>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div
        class="card vh20 elevation-3 selectable"
        @click="IncreaseAmplifier(1)"
        v-if="points >= cost"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase (Costs {{ cost }} Points)
          </h4>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
    <div class="col-4"></div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { purchasingService } from "../services/PurchasingService";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    return {
      IncreaseAmplifier(amount) {
        purchasingService.purchaseUpgrade(amount);
      },
      tap() {
        purchasingService.click();
      },
      points: computed(() => AppState.points),
      amplifier: computed(() => AppState.amplifier),
      cost: computed(() => AppState.cost),
    };
  },
};
</script>

<style scoped lang="scss">
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
.h-100 {
  height: 100%;
}

.vh20 {
  height: 20vh;
}
</style>
