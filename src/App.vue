
<template>
  <v-app>
    <v-toolbar app color="blue" class="navbar" :light="true">

      <v-toolbar-title>
         <span class="brandName">FitYou</span>
      </v-toolbar-title>
      
      <v-toolbar-items class="hidden-sm-and-down">
         <router-link to="/dashboard"><v-btn flat color="white">Dashboard</v-btn></router-link>
      </v-toolbar-items>
  </v-toolbar>

    <v-content>
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './views/Dashboard'

export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
   .brandName {
      color: white;
   }
   .navbar {
      background-image: url('https://img3.akspic.com/image/113502-magenta-pattern-square-purple-symmetry-2560x1440.jpg')
   }
</style>


