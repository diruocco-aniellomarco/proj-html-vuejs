<script>
export default {
  props: {
    img: String,
    title: String,
    date: String,
    text: String,
    texts: Boolean,
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
  <div class="card-matte">
    <img :src="imageGenerate(img)" />
    <div class="text-card-matte">
      <p v-if="texts" class="m-0">
        <font-awesome-icon icon="fa-solid fa-user" /> <span>Demo </span
        ><font-awesome-icon icon="fa-solid fa-calendar-days" /> {{ date }}
      </p>
      <p v-if="texts">{{ title }}</p>
    </div>
    <!-- avrà un v-if, sotto non deve comparire-->
    <div class="label-tag">
      <!-- il label avrà un v-for per contare quante etichette ci sono -->
      <label v-for="tag in label" for="#">{{ tag }}</label>
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
    right: 0;
    left: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  .label-tag {
    position: absolute;
    top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}

.label-tag,
.text-card-matte,
.card-matte > img {
  border-radius: 5px;
}

label {
  border-radius: 5px;
  background-color: #fbfffc;
  padding: 0 20px;
  padding-bottom: 2px;
  margin: 0;
}
</style>
