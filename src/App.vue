<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/menu.vue'
import { setTaskTimer } from './util'
document.documentElement.setAttribute('theme-mode', 'dark');
function remind() {
  setTaskTimer()
}
</script>

<template>
  <Menu class="menu"></Menu>

  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.menu {
  width: 70px;
  height: 100%;
  font-size: 10px;
}
.content {
  overflow: auto;
  background-color: #23292d;
  border-radius: 8px;
  width: calc(100vw - 82px);
}
</style>
