<template>
  <nuxt-link :to="{ path: data.linkDestination }" class="cta-button">
    {{ data.text }}
  </nuxt-link>
</template>

<script src="./ctaButton.ts"></script>
<style src="./ctaButton.scss" lang="scss"></style>
