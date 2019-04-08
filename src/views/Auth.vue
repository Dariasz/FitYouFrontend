<template>
  <v-layout align-center justify-center row fill-height>
    <LoginForm></LoginForm>
  </v-layout>
</template>

<script>
  import LoginForm from '../components/Auth/LoginForm'

  export default {
    name: 'Auth',
    components: {
      LoginForm
    }
  }
</script>
