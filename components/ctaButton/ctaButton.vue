<template>
  <nuxt-link :to="{ path: data.linkDestination }" class="cta-button">
    <span class="cta-button__text">{{ data.text }}</span>
  </nuxt-link>
</template>

<script src="./ctaButton.ts"></script>
<style src="./ctaButton.scss" lang="scss"></style>
