<template>
  <div>
    <!-- Nom separer du HTML pour test unitaire -->
    <h1 v-text="nomFooter" style="padding-right:2vh" class="nomFooter"></h1>
    <!-- Date locale et lien vers licene dans directives -->
    <h1 v-footerContent></h1>
  </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
      return{
        nomFooter : 'Charles-Etienne Villemure',
      }
    },
    computed: {
  },
  directives:{
    footerContent:{
       bind: function(el){
         var dateDuJour = (new Date().toLocaleDateString())
         el.innerHTML = ' &copy '+ dateDuJour + ' Lien : <a href="https://github.com/Charlesetiennev/1017examen2charlesetiennevillemure/blob/main/Licence" target="blank">licence</a>'
       }
  }
    }
  }

</script>

<style scoped>
div{
  display: inline-flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1.2vh;
  margin: 0;
  text-align: center;
  background: #1d7c21;
}
</style>