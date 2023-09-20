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
    <!-- sezione video yt -->
    <section>
      <div class="container">
        <div class="d-flex">
          <div class="yt-video">
            <img src="../../public/img/sddefault.webp" alt="" />
            <div class="yt-video-icon">
              <div class="yt-title">
                <h2>titolo video</h2>
                <div class="d-flex">
                  <div class="me-3">
                    <i>icona</i>
                    <p>parola</p>
                  </div>
                  <div class="me-3">
                    <i>icona</i>
                    <p>parola</p>
                  </div>
                </div>
              </div>
              <div class="mt-auto p-3">youtube</div>
            </div>

            <div class="yt-play">play</div>
          </div>

          <div class="play-aside">
            <div class="play-list-numTot">
              <div>ICONA</div>
              <div>
                <h4>Video Playlist</h4>
                <p>1/7 Videos</p>
              </div>
            </div>
            <div class="play-songs">
              <div v-for="index in 5">
                <div class="song">
                  <div>{{ index }}</div>
                  <img src="../assets/img/default.webp" alt="" />
                  <div class="song-title">
                    <p class="song-title">Overload season 4 - Official</p>
                    <p>Trailer 3 | AniTV</p>
                  </div>
                </div>
                <div v-if="index != 5" class="border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div class="d-flex p-3">
        <div v-for="n in 6" :class="n != 1 || n != 6 ? 'card-margin' : ''">
          <AppCardMatte />
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
  margin: 10px 0;

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
//sezione video yt
.yt {
  height: 500px;
}
.yt-video {
  position: relative;
  color: white;
  width: 70%;
  height: 500px;
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }
}
.yt-video-icon,
.yt-play {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.yt-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.yt-video-icon {
  display: flex;
  flex-direction: column;
}
.yt-play {
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
}
.play-aside {
  width: 30%;
}
.play-list-numTot {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #333333;
  color: white;
  width: 100%;
  padding: 10px;
  height: 80px;
  * {
    margin: 0;
  }
}
.play-songs {
  height: 420px;
  overflow: auto;
}
.song {
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 80px;
    border-radius: 5px;
  }
  .song-title {
    p {
      margin: 0;
      font-size: small;
    }
  }
}
// .youtube {
//   height: 520px;
// }
// .video-yt {
//   position: relative;
// }
// .video-icon {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;

//   display: flex;
//   align-content: space-between;
//   flex-wrap: wrap;
//   .video-title {
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//   }
// }
// .play-video {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   color: white;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .playlist-yt {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   overflow: auto;
//   .playlist-yt-img {
//     width: 30%;
//   }
// }
</style>
