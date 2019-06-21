<template>
  <div>
    <Toolbar></Toolbar>
    <v-content>
      <v-layout justify-center>
        <slot></slot>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
  import Toolbar from '../components/Layout/Toolbar'

  export default {
    name: 'Default',
    components: {
      Toolbar
    }
  }
</script>
