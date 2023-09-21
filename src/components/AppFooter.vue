<script>
export default {
  data() {
    return {
      dataFooter: [
        {
          title: "GET STARTED",
          link: ["Resources", "Tutorials", "Examples", "Docs"],
        },
        {
          title: "ABOUT",
          link: ["Stories", "Community", "Blog", "Brand Assets"],
        },
        {
          title: "FEATURES",
          link: ["Overview", "Design", "Code", "Collaborate"],
        },
        {
          title: "QUICK LINKS",
          link: ["Stories", "Community", "Blog", "Brand Assets"],
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row mt-4 mb-5">
        <div v-for="data in dataFooter" class="col">
          <div v-for="(link, index) in data.link">
            <h5 v-if="index == 0">{{ data.title }}</h5>
            <a class="m-0">{{ link }}</a>
          </div>
        </div>

        <div class="col-3">
          <h5>SUBSCRIBES IN NEWS LETTER</h5>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <button type="button" class="btn btn-secondary w-100">
            Secondary
          </button>
        </div>
      </div>

      <div class="row credits-footer">
        <div class="col">
          <img
            class="logo-footer"
            src="../../public/img/anime-whitelogo-300x89.png"
            alt=""
          />
        </div>
        <div class="col credit">Anime Tech, Theme by HasnainDev</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #bf1c2d;
  color: white;
  padding: 20px;
}
.logo-footer {
  width: 200px;
}
.credits-footer {
  justify-content: space-between;

  .credit {
    display: flex;
    align-items: end;
    justify-content: end;
  }
  * {
    padding-top: 10px;
  }
  &::before {
    content: "";
    display: block;
    height: 2px;
    background-color: white;
    width: 100%;
  }
}
</style>
