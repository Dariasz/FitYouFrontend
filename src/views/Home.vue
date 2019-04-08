<template>
  <div>
    <h1>Home Page</h1>
    <h2>Welcome {{user.firstName}}</h2>
    <button @click="logout">
      Wyloguj się
    </button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { AUTH_LOGOUT } from '../store/modules/auth/action-types'

  export default {
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },
    methods: {
      logout () {
        this.$store.dispatch(`auth/${AUTH_LOGOUT}`)
      }
    }
  }
</script>
