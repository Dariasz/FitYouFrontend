<template>
  <v-flex xs12 sm8>
    <blogList />
  </v-flex>
</template>

<script>
  import BlogList from '../components/Blog/BlogList/'

  export default {
    name: 'Blog',
    components: {
      BlogList
    }
  }
</script>
