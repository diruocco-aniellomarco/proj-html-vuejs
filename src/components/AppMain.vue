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
      <div class="d-flex p-3 bg-color">
        <div v-for="n in 4" :class="n != 1 || n != 4 ? 'card-margin' : ''">
          <AppCardImg />
        </div>
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

    <section class="mb-4">
      <div class="container">
        <div class="row">
          <h2 class="col-6 align-items-center">LIFESTYLE & STORIES</h2>

          <div class="col-6 right-title">
            <p>ALL</p>
            <p>LIFESTYLE</p>
            <p>STORIES</p>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-8">
            <AppCardMatte />
          </div>

          <div class="col-4 d-flex flex-column h-100">
            <div v-for="index in 3">
              <div class="small-card">
                <div class="small-card-img">
                  <AppCardMatte />
                </div>
                <div class="small-card-text">
                  <p>cose varie bla asd asd asd</p>
                  <h5>scritta</h5>
                </div>
              </div>
              <div v-if="index != 3" class="border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <div class="bg-color">
        <div class="container adv-bunner-in-the-middle">
          <img src="../../public/img/page-banner-1.webp" alt="banner pub" />
        </div>
      </div>
    </section>

    <section class="mb-4">
      <div class="container">
        <div class="row">
          <h2 class="col-6 align-items-center">FEAUTURED POSTS</h2>

          <div class="col-6 right-title"><i> freccia </i> <i> freccia </i></div>
        </div>
        <div class="d-flex justify-content-between">
          <div v-for="n in 3" :class="n == 2 ? 'card-margin' : ''">
            <AppCardImg />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <div class="container">
        <div class="row g-2">
          <div class="col-8">
            <div class="video-yt">
              <AppCardMatte />
              <div class="video-icon">
                <div>h2</div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div class="col-4 d-flex flex-column h-100">
            <div v-for="index in 3">
              <div class="small-card">
                <div class="small-card-img">
                  <AppCardMatte />
                </div>
                <div class="small-card-text">
                  <p>cose varie bla asd asd asd</p>
                  <h5>scritta</h5>
                </div>
              </div>
              <div v-if="index != 3" class="border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.bg-color {
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

.right-title {
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
.small-card {
  display: flex;
  .small-card-img {
    width: calc(100% / 2);
  }
  .small-card-text {
    padding-left: 10px;
    * {
      margin: 0;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
.border {
  margin: 15px 0;
  // display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #555555;
}

.adv-bunner-in-the-middle {
  img {
    width: 100%;
    border-radius: 5px;
    margin: 20px 0;
  }
}
.video-yt {
  position: relative;
}
.video-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
