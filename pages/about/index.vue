<template>
  <div v-if="data != null" class="main-grid">
    <div class="container about-wrapper">
      <div class="row tour-intro">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="split-block__text">
            <h2>
              {{ data.title }}
            </h2>
            <p v-for="p in data.text.content">
              {{ p.content[0].value }}
            </p>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 split-block__preview-grid">
          <div class="row">
            <div
              v-for="image in data.images"
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
    <ContactCta :data="data.contactCta.fields" />
  </div>
</template>

<script src="./index.ts"></script>
