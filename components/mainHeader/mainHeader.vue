<template>
  <header>
    <div class="container">
      <div class="row p-4">
        <nuxt-link to="/" class="col-xl-2 col-lg-8 col-6 offset-xl-1 logo">
          Arctic Tours
        </nuxt-link>
        <div
          class="col-xl-2 col-lg-4 col-6 offset-xl-6 d-flex align-items-center"
        >
          <ul class="nav-menu">
            <li>
              <nuxt-link to="/tours"> Tours </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about"> About </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact"> Contact </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./mainHeader.ts"></script>
<style src="./mainHeader.scss" lang="scss"></style>
