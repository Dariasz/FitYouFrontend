<template>
  <v-container fluid class="pa-0 ma-0">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="200px"></v-img>
    <v-container>
      <v-card>
        <v-card-title>
          <div class="primary-title">
            <div class="headline">{{entry.title}}</div>
            <span class="grey--text">{{entry.description}}</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text v-html="this.entry.content"></v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { FETCH_ENTRY } from '../../../store/modules/blog/action-types'

  export default {
    name: 'BlogEntryContent',
    created() {
      this.fetchEntry(this.$route.params.id)
    },
    computed: {
      ...mapGetters({
        entry: 'blog/entry'
      })
    },
    methods: {
      ...mapActions({
        fetchEntry: `blog/${FETCH_ENTRY}`
      })
    }
  }
</script>
