<script></script>

<template>
  <div class="card-matte">
    <img src="../../public/img/best-places.webp" alt="" />
    <div class="text-card-matte prova">
      <h2>scritte</h2>
      <p>altre cose</p>
    </div>
    <div class="label-tag">
      <!-- il label avrà un v-for per contare quante etichette ci sono -->
      <label for="#">Food</label>
      <label for="#">Food</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-matte {
  position: relative;

  img {
    width: 100%;

    object-fit: cover;
  }
  .text-card-matte {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  .label-tag {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.label-tag,
.text-card-matte,
.card-matte > img {
  border-radius: 5px;
}
</style>
