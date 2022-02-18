<template>
  <header>
    <div class="container">
      <div class="row py-4">
        <nuxt-link to="/" class="col-xl-3 col-lg-8 col-5 offset-xl-1 logo">
          Arctic Tours
        </nuxt-link>
        <div
          class="col-xl-2 col-lg-4 col-7 offset-xl-5 d-flex align-items-center justify-content-end"
        >
          <NavMenu class="desktop-nav-menu" />

          <BurgerMenu class="mobile-nav-menu">
            <NavMenu />
          </BurgerMenu>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./mainHeader.ts"></script>
<style src="./mainHeader.scss" lang="scss"></style>
