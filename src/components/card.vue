<script setup lang="ts">
import { getAssetsFile } from '@/util'
const props = defineProps<{card: {
  title: string,
  auth: string,
  desc: string,
  left: string,
  right?: string,
  src: string
}}>()
</script>

<template>
  <div class="container">
    <div class="img">
      <img :src="props.card.src" alt="" />
    </div>
    <div class="padding content">
      <p class="title">{{props.card.title}}</p>
      <p class="auth">{{props.card.auth}}</p>
      <p v-html="props.card.desc" class="desc"></p>
      <div class="tag">
        <span class="left" v-html="props.card.left"></span>
        <span v-if="props.card.right" class="right">{{props.card.right}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #2d373b;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  height: 350px;
  transition: all 0.3s;
  .img {
    width: 100%;
    height: 50%;
    overflow: hidden;
    img {
      width: 100%;
      transition: all 0.3s;
      transform: scale(1.01);
    }
  }

  .title {
    color: #fff;
  }

  &:hover {
    background-color: #333c41;
    transform: translateY(-4px);
    img {
      transform: scale(1.2);
    }
  }

  .padding {
    padding: 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 50%;
    .tag {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      span {
        background-color: #40474b;
        display: flex;
        align-items: center;
        color: #fff;
        padding: 2px 8px;
        font-size: 12px;
        font-weight: 500;
        border-radius: 4px;
      }
      .right {
        font-size: 16px;
        background-color: #4c6b22;
        color: #beee11;
      }
    }
  }
}
</style>
