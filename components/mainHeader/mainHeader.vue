<template>
  <header>
    <div class="container">
      <div class="row p-4">
        <nuxt-link to="/" class="col-2 offset-1 logo"> Arctic Tours </nuxt-link>
        <div class="col-1 offset-7">
          <ul>
            <li>
              <nuxt-link to="/tours"> Tours </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about"> About </nuxt-link>
            </li>
            <li>
              <a href="mailto:info@arctictours.gl"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./mainHeader.ts"></script>
<style src="./mainHeader.scss" lang="scss"></style>
