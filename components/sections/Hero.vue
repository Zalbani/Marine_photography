<template>
  <section class="hero">
    <h1>Photographe de portrait basée à Belfort</h1>
    <button>
      <nuxt-link to="/mon-travail">
        Voir le portfolio
      </nuxt-link>
    </button>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.hero{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  padding-bottom: 10vh;
  box-sizing: border-box;
  background-image: url("/image/oceane.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  h1{
    width: 90%;
    text-align: center;
    color: white;
  }
  button{
    text-align: center;
  }
}
</style>
