<template>
  <div class="bm">
    <div class="bm-wrapper" :class="{ hidden: !isOpen }" @click.self="isOpen = !isOpen">
      <div class="bm-menu">
        <div class="bm-menu__header">
          <div class="close-button" @click="isOpen = !isOpen">
            <span>&#x2715</span>
          </div>
        </div>
        <NavMenu @close-menu="isOpen = !isOpen" />
      </div>
    </div>
    <div class="bm-menu-button" @click="isOpen = !isOpen">
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script src="./burgerMenu.ts"></script>
<style src="./burgerMenu.scss" lang="scss"></style>
