<template>
  <div>
    <!-- Date locale et lien vers licene dans directives -->
    <h1 v-footerContent></h1>
  </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
      return{
      }
    },
    computed: {
  },
  directives:{
    footerContent:{
       bind: function(el){
         var dateDuJour = (new Date().toLocaleDateString())
         el.innerHTML = 'Charles-Etienne Villemure &copy '+ dateDuJour + ' Lien : <a href="https://github.com/Charlesetiennev/1017examen2charlesetiennevillemure/blob/main/Licence" target="blank">licence</a>'
       }
  }
    }
  }

</script>

<style scoped>
h1{
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