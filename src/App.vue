<script setup>
import Header from './components/header/Header.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>