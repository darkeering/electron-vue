<script setup lang="ts">
import dmenu from './menu.vue'
import ditem from './item.vue'
import heighttransiton from '../height-transition.vue'
const props = defineProps<{ items: any }>()
</script>

<template>
  <ul>
    <li v-for="item in props.items" :key="item.title">
      <template v-if="item.children">
        <dmenu
          :item="item"
          :childrenShow="!!item.childrenShow"
          @toggle="() => (item.childrenShow = !item.childrenShow)"
        />
        <heighttransiton>
          <template v-if="item.childrenShow" >
            <list :items="item.children" v-if="item.childrenShow" />
          </template>
        </heighttransiton>
      </template>
      <template v-if="!item.children">
        <ditem :item="item" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
