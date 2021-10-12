<template>
  <section class="hero">
    <h1>Photographe de portrait basée à Belfort</h1>
    <btn> Voir le portfolio</btn>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss">
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
}
</style>
