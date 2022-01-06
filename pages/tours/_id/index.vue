<template>
  <div v-if="data !== null" class="main-grid">
    <HeroImage :data="data.hero" />
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="split-block__text">
            <h2>
              {{ data.tourInfo.title }}
            </h2>
            <p v-html="data.tourInfo.text" />
          </div>
        </div>
        <div
          class="col-lg-6 offset-lg-1 split-block__image"
          style="background-image: url('/images/ice-sheet/ice-sheet-8.jpg')"
        />
      </div>
      <TourImageGrid :data="data.tourImages" />
      <TourInfoBox :data="data.infoBox" />
    </div>
    <ContactCta />
  </div>
</template>

<script src="./index.ts"></script>
