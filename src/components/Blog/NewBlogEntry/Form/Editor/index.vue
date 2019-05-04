<template>
  <v-container elevation-2>
    <EditorBars :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
  </v-container>
</template>

<script>
  import EditorBars, { extensions } from './EditorBars'
  import { Editor, EditorContent } from 'tiptap'

  export default {
    name: 'Editor',
    props: ['content'],
    components: {
      EditorBars,
      EditorContent,
      extensions
    },
    data () {
      return {
        editor: new Editor({
          extensions: extensions,
          content: this.content,
          onUpdate: ({ getHTML }) => {
            const html = getHTML()
            this.updateContent(html)
          }
        })
      }
    },
    methods: {
      updateContent (json) {
        this.$emit('update', json)
      }
    },
    beforeDestroy () {
      this.editor.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .editor__content > :focus {
    outline-color: #00bcd4;
    outline-width: 3px;
  }
</style>
