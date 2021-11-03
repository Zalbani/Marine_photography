<template>
  <main class="about">
    <div class="about__description">
      <h1>Mon métier : créatrice d’images uniques.</h1>
      <hr>
      <p>
        Je suis née et j’ai grandi à Marseille, en France.
        Je suis créatrice d’images depuis un an.
        Ce que j’aime par dessus tout ?
        Partir à l’aventure, mon appareil photo à la main.
        Il n’y a rien de plus beau que de contribuer à immortaliser des moments précieux.
      </p>
      <p>
        Mon style ? Des photos rétro composées avec la lumière et les tonalités du cinéma.
      </p>
      <p>
        Mes études dans le domaine de l’art graphique et de la communication me permettent d’aborder au mieux chaque demande pour qu’elle vous ressemble et soit le reflet de votre personnalité.
      </p>
      <p>
        Mes prestations s’adressent aux particuliers comme aux professionnels, chaque projet est unique et original et je serai ravie de le mener à bien avec vous.
      </p>
    </div>
    <img class="about__image" src="/images/marine.jpg">
  </main>
</template>
<script>
export default {
  fetch () {
    this.$store.commit('setIsLightBG', true)
  }
}
</script>
<style scoped lang="scss">
.about{
  background-color: white;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 140px 40px 40px 40px;
  @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
    flex-direction: column-reverse;
  }
  &__description{
    width: calc(65% - 80px);
    padding: 0 40px;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      width: 100%;
      padding: 10px 20px;
    }
    hr{
      margin: 30px 0;
      width: 50px;
    }
    p{
      padding: 10px 0;
    }
  }
  &__image{
    width: calc(35% - 80px);
    padding: 40px;
    @media only screen and (max-width: map-get($grid-breakpoints, 'md')){
      width: 100%;
      padding: 10px 20px;
    }
  }
}
</style>
