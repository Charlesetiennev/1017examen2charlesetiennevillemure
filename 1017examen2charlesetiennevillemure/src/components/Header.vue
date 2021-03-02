<template>
<div class="content">
    <li v-for="route in routes" v-bind:key="route.id">
        <router-link  :to="{path:route.router}">{{route.name}}</router-link>
    </li>
</div>
</template>
<script>
export default {
    name:'Header',
             data: function () {
    return {
        routes: [
            {id: 1, name: 'Accueil', router:'/'},
            {id: 2, name: 'Contact', router:'/contact'},
            {id: 3, name: 'Projet', router:'/projet'},
        ]
    }
  },
}
</script>
<style scoped>
    div{
        display: inline-flex;
        width: 100%;
        justify-content: space-around;
        background: #1d7c21;
        margin: 0;
        padding: 1.2vh;
    }
    li{
        list-style: none;
        font-size: 4vh;
    }
</style>