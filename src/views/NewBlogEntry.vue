<template>
  <v-container>
    <v-card>
      <Header />
      <Form />
    </v-card>
  </v-container>
</template>

<script>
  import Header from '../components/NewBlogEntry/Header'
  import Form from '../components/NewBlogEntry/Form'

  export default {
    name: 'NewBlogEntry',
    components: { Header, Form }
  }
</script>
