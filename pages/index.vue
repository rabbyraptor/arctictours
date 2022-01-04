<template>
  <div class="main-grid">
    <HeroImage :data="data.hero" />
    <div class="container fp-ice-sheet-image d-flex align-items-center">
      <div class="row">
        <h2 class="col-lg-10 offset-lg-1">
          With the mouth of the fjord sitting on the far western horizon and the
          ice cap knocking at the door, all roads lead to the backcountry.
        </h2>
      </div>
    </div>
    <div class="container">
      <div class="row teaser-block">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="teaser-block__text">
            <h2>Experience nature.</h2>
            <p>
              Kangerlussuaq has more than 300 days of clear sky a year, making
              it one of the best places to see the northern lights which are
              visible between October and April.
            </p>
          </div>
        </div>
        <div
          class="col-lg-6 offset-lg-1 teaser-block__image"
          style="background-image: url('/images/northern-lights-1.jpg')"
        />
      </div>
      <div class="row teaser-block">
        <nuxt-link
          to="/tours/ice-sheet"
          class="col-lg-6 teaser-block__image"
          style="background-image: url('/images/ice-sheet/ice-sheet-2.jpg')"
        />

        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="teaser-block__text">
            <h2>Get close. Real close.</h2>
            <p>
              The Greenland Ice Cap is a mecca for travelers who wish to see a
              true wonder of the world. Kangerlussuaq offers easy access to the
              Greenland Ice Cap, via a 25 km dirt road.
            </p>
          </div>
        </div>
      </div>
      <div class="row teaser-block">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="teaser-block__text">
            <h2>Majestic. Wild. Life.</h2>
            <p>
              Surround yourself by muskoxen and caribou with outstanding
              opportunity for amazing pictures of the Arctic wildlife.
            </p>
          </div>
        </div>
        <div
          class="col-lg-6 offset-lg-1 teaser-block__image"
          style="background-image: url('/images/wildlife/muskox-1.jpg')"
        />
      </div>
    </div>
    <ContactCta />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
