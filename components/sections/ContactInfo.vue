<template>
  <section class="contactInfo">
    <img src="/images/marine.jpg" class="contactInfo__image">
    <div class="contactInfo__description">
      <h2>Contact</h2>
      <hr>
      <p>Psss… Je me déplace partout en France et à l’étranger !</p>
      <hr>
      <p>Contactez-moi ici pour connaître mes disponibilités et pour convenir d’une date afin de discuter des détails et des forfaits.</p>
      <p>marine.destefano@gmail.com  <br>06 32 70 89 94</p>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.contactInfo{
  position: relative;
  &__image{
    width: 70%;
    padding: 0 20% 0 10%;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
      width: 100%;
      padding: 20px 0;
    }
  }
  &__description{
    position: absolute;
    top: 60%;
    width: 55%;
    left: 35%;
    padding: 25px;
    background-color: white;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')) {
      width: calc(100% - 50px);
      position: unset;
    }
      h2{
      font-family: "Garamond", serif;
      font-size: 42px;
    }
    p{
      padding: 10px 0;
    }
    hr{
      margin: 20px 0;
      width: 30px;
      &:first-of-type{
        width: 50%;
      }
    }
  }
}
</style>
