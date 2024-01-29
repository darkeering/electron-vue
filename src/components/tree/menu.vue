<script setup lang="ts">
import { getAssetsFile } from '@/util'
import dinput from '../d-input.vue'
const props = defineProps<{ item: any, childrenShow: boolean }>()
const emits = defineEmits(['toggle'])
function toggle() {
  emits('toggle')
}
</script>

<template>
  <div class="flex align-center menu" :style="{ 'padding-left': 16 * props.item.index + 6 + 'px' }">
    <img class="toggle" :class="{childrenShow: props.childrenShow}" :src="getAssetsFile('线性-_下箭头')" alt="" @click="toggle()" />
    <div class="check">
      <dinput />
    </div>
    <p>{{ props.item.title }}</p>
    <span>steam-chat.com</span>
  </div>
</template>

<style scoped>
.menu {
  padding: 6px;
  border-radius: 6px;
  margin-top: 6px;
  position: relative;
  &:first-child {
    margin-top: 0;
  }
  p {
    margin-left: 10px;
    color: #fff;
  }
  span {
    margin-left: auto;
  }
  &:hover {
    background-color: #343c3f;
  }
}
.check {
  margin-left: 46px;
}
.toggle {
  position: absolute;
  transform: rotate(-90deg);
  width: 15px;
  height: 15px;
  cursor: pointer;
  &:hover {
    background-color: #343c3f;
  }
}
.childrenShow {
  transform: rotate(0);
}
</style>
