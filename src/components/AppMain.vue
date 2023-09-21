<script>
import AppCardImg from "./AppCardImg.vue";
import AppCardMatte from "./AppCardMatte.vue";
export default {
  data() {
    return {
      caroselView: [
        {
          id: 0,
          img: "healthy-foods.webp",
          title: "The Best Healthy Food In 2022",
          date: "December 26, 2022",
          text: "",
          label: ["Food"],
        },
        {
          id: 1,
          img: "winter.webp",
          title: "The Best Winter Outfits",
          date: "December 26, 2022",
          text: "",
          label: ["Fashion"],
        },
        {
          id: 2,
          img: "photographers-mistakes.webp",
          title: "Beginner Photographr's Mistakes",
          date: "December 26, 2022",
          text: "",
          label: ["Fashion"],
        },
        {
          id: 3,
          img: "ideas-anime.webp",
          title: "Live Ideas You Might Be Anime",
          date: "December 26, 2022",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo",
          label: ["Culture", "Stories"],
        },
        {
          id: 4,
          img: "visit-france.webp",
          title: "Reasons To Visit France",
          date: "December 26, 2022",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo",
          label: ["Lifestyle", "Travel"],
        },
        {
          id: 5,
          img: "travel-alone.webp",
          title: "Traveling Alone Is Awesome",
          date: "December 26, 2022",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo",
          label: ["Stories", "Travel"],
        },
      ],
      trailers: [
        "hqdefaul1t.jpg",
        "hqdefault2.jpg",
        "hqdefault3.jpg",
        "hqdefault4.jpg",
        "hqdefault5.jpg",
        "hqdefault6.jpg",
        "hqdefault7.jpg",
      ],
    };
  },

  components: { AppCardImg, AppCardMatte },
  methods: {
    imageGenerate(imageName) {
      const imageUrl = new URL(
        "../assets/img/trailer/" + imageName,
        import.meta.url
      );

      return imageUrl.href;
    },
  },
};
</script>

<template>
  <main>
    <!-- caroselView -->
    <section>
      <div class="d-flex p-3 bg-color">
        <div class="d-flex">
          <div
            v-for="(cardItem, index) in caroselView"
            :class="index != 0 || index != 3 ? 'card-margin' : ''"
          >
            <AppCardImg
              v-show="index < 4"
              :key="cardItem.id"
              :title="cardItem.title"
              :img="cardItem.img"
              :date="cardItem.date"
              :label="cardItem.label"
            />
          </div>
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
          <div
            v-for="(cardItem, index) in caroselView"
            :class="index == 3 || index == 4 ? 'card-margin' : ''"
          >
            <AppCardImg
              v-show="index > 2"
              :key="cardItem.id"
              :title="cardItem.title"
              :img="cardItem.img"
              :date="cardItem.date"
              :text="cardItem.text"
              :button="true"
              :label="cardItem.label"
            />
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
                <div class="d-flex align-items-center">
                  <img src="../../public/img/channels4_profile.jpg" alt="" />
                  <h5>Overload season 4 - Official Trailer 3 | AniTv</h5>
                </div>

                <div class="d-flex">
                  <div class="me-3">
                    <font-awesome-icon icon="fa-solid fa-clock" />
                    <p>Guarda più...</p>
                  </div>
                  <div class="me-3">
                    <font-awesome-icon icon="fa-solid fa-share" />
                    <p>Condividi</p>
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
              <div v-for="(trailer, index) in trailers">
                <div class="song">
                  <div>{{ index + 1 }}</div>
                  <img :src="imageGenerate(trailer)" alt="" />
                  <div class="song-title">
                    <p class="song-title">Overload season 4 - Official</p>
                    <p>Trailer 3 | AniTV</p>
                  </div>
                </div>
                <div v-if="index != trailers.length - 1" class="border"></div>
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
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    aspect-ratio: 1;
  }
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
