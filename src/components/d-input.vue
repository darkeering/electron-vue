<script setup lang="ts">
import { getAssetsFile } from '@/util';
import { ref } from 'vue';

const active = ref(false)
</script>

<template>
  <div class="input" :class="{ active }" @click="() => (active = !active)">
    <img :src="getAssetsFile('线性-_勾2')" alt="" />
  </div>
</template>

<style scoped>
.input {
  width: 20px;
  height: 20px;
  border: 1px solid #787878;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  img {
    width: 90%;
    height: 90%;
    opacity: 0;
    transition: all 0.25s;
  }
  &.active {
    border-color: #4cc2ff;
    background-color: #4cc2ff;
    img {
      opacity: 1;
    }
  }
}
</style>
