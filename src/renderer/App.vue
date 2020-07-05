<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue, { ComponentOptions } from 'vue'
  export default {
    name: 'electron-vue-ts-study'
  } as ComponentOptions<Vue>

/*
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class App extends Vue {
    name = 'did-it-work'
  }
*/
</script>

<style>
  /* CSS */
</style>
