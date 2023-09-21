<script>
export default {
  props: {
    img: String,
    title: String,
    date: String,
    text: String,
    button: Boolean,
    label: Array,
    index: Number,
  },
  methods: {
    imageGenerate(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);

      return imageUrl.href;
    },
  },
};
</script>

<template>
  <!-- aggiungere una classe per il margine (con l'v-if aggiungi classe se no nulla) -->
  <div class="card text-center">
    <!-- :class="index != 0 || index != contentCard.lenght ? 'contentCard' : ''" -->
    <img :src="imageGenerate(img)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ date }}</p>
      <p>{{ text }}</p>

      <!--il bottone v-if="button" cioè se è vera-->
      <div class="d-flex justify-content-center">
        <div v-if="button" class="button-card">Read me</div>
      </div>
    </div>
    <div class="label-tag">
      <!-- il label avrà un v-for per contare quante etichette ci sono -->
      <label v-for="tag in label" for="#">{{ tag }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
}

.button-card {
  background-color: #bc1d2f;
  color: white;
  font-weight: bold;
  width: 50%;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
}

.label-tag {
  position: absolute;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}
label {
  border-radius: 5px;
  background-color: #fbfffc;
  padding: 0 20px;
  padding-bottom: 2px;
  margin: 0;
}
</style>
