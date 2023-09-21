<script></script>

<template>
  <footer>
    <div class="container">
      <div class="row mt-4 mb-4">
        <div v-for="x in 4" class="col">
          <div v-for="index in 5">
            <h5 v-if="index == 1">Set Started</h5>
            <p v-else class="m-0">ciao</p>
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
