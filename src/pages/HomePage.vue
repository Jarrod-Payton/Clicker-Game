<template>
  <div class="row">
    <div class="col-12">
      <button @click="Tap"></button>
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    const points = computed(() => AppState.points);
    return {
      tap() {},
    };
  },
};
</script>

<style scoped lang="scss">
</style>
