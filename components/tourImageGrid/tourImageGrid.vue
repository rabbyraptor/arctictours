<template>
  <div class="row tour-grid">
    <div class="col-md-6 no-gutters">
      <div
        class="tour-grid__image"
        :style="'background-image: url( ' + data.image1 + ')'"
      />
      <div
        class="tour-grid__image"
        :style="'background-image: url( ' + data.image2 + ')'"
      />
      <div
        class="tour-grid__image"
        :style="'background-image: url( ' + data.image3 + ')'"
      />
    </div>
    <div class="col-md-6 no-gutters">
      <div
        class="tour-grid__image"
        :style="'background-image: url( ' + data.image4 + ')'"
      />
      <div
        class="tour-grid__image"
        :style="'background-image: url( ' + data.image5 + ')'"
      />
    </div>
  </div>
</template>

<script src="./tourImageGrid.ts"></script>
<style src="./tourImageGrid.scss" lang="scss"></style>
