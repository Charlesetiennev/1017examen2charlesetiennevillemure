<template>
  <div id="app">
    <Header></Header>
    <Accueil></Accueil>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './views/Accueil'
export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Accueil
  }
}
</script>

<style>
#app {

}
</style>
