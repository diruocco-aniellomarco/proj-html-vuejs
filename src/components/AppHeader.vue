<script></script>

<template>
  <header>
    <section class="header-red-bar">
      <div class="container">
        <div class="row header-red-bar-container">
          <div class="col-3">new update</div>
          <div class="col-3 header-social">
            <div>freccette</div>
            <div>social</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mt-3 logo-banner">
        <img src="../../public/img/anime-logo-300x89.webp" alt="" />
        <img src="../../public/img/header-banner.webp" alt="" />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row header-menu">
          <div class="col">burger</div>
          <div class="col">il menu</div>
          <div class="col">lente</div>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header-red-bar {
  background-color: #bf1d2e;
  color: white;
}
.header-red-bar-container {
  justify-content: space-between;

  .header-social {
    display: flex;
    justify-content: space-between;
  }
}

.logo-banner {
  display: flex;
  justify-content: space-between;

  img {
    // width: 80%;
    border-radius: 5px;
  }
}

.header-menu {
  justify-content: space-around;
}
</style>
