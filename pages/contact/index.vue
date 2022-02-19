<template>
  <div v-if="data != null" class="main-grid">
    <div class="container">
      <div class="row tour-intro py-5">
        <div class="col-lg-4 offset-lg-1 d-flex align-items-center">
          <div class="row">
            <div
              class="split-block__text"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2>
                {{ data.title }}
              </h2>
              <p v-for="p in data.text.content">
                <span v-html="p.content[0].value" />
              </p>
            </div>
            <div
              class="contact-form py-5"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3>Write a message</h3>
              <form>
                <label for="name">
                  <h4>Your name</h4>
                </label>
                <input id="name" type="text" /><br />
                <label for="email">
                  <h4>Your email</h4>
                </label>
                <input id="email" type="text" /><br />
                <label for="message"> <h4>Your message</h4></label>
                <textarea id="message" type="textarea" /><br />
                <CtaButton
                  class="mt-4"
                  :data="{
                    text: submitButtonText,
                    linkDestination: '',
                  }"
                  @click.native="submitForm()"
                />
              </form>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 offset-lg-1"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div class="row">
            <div
              class="split-block__image"
              :style="
                'background-image: url(' +
                data.image.fields.file.url +
                '?fm=webp)'
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts"></script>
