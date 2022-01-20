<template>
  <div class="main-grid">
    <div class="container">
      <div v-for="tour in tours" class="row tour-wrapper">
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
              class="mt-4"
            />
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 split-block__preview-grid">
          <div class="row">
            <div
              v-for="image in tour.fields.previewImages.fields.images"
              class="col-6 split-block__image"
              :style="'background-image: url(' + image.fields.file.url + ')'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts"></script>
