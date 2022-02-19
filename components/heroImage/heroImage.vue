<template>
  <div class="container">
    <div class="row">
      <div
        :style="
          'background: linear-gradient(to bottom, #20202060, #20202000, #20202000), url(' +
          data.image.fields.file.url +
          '?fm=webp) no-repeat center'
        "
        class="hero"
      >
        <h1
          class="col-lg-10 offset-lg-1 hero__text"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span v-for="(p, index) in data.text.content"
            >{{ p.content[0].value }}<br
          /></span>
        </h1>
        <div class="hero__cta" data-aos="fade-down" data-aos-delay="100">
          <CtaButton :data="data.ctaButton.fields" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./heroImage.ts"></script>
<style src="./heroImage.scss" lang="scss"></style>
