<template>
  <div class="main-grid">
    <div class="container tours-list">
      <div
        v-for="tour in tours"
        :key="tour.fields.slug"
        class="row tour-wrapper"
      >
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="split-block__text">
            <h2>
              {{ tour.fields.name }}
            </h2>
            <p>
              {{ tour.fields.tourInfo.fields.text.content[0].content[0].value }}
            </p>
            <CtaButton
              :data="{
                linkDestination: '/tours/' + tour.fields.slug,
                text: 'Go to tour',
              }"
            />
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 split-block__preview-grid">
          <div class="row">
            <div
              v-for="image in tour.fields.previewImages.fields.images"
              :key="image.key"
              class="col-6 split-block__image"
              :style="
                'background-image: url(' + image.fields.file.url + '?fm=webp)'
              "
            />
          </div>
        </div>
      </div>
    </div>
    <ContactCta :data="tours[0].fields.contactCta.fields" />
  </div>
</template>

<script src="./index.ts"></script>
