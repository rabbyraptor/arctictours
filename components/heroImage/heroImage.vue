<template>
  <div class="container">
    <div class="row">
      <div
        :style="
          'background: linear-gradient(to bottom, #20202066, #20202066), url(' +
          data.image.fields.file.url +
          '?fl=progressive) no-repeat center'
        "
        class="hero"
      >
        <h1 class="col-lg-10 offset-lg-1 hero__text">
          <span v-for="(p, index) in data.text.content"
            >{{ p.content[0].value }}<br
          /></span>
        </h1>
        <div class="hero__cta">
          <CtaButton :data="data.ctaButton.fields" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./heroImage.ts"></script>
<style src="./heroImage.scss" lang="scss"></style>
