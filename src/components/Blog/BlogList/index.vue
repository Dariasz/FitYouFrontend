<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <entry-card v-for="entry in entries" :key="entry.id" :entry="entry" />
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { FETCH_ENTRIES } from '../../../store/modules/blog/action-types'
  import EntryCard from './EntryCard'

  export default {
    name: 'BlogList',
    components: {
      EntryCard
    },
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
