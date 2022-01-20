<template>
  <footer>
    <div class="container footer">
      <div class="row">
        <div class="col-lg-4 offset-lg-1">
          <h3>Sitemap</h3>
          <h4>
            <nuxt-link to="tours"> TOURS </nuxt-link>
          </h4>
          <ul>
            <li>
              <nuxt-link to="tours/ice-sheet"> Ice Sheet Tour </nuxt-link>
            </li>
            <li>
              <nuxt-link to="tours/wildlife"> Wildlife Tour </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#"> Dog Sledding </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#"> Northern Lights </nuxt-link>
            </li>
          </ul>
          <h4>
            <nuxt-link to="about"> ABOUT </nuxt-link>
          </h4>
          <h4>
            <nuxt-link to="contact"> CONTACT </nuxt-link>
          </h4>
        </div>
        <div class="col-lg-4 offset-lg-2">
          <h3>Arctic Tours ApS</h3>
          <p>
            Myers Avenue 10,<br />
            3910 Kangerlussuaq<br />
            Greenland
          </p>
          <h4>EMail</h4>
          <p>
            <a href="mailto:contact@arctictours.gl">contact@arctictours.gl</a>
          </p>
          <h4>Phone</h4>
          <p>
            <a href="tel:+299527202">+299 52 72 02</a>
          </p>
        </div>
      </div>
    </div>
    <div class="sub-footer">Arctic Tours ApS © 2022</div>
  </footer>
</template>

<script src="./mainFooter.ts"></script>
<style src="./mainFooter.scss" lang="scss"></style>
