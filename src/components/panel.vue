<script setup lang="ts">
import { getAssetsFile } from '@/util'
import { ref } from 'vue'
import dinput from '../components/d-input.vue'
import tree from '../components/tree/tree.vue'
import heighttransiton from './height-transition.vue'
const active = ref(false)
</script>

<template>
  <div class="panel-container">
    <div class="flex align-center panel" @click="() => (active = !active)">
      <dinput></dinput>
      <p class="flex align-center">
        <img class="logo" :src="getAssetsFile('steam', 'ico')" alt="" />
        <span class="title">Steam服务</span>
      </p>
      <img class="toogle" :src="getAssetsFile('线性-_下箭头')" alt="" :class="{ active: active }" />
    </div>
    <heighttransiton>
      <div v-if="active">
        <div class="content">
          <tree />
        </div>
      </div>
    </heighttransiton>
  </div>
</template>

<style scoped>
img {
  width: 30px;
  height: 30px;
}

.panel {
  background-color: #2c3439;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 4px;
  &:hover {
    background-color: #343c3f;
  }
}
.logo {
  margin-left: 20px;
}
.title {
  margin-left: 12px;
  color: #fff;
}
.toogle {
  width: 20px;
  height: 20px;
  margin-left: auto;
  transform: rotate(-90deg);
  transition: all 0.25s;
  &.active {
    transform: rotate(0);
  }
}
.content {
  background-color: #2c3439;
  border-radius: 6px;
  border-bottom: 4px solid #23292d;
  padding: 20px 10px;
}
</style>
