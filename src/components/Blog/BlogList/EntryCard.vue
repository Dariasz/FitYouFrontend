<template>
  <v-flex xs12 sm6>
    <v-card hover>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <span class="grey--text">25 Maja 2019</span><br>
          <div class="headline">{{entry.title}}</div>
          <span class="grey--text">Lorem lipsum</span>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn color="success" flat outline dark>Read more</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="red">favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'EntryCard',
    props: ['entry']
  }
</script>
