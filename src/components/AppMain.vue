<script>
import AppCardImg from "./AppCardImg.vue";
import AppCardMatte from "./AppCardMatte.vue";
export default {
  components: { AppCardImg, AppCardMatte },
};
</script>

<template>
  <main>
    <section>
      <div class="d-flex p-3 menu-carosel">
        <AppCardImg v-for="n in 4" />
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row articles-view">
          <div
            v-for="index in 3"
            :class="index != 2 ? 'col-3 articles' : 'col-6'"
          >
            <AppCardMatte />
            <AppCardMatte v-if="index != 2" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <h2 class="col-6 align-items-center">LIFESTYLE & STORIES</h2>

          <div class="col-6 lifestyle-tag">
            <p>ALL</p>
            <p>LIFESTYLE</p>
            <p>STORIES</p>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <AppCardMatte />
          </div>
          <div class="col-4">
            <div>
              <div>
                <AppCardMatte />
              </div>
              <p>cose varie</p>
              <h3>scritta</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.menu-carosel {
  background-color: #f3f3f3;
}

.articles-view {
  padding: 20px 0;
  .articles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.lifestyle-tag {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
  //   perché h2 e p hanno margin bottom diversi
  p {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #535352;
    border-radius: 5px;
    color: white;
  }
}
</style>
