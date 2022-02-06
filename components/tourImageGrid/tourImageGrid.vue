<template>
  <div class="row tour-grid">
    <div class="col-md-6 no-gutters">
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' +
          data.image1.fields.file.url +
          '?fl=progressive)'
        "
      />
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' +
          data.image2.fields.file.url +
          '?fl=progressive)'
        "
      />
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' +
          data.image3.fields.file.url +
          '?fl=progressive)'
        "
      />
    </div>
    <div class="col-md-6 no-gutters">
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' +
          data.image4.fields.file.url +
          '?fl=progressive)'
        "
      />
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' +
          data.image5.fields.file.url +
          '?fl=progressive)'
        "
      />
    </div>
  </div>
</template>

<script src="./tourImageGrid.ts"></script>
<style src="./tourImageGrid.scss" lang="scss"></style>
