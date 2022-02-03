<template>
  <ul class="nav-menu">
    <li @click="closeMenu">
      <nuxt-link to="/tours"> Tours </nuxt-link>
    </li>
    <li @click="closeMenu">
      <nuxt-link to="/about"> About </nuxt-link>
    </li>
    <li @click="closeMenu">
      <nuxt-link to="/contact"> Contact </nuxt-link>
    </li>
  </ul>
</template>

<script src="./navMenu.ts"></script>
