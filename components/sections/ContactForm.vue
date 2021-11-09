<template>
  <form class="contactForm">
    <div class="name">
      <div class="inputWrapper">
        <label>Nom</label>
        <input type="text">
      </div>
      <div class="inputWrapper">
        <label>Prenom</label>
        <input type="text">
      </div>
    </div>
    <div class="inputWrapper">
      <label>Email</label>
      <input type="text">
    </div>
    <div class="inputWrapper">
      <label>Message</label>
      <textarea type="text" />
    </div>
    <hr>
    <div class="inputWrapper">
      <label>Lieu</label>
      <input type="text">
    </div>
    <div class="inputWrapper">
      <label>Quel(s) service(s) recherchez-vous ? </label>
      <div class="inputCheckboxWrapper" @click="triggerInputs(0)">
        <input type="checkbox" value="hello" :checked="inputs[0]"><label>Photos de portrait</label>
      </div>
      <div class="inputCheckboxWrapper" @click="triggerInputs(1)">
        <input type="checkbox" value="hello" :checked="inputs[1]"><label>Photos de mode</label>
      </div>
      <div class="inputCheckboxWrapper" @click="triggerInputs(2)">
        <input type="checkbox" value="hello" :checked="inputs[2]"><label>Photos pour un portfolio</label>
      </div>
      <div class="inputCheckboxWrapper" @click="triggerInputs(3)">
        <input type="checkbox" value="hello" :checked="inputs[3]"><label>Photos de couple</label>
      </div>
      <div class="inputCheckboxWrapper" @click="triggerInputs(4)">
        <input type="checkbox" value="hello" :checked="inputs[4]"><label>Photos de mariage</label>
      </div>
    </div>
    <div class="inputWrapper">
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
    </div>
    <button type="submit">
      Envoyer
    </button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      inputs: [
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  methods: {
    triggerInputs (id) {
      const tempArray = Object.assign([], this.inputs)
      const inputCurrentValue = this.inputs[id]
      tempArray[id] = !inputCurrentValue
      this.inputs = tempArray
    }
  }
}
</script>
<style lang="scss" scoped>
.contactForm{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  textarea{
    resize: vertical;
  }
  button{
    margin: 10px 0;
  }
}

.name {
  width: 100%;
  border: none;
  padding: 0;
  display: flex;
  .inputWrapper{
    width: 50%;
    &:first-of-type{
      padding-right: 10px;
    }
    &:last-of-type{
      padding-left: 10px;
    }
  }

}

</style>
