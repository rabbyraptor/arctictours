<template>
  <div class="main-grid">
    <HeroImage :data="data.heroImage.fields" />
    <div class="container">
      <div class="row teaser-block">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="teaser-block__text">
            <h2>{{ data.teaserBlock1.fields.title }}</h2>
            <p>
              {{ data.teaserBlock1.fields.text }}
            </p>
            <CtaButton
              :data="{
                text: 'See details',
                linkDestination: 'tours/dog-sledding',
              }"
            />
          </div>
        </div>
        <nuxt-link
          to="/tours/dog-sledding"
          class="col-lg-6 offset-lg-1 teaser-block__image"
          :style="
            'background-image: url(' +
            data.teaserBlock1.fields.image.fields.file.url +
            '?fm=webp)'
          "
        />
      </div>
      <div class="row teaser-block">
        <nuxt-link
          to="/tours/ice-sheet"
          class="col-lg-6 teaser-block__image"
          :style="
            'background-image: url(' +
            data.teaserBlock2.fields.image.fields.file.url +
            '?fm=webp)'
          "
        />

        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="teaser-block__text">
            <h2>{{ data.teaserBlock2.fields.title }}</h2>
            <p>
              {{ data.teaserBlock2.fields.text }}
            </p>
            <CtaButton
              :data="{
                text: 'See details',
                linkDestination: 'tours/ice-sheet',
              }"
            />
          </div>
        </div>
      </div>
      <div class="row teaser-block">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="teaser-block__text">
            <h2>{{ data.teaserBlock3.fields.title }}</h2>
            <p>
              {{ data.teaserBlock3.fields.text }}
            </p>
            <CtaButton
              :data="{
                text: 'See details',
                linkDestination: 'tours/wildlife',
              }"
            />
          </div>
        </div>
        <nuxt-link
          to="/tours/wildlife"
          class="col-lg-6 offset-lg-1 teaser-block__image"
          :style="
            'background-image: url(' +
            data.teaserBlock3.fields.image.fields.file.url +
            '?fm=webp)'
          "
        />
      </div>
    </div>
    <div
      class="container fp-ice-sheet-image d-flex align-items-center"
      :style="
        'background-image: url(' + data.introImage.fields.file.url + '?fm=webp)'
      "
    >
      <div class="row">
        <h2 class="col-lg-10 offset-lg-1">
          {{ data.introImageText }}
        </h2>
      </div>
    </div>
    <ContactCta :data="data.contactCta.fields" />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
