<template>
  <div class="container">
    <div class="row">
      <div
        :style="
          'background-image: url(' + data.image.fields.file.url + '?fm=webp)'
        "
        class="contact-cta"
      >
        <h1 class="col-lg-10 offset-lg-1 contact-cta__text">
          Questions? <br />
          We have got answers.
        </h1>
        <div class="contact-cta__cta d-flex justify-content-center">
          <CtaButton :data="data.cta.fields" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./contactCta.ts"></script>
<style src="./contactCta.scss" lang="scss"></style>
