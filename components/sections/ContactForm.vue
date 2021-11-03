<template>
  <form class="contactForm">
    <label>Nom</label>
    <input type="text">
    <label>Prenom</label>
    <input type="text">
    <label>Email</label>
    <input type="text">
    <label>Message</label>
    <textarea type="text" />
    <hr>
    <label>Lieu</label>
    <input type="text">

    <fieldset>
      <legend>Quel(s) service(s) recherchez-vous ? </legend>
      <label><input type="checkbox" value="hello"> test</label>
    </fieldset>
    <label>Comment avez-vous entendu parler de moi ?</label>
    <select>
      <option>Amis</option>
      <option>Famille</option>
      <option>Site web</option>
      <option>Google</option>
      <option>Intstagram</option>
      <option>Facebook</option>
      <option>Publicite</option>
      <option>Pinterest</option>
    </select>

    <button type="submit">
      Envoyer
    </button>
  </form>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.contactForm{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  input, textarea{
    box-sizing: border-box;
    margin: 20px 0;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid lightgrey;
  }
  button{
    margin: 20px 0;
  }
}

</style>
