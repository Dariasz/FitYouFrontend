<template>
  <v-toolbar app class="navbar" light>
    <v-toolbar-title class="white--text">
      {{$t('app.toolbar.appName')}}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!--<v-btn flat color="white">-->
        <!--<router-link to="/" tag="div">-->
          <!--{{$t('app.toolbar.dashboard')}}-->
        <!--</router-link>-->
      <!--</v-btn>-->
      <user-options-list></user-options-list>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import UserOptionsList from './partials/UserOptionsList'

  export default {
    name: 'Toolbar',
    components: {
      UserOptionsList
    }
  }
</script>

<style scoped>
  .navbar {
    background-image: url('https://img3.akspic.com/image/113502-magenta-pattern-square-purple-symmetry-2560x1440.jpg')
  }
</style>

