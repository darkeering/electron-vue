<script setup lang="ts">
import { getAssetsFile } from '@/util'
</script>

<template>
  <ul class="flex align-center">
    <li class="tab">
      <img class="icon" :src="getAssetsFile('steam')" alt="" />
      <span class="label">Steam</span>
      <img class="delete" :src="getAssetsFile('delete')" alt="" />
    </li>
    <li class="add flex align-center">
      <img :src="getAssetsFile('plus')" alt="">
    </li>
  </ul>
</template>

<style scoped>

.tab {
  display: flex;
  align-items: center;
  width: 200px;
  background-color: #343c3f;
  padding: 4px 6px;
  border-radius: 4px;
  .icon {
    width: 20px;
  }
  .label {
    color: #fff;
    margin-left: 6px;
  }
  .delete {
    width: 20px;
    margin-left: auto;
  }
}
.add {
  margin-left: 10px;
  cursor: pointer;
  img {
    width: 20px;
  }
}
</style>
