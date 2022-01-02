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
        @click="IncreaseAmplifier(1, cost1)"
        v-if="points >= cost1"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase By 1 (Costs {{ cost1 }} Points)
          </h4>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div
        class="card vh20 elevation-3 selectable"
        @click="IncreaseAmplifier(5, cost5)"
        v-if="points >= cost5"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase By 5 (Costs {{ cost5 }} Points)
          </h4>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div
        class="card vh20 elevation-3 selectable"
        @click="IncreaseAmplifier(1, cost1)"
        v-if="points >= cost10"
      >
        <div class="card-body h-100">
          <h4 class="centered h-100">
            Amplifier Increase By 10 (Costs {{ cost10 }} Points)
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { purchasingService } from "../services/PurchasingService";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    const cost1 = ref(25);
    const cost5 = ref(50);
    const cost10 = ref(100);
    const cost50 = ref(150);
    const cost100 = ref(300);
    return {
      cost1,
      cost5,
      cost10,
      cost50,
      cost100,
      IncreaseAmplifierBy1(cost) {
        cost1.value = purchasingService.purchaseUpgrade1(cost);
      },
      IncreaseAmplifierBy5(cost) {
        cost5.value = purchasingService.purchaseUpgrade5(cost);
      },
      IncreaseAmplifierBy10(cost) {
        cost10.value = purchasingService.purchaseUpgrade10(cost);
      },
      IncreaseAmplifierBy50(cost) {
        cost50.value = purchasingService.purchaseUpgrade10(cost);
      },
      IncreaseAmplifierBy100(cost) {
        cost100.value = purchasingService.purchaseUpgrade10(cost);
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
