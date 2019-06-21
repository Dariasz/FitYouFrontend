<template>
  <v-container>
    <v-card>
      <Header />
      <Form />
    </v-card>
  </v-container>
</template>

<script>
  import Header from '../components/Blog/NewBlogEntry/Header'
  import Form from '../components/Blog/NewBlogEntry/Form'

  export default {
    name: 'NewBlogEntry',
    components: { Header, Form }
  }
</script>
