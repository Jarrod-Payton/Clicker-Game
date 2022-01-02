<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="card elevation-3 selectable mt-3" @click="DefaultPage()">
        <div class="card-body">
          <div class="d-flex justify-content-center align-items-center">
            <h1>TO THE EXAMPLE GAME</h1>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
  <div class="row m-0">
    <div class="col-12 m-2">
      <div class="card elevation-3 p-3">
        <div class="card-title">
          <h1 class="d-flex justify-content-center">About</h1>
        </div>
        <div class="card-body">
          <h4>
            This is a clicker game creator made by
            <a
              title="Link to Lucas's LinkedIn account"
              href="https://www.linkedin.com/in/lucaspayton/"
              target="_blank"
            >
              Lucas Payton
            </a>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      DefaultPage() {
        router.push({
          name: "Default",
        });
      },
    };
  },
};
</script>

<style scoped lang="scss">
</style>
