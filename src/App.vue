<script setup>
import './assets/base.css';
import Navigation from './components/Navigation.vue';
import Proccess from './components/Proccess.vue';
</script>
<template>
  <Navigation />
  <router-view />
  <Proccess />
</template>
