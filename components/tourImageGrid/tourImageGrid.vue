<template>
  <div class="row tour-grid">
    <div class="col-md-6 no-gutters">
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' + data.image1.fields.file.url + '?fm=webp)'
        "
      />
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' + data.image2.fields.file.url + '?fm=webp)'
        "
      />
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' + data.image3.fields.file.url + '?fm=webp)'
        "
      />
    </div>
    <div class="col-md-6 no-gutters">
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' + data.image4.fields.file.url + '?fm=webp)'
        "
      />
      <div
        class="tour-grid__image"
        :style="
          'background-image: url( ' + data.image5.fields.file.url + '?fm=webp)'
        "
      />
    </div>
  </div>
</template>

<script src="./tourImageGrid.ts"></script>
<style src="./tourImageGrid.scss" lang="scss"></style>
