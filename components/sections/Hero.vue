<template>
  <section class="hero">
    <h1>Photographe de portrait basée à Belfort</h1>
    <button> Voir le portfolio</button>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.hero{
  width: 100%;
  height: 100vh;
  background-image: url("/image/oceane.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  h1{
    width: 100%;
    position: absolute;
    bottom: 20vh;
    text-align: center;
    color: white;
  }
  button{
    position: absolute;
    bottom: 10vh;
    text-align: center;
  }
}
</style>
