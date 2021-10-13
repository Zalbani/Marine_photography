<template>
  <footer>
    <h2>MARINE DE STEFANO</h2>
    <h3>Photographe de portrait et de mode</h3>
    <hr>
    <section>
      <ul>
        <li>
          <nuxt-link to="/mon-travail">
            Mon travail
          </nuxt-link>
        </li>
        <li>Océane</li>
        <li>Mathias</li>
        <li>Evah</li>
        <li>Maeva x Circé</li>
        <li>Willy</li>
        <li>Déborah</li>
      </ul>
      <ul>
        <li>
          <nuxt-link to="/a-propos">
            À propos
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </section>
  </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
header {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: rgba(186, 0, 0, 0.15);
  backdrop-filter: blur(15px);

  nav {
    width: inherit;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      li {
        margin: 0 1.25vw;
        color: white;
      }
    }
  }
}
</style>
