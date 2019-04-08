<template>
    <div id="dashboard">
        <v-layout justify-center>
            <h1>FitYou Dashboard</h1>
        </v-layout>
        <Exercises />
    </div>
</template>

<script>
  import Exercises from '../components/Exercises'

  export default {
    components: {
      Exercises
    }
  }
</script>
