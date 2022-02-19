<template>
  <div v-if="data != null" class="main-grid">
    <HeroImage :data="data.heroImage.fields" />
    <div class="container">
      <div class="row tour-intro">
        <div
          class="col-lg-4 offset-lg-1 d-flex align-items-center"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div class="split-block__text">
            <h2>
              {{ data.tourInfo.fields.title }}
            </h2>
            <p v-for="p in data.tourInfo.fields.text.content">
              {{ p.content[0].value }}
            </p>
          </div>
        </div>
        <div
          class="col-lg-6 offset-lg-1 split-block__image"
          :style="
            'background-image: url(' +
            data.tourInfo.fields.image.fields.file.url +
            '?fm=webp)'
          "
        />
      </div>
      <TourImageGrid :data="data.tourImages.fields" />
      <TourInfoBox id="infobox" :data="data.infoBox.fields" />
    </div>
    <ContactCta :data="data.contactCta.fields" />
  </div>
</template>

<script src="./index.ts"></script>
