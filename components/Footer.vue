<template>
  <footer class="footer">
    <div class="footer__topInfo">
      <h3>MARINE DE STEFANO</h3>
      <h4>Photographe de portrait et de mode</h4>
      <hr>
      <p>marine.destefano@gmail.com</p>
    </div>
    <hr>
    <section class="footer__link">
      <ul>
        <li>
          <nuxt-link to="/mon-travail">
            Mon travail
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Océane
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Mathias
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Evah
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Maeva x Circé
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Willy
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Déborah
          </nuxt-link>
        </li>
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
.footer {
  width: calc(100% - 16vw);
  padding: 0 8vw;
  &__topInfo{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding-bottom: 17px;
    h3{
      margin-top: unset;
    }
    hr{
      width: 20px;
    }
  }
  &__link {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
    ul {
      display: inherit;
      flex-direction: column;
      width: 25%;
      padding: 17px;
      li {
        margin: 1rem 0;
        text-decoration: underline;
        text-underline-offset: .2em;
        text-decoration-thickness: 1px;
      }
    }
  }
}
</style>
