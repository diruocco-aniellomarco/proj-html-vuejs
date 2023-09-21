<script>
export default {
  data() {
    return {
      headerMenu: {
        socials: [
          "fa-brands fa-facebook",
          "fa-brands fa-square-twitter",
          "fa-brands fa-square-instagram",
          "fa-brands fa-square-youtube",
        ],
        menuBar: {
          icons: [
            "fa-solid fa-house-chimney",
            "fa-solid fa-suitcase",
            "fa-solid fa-book-open-reader",
            "fa-solid fa-book",
            "fa-solid fa-user",
          ],
          nameMenu: ["HOME", "LIFESTYLE", "STORIES", "PAGES", "ABOUT US"],
        },
      },
    };
  },
};
</script>

<template>
  <header>
    <section class="header-red-bar">
      <div class="container">
        <div class="row header-red-bar-container">
          <div class="col-3">
            <div class="header-red-bar-left">
              <h5 class="fs-7">NEW UPDATE</h5>
              <img src="../../public/img/meal-time-150x150.webp" alt="" />
              <p>05:35 THE_</p>
            </div>
          </div>

          <!-- SOCIAL SECTION-->
          <div class="col-3 header-social centering">
            <div class="centering">
              <font-awesome-icon icon="fa-solid fa-chevron-left" />
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </div>
            <div class="centering">
              <font-awesome-icon
                v-for="social in headerMenu.socials"
                :icon="social"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-3">
      <div class="container mt-3 logo-banner">
        <img
          class="logo-animeTeck"
          src="../../public/img/anime-logo-300x89.webp"
          alt=""
        />
        <img src="../../public/img/header-banner.webp" alt="" />
      </div>
    </section>
    <section class="header-menu-container">
      <div class="container">
        <div class="row header-menu">
          <div class="col fs-3">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </div>
          <div class="col-8 menu-bar">
            <div
              v-for="(icon, index) in headerMenu.menuBar.icons"
              class="me-2 ms-2 centering"
            >
              <font-awesome-icon :icon="icon" />
              <span class="w-100">{{
                headerMenu.menuBar.nameMenu[index]
              }}</span>
              <font-awesome-icon
                v-if="index != 1 || index != headerMenu.menuBar.icons.length"
                icon="fa-solid fa-angle-down"
              />
            </div>
          </div>
          <div class="col text-end fs-3">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header-menu-container {
  border-top: 1px solid #f3f3f3;
}
.header-red-bar {
  background-color: #bf1d2e;
  color: white;
  height: 40px;
}
.header-red-bar-container {
  justify-content: space-between;
  .header-red-bar-left {
    display: flex;
    align-items: center;
    h5 {
      font-size: small;
      font-weight: bold;
      padding: 12px 20px;
      background-color: #535458;
    }

    img {
      height: 40px;
      margin-right: 10px;
    }
    * {
      margin: 0;
    }
  }
  .header-social {
    display: flex;
    justify-content: space-between;
    font-size: larger;
  }
}

.logo-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-animeTeck {
    height: 70px;
  }
  img {
    // width: 80%;
    border-radius: 5px;
  }
}

.header-menu {
  justify-content: space-around;
  font-size: larger;
  margin: 10px 0;
}

.menu-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.centering {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  // cursor: pointer;
}
</style>
