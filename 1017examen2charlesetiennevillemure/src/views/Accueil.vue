<template>
    <!-- Valeur HTML dans data -->
    <h1 v-text="content"></h1>
    <!-- Image obtenue par URL -->
</template>
<script>
export default {
    name:'Accueil',
    data: function () {
        return {
         content: 'Accueil de mon app',
        }
  }
}
</script>
<style scoped>
/* Style scoped pour ne pas changer la position des autres H1 */
    h1{
        display: flex;
        justify-content: center;
        margin-top: 25vh;
    }
</style>