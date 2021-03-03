<template>
  <div id="app">
    <Header></Header>
    <!-- Booleen pour afficher un composent dependament si un utilisateur est connecter -->
    <Accueil v-if="logged === false"></Accueil>
    <Profile v-if="logged === true"></Profile>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// Importation Components/Views
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./views/Accueil";
import Profile from "./views/Profile";
// Script component
export default {
  name: "App",
  data: function () {
    return {
      logged: undefined,
    };
  },
  components: {
    Footer,
    Header,
    Accueil,
    Profile,
  },
  computed: {
    valeurLogin() {
      return this.logged;
    },
  },
  // Declaration brut si un utilisateur est connecter ou non.
  created() {
    this.logged = false;
  },
  mounted() {
    console.info("App currentRoute:", this.$router.currentRoute);
  },
};
</script>

<style>
#app {
  height: 100vh;
}
body {
  margin: 0;
}
a {
  color: black;
  text-align: center;
}
</style>
