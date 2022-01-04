<template>
  <div class="row infobox">
    <div
      class="col-lg-6 infobox__image"
      :style="'background-image: url(' + data.image + ')'"
    />
    <div class="col-lg-5 d-flex align-items-center infobox__overview">
      <div class="infobox__text">
        <h2>
          {{ data.title }}
        </h2>
        <h3 v-html="data.text.includedTitle" />
        <ul>
          <li v-for="(item, index) in data.text.included" :key="index">
            {{ item }}
          </li>
        </ul>
        <h3 v-html="data.text.notIncludedTitle" />
        <ul>
          <li v-for="(item, index) in data.text.notIncluded" :key="index">
            {{ item }}
          </li>
        </ul>
        <h3 class="price" v-html="data.price.title" />
        <p>{{ data.price.value }} {{ data.price.unit }}</p>
        <CtaButton :data="data.cta" />
      </div>
    </div>
  </div>
</template>

<script src="./tourInfoBox.ts"></script>
<style src="./tourInfoBox.scss" lang="scss"></style>
