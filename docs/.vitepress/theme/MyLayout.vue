<script setup>
import DefaultTheme from 'vitepress/theme'
import MyFooter from './MyFooter.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <MyFooter />
    </template>
  </DefaultTheme.Layout>
</template> 