<template>
  <v-flex xs12 sm6>
    <v-container elevation-4>
      <form>
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          :label="$t('auth.email')"
          data-vv-name="email"
          :data-vv-as="$t('auth.email')"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          :label="$t('auth.password')"
          type="password"
          data-vv-name="password"
          :data-vv-as="$t('auth.password')"
          autocomplete="password"
          required>
        </v-text-field>

        <v-btn
          color="success"
          @click="signIn"
          block
        >
          {{ $t('auth.signIn') }}
        </v-btn>
      </form>
    </v-container>
  </v-flex>
</template>

<script>
  import { AUTH_REQUEST } from '../../store/modules/auth/action-types'

  export default {
    name: 'LoginForm',
    data: () => ({
      email: '',
      password: ''
    }),

    methods: {
      signIn () {
        this.$validator.validateAll().then((result) => {
          const { email, password } = this
          if (!result) {
            this.$store.dispatch(`auth/${AUTH_REQUEST}`, { email, password }).then(() => {
              this.$router.push('/')
            })
          }
        })
      }
    }
  }
</script>
