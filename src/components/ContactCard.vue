<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="contact-card">
    <img :src="imageSrc" :alt="title" />
    <div class="contact-card__info">
      <p>{{ text }}</p>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-card {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3rem;
  gap: 1rem;
  &__info {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>
