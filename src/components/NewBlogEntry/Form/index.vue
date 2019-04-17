<template>
  <v-card-text>
    <form>
      <v-text-field
        v-model="entry.title"
        :error-messages="errors.collect('title')"
        :label="$t('newBlogEntry.form.title')"
        data-vv-name="title"
        required
      ></v-text-field>
    </form>
    <Editor :content="entry.content" @update="updateEntryContent" />
    <v-card-actions class="mt-3">
      <v-spacer />
      <v-btn
        color="success"
        @click="saveEntry"
      >
        {{$t('newBlogEntry.form.saveEntry')}}
      </v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
  import Editor from './Editor'

  export default {
    name: 'Form',
    components: { Editor },
    data () {
      return {
        entry: {
          title: '',
          slug: '',
          content: '<h1> Elo mordy </h1>'
        }
      }
    },
    methods: {
      saveEntry() {
        console.log('saved')
      },
      updateEntryContent (content) {
        this.entry.content = content
      }
    }
  }
</script>
