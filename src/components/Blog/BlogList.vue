<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 v-for="entry in entries" :key="entry.id">
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
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { FETCH_ENTRIES } from '../../store/modules/blog/action-types'

  export default {
    created () {
      this.fetchEntries()
    },
    computed: {
      ...mapGetters({
        entries: 'blog/entriesList'
      })
    },
    methods: {
      ...mapActions({
        fetchEntries: `blog/${FETCH_ENTRIES}`
      })
    }
  }
</script>
