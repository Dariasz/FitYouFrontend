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
      <v-text-field
        v-model="entry.description"
        :error-messages="errors.collect('description')"
        :label="$t('newBlogEntry.form.description')"
        data-vv-name="description"
        required
      ></v-text-field>
      <v-text-field
        v-model="entry.slug"
        :error-messages="errors.collect('slug')"
        :label="$t('newBlogEntry.form.slug')"
        data-vv-name="slug"
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
  import { CREATE_ENTRY } from '../../../../store/modules/blog/action-types'
  import slugify from '../../../../helpers/slugify'

  export default {
    name: 'Form',
    components: { Editor },
    data() {
      return {
        entry: {
          title: '',
          slug: '',
          description: '',
          content: '<h1> Elo mordy </h1>'
        }
      }
    },
    methods: {
      saveEntry() {
        this.$store.dispatch(`blog/${CREATE_ENTRY}`, { entry: this.entry }).then(() => {
          console.log('saved!')
        })
      },
      updateEntryContent(content) {
        this.entry.content = content
      }
    },
    watch: {
      'entry.title'(value) {
        this.entry.slug = slugify(value);
      }
    }
  }
</script>
