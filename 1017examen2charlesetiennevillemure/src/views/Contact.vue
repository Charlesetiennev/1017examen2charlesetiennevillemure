<template>
    <div>
    <h1>Contact</h1>
    <form>
        <label for="nom">Nom :<span class="rouge">* </span> </label>
            <input id="nom" type="text" required/><br>
        <label for="prenom">Prenom :<span class="rouge">* </span></label>
            <input id="prenom" type="text" required/><br>
        <label for="email">Email :<span class="rouge">* </span></label>
            <input id="email" type="email" required/><br>
        <select>
            <option  v-for="sujet in sujets" :key = "sujet" v-bind:value="sujet.value">{{sujet.value}}</option>
        </select>        
    </form>
    </div>
</template>

<script>
export default {
    name:'Contact',
         data: function () {
    return {
        sujets: [
            {id: 1, value: 'Probleme technique'},
            {id: 2, value: 'Service Clientele'},
            {id: 3, value: 'Tout autre questions'},
        ]
    }
  }
}
</script>
<style>
    .rouge{
        color: red;
    }
</style>