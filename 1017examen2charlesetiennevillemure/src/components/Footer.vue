<template>
  <div>
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
         el.innerHTML = 'Charles-Etienne Villemure &copy'+ dateDuJour
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
  text-align: center;
}
</style>