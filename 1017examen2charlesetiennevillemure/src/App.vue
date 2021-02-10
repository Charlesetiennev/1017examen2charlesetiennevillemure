<template>
  <div id="app">
    <Header></Header>
    <Accueil v-if="logged===false"></Accueil>
    <Profile v-if="logged===true"></Profile>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './views/Accueil'
import Profile from './views/Profile'

export default {
  name: 'App',
  data: function(){
    return{
      logged : undefined
    }
  },
  components: {
    Footer,
    Header,
    Accueil,
    Profile
  },
  computed: {
    valeurLogin(){
      return this.logged
    }
  },
  created(){
    this.logged = false;
  }
}

</script>

<style>
#app {

}
</style>
