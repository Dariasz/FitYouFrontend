<template>
  <v-layout align-center justify-center row fill-height>
    <editor-menu-bar :editor="editor">
      <div class="menubar" slot-scope="{ commands, isActive }">

        <button class="menubar--button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
          <v-icon>format_bold</v-icon>
        </button>

        <button
          class="menubar--button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <v-icon>format_italic</v-icon>
        </button>

        <button
          class="menubar--button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <v-icon>format_strikethrough</v-icon>
        </button>

        <button
          class="menubar--button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <v-icon>format_underline</v-icon>
        </button>
      </div>
    </editor-menu-bar>
  </v-layout>
</template>

<script>
  import { EditorMenuBar } from 'tiptap'
  import {
    Bold,
    Strike,
    Underline,
    Italic
  } from 'tiptap-extensions'

  export default {
    props: ['editor'],
    components: {
      Bold,
      Strike,
      Underline,
      Italic,
      EditorMenuBar
    }
  }

  export const extensions = [
    new Bold(),
    new Strike(),
    new Italic(),
    new Underline()
  ]
</script>

<style lang="scss" scoped>
  .menubar--button {
    i {
      color: black
    }

    &.is-active {
      background: azure;
    }
  }

  .editor--content {
    padding-top: 5px
  }
</style>
