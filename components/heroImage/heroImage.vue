<template>
  <div class="container">
    <div class="row">
      <div :style="'background-image: url(' + data.image + ')'" class="hero">
        <h1 class="col-lg-10 offset-lg-1 hero__text" v-html="data.text" />
        <div class="hero__cta">
          <CtaButton :data="data.cta" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./heroImage.ts"></script>
<style src="./heroImage.scss" lang="scss"></style>
