<script setup lang="ts">
import { getAssetsFile } from '../util'
</script>

<template>
  <div class="content">
    <img :src="getAssetsFile('tip')" alt="" />
    <p>消息提示 当前使用的是测试版本，可能会又各种bug，遇到问题请理性反馈，谢谢。</p>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  background-color: #433519;
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
  img {
    width: 20px;
    margin-right: 10px;
  }
}
</style>
