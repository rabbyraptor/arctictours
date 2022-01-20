<template>
  <div class="row infobox">
    <div
      class="col-lg-6 infobox__image"
      :style="'background-image: url(' + data.image.fields.file.url + ')'"
    />
    <div class="col-lg-5 d-flex align-items-center infobox__overview">
      <div class="infobox__text">
        <h2>
          {{ data.title }}
        </h2>
        <h3 v-html="data.infoboxText.fields.includedTitle" />
        <ul>
          <li
            v-for="(item, index) in data.infoboxText.fields.included"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <h3 v-html="data.infoboxText.fields.notIncludedTitle" />
        <ul>
          <li
            v-for="(item, index) in data.infoboxText.fields.notIncluded"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <h3 class="price" v-html="data.price.fields.title" />
        <p>{{ data.price.fields.value }} {{ data.price.fields.unit }}</p>
        <CtaButton :data="data.ctaButton.fields" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script src="./tourInfoBox.ts"></script>
<style src="./tourInfoBox.scss" lang="scss"></style>
