<script></script>

<template>
    
    <div class="card m-3">
      <img src="../../public/img/best-places.webp" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">dinamica</h5>
        <p class="card-text">
          <h3>
            titolo
          </h3>
          <p>ciao ciccio</p>
        </p>

        <!--il bottone v-if="read_me" cioè se è vera-->
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="label-tag">
        <!-- il label avrà un v-for per contare quante etichette ci sono -->
        <label for="#">Food</label>
        <label for="#">Food</label>
      </div>
      
      
    </div>
    
</template>

<style lang="scss" scoped>
.card {
 position: relative;
}
.label-tag {
    
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
