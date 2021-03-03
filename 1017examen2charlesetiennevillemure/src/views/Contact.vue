<template>
    <div class="content">
    <h1 v-text="titreDePage"></h1>
    <form>
        <label for="nom" v-text="fr.nom"> </label><span class="rouge">* </span>
            <input id="nom" type="text" required/><br>
        <label for="prenom">Prenom :<span class="rouge">* </span></label>
            <input id="prenom" type="text" required/><br>
        <label for="email">Email :<span class="rouge">* </span></label>
            <input id="email" type="email" required/><br>
        <select>
            <!-- Option provient de sujets dans data de la vue -->
            <option  v-for="sujet in sujets" :key="sujet.id" v-bind:value="sujet.value">{{sujet.value}}</option>
        </select>        
    </form>
    <!-- Verification que la valeur du Translate Anglais Fonctionne -->
            <!-- <p>{{en.prenom}}</p> -->
    </div>
</template>

<script>
import {TRANSLATIONS} from '../mixins/translateMixin';

export default {
    name:'Contact',
    mixins:[TRANSLATIONS],
    data: function () {
        return {
            titreDePage : 'Contact',
            sujets: [
                {id: 1, value: 'Problème technique'},
                {id: 2, value: 'Service clientèle'},
                {id: 3, value: 'Tout autre questions'},
            ]
        }
    },
    filters:{
        checkLanguage(){
            var fr = this.fr
            var result =Object.keys(fr)
            .map(keys =>fr[keys])
            console.log(result)
        }
    },
}
</script>

<style scoped>
    .rouge{
        color: red;
    }
    .content{
        display: block;
        margin: auto;
        width: 30vh;
    }
</style>