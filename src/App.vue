<template>
  <v-app>
    <Toolbar v-if="isAuthenticated"></Toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Toolbar from './components/App/Toolbar'
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    components: { Toolbar },
    computed: {
      ...mapGetters({
        isAuthenticated: 'auth/isAuthenticated'
      }),
    }
  }
</script>
