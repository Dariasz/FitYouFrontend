<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon dark>person</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-sub-title>{{userName}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="logout">
        <v-list-tile-title>
          {{$t('app.toolbar.logout')}}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { AUTH_LOGOUT } from '../../../../store/modules/auth/action-types'

  export default {
    computed: {
      ...mapGetters({
        user: 'auth/user'
      }),

      userName () {
        return `${this.user.firstName} ${this.user.lastName}`
      }
    },
    methods: {
      logout () {
        this.$store.dispatch(`auth/${AUTH_LOGOUT}`).then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>
