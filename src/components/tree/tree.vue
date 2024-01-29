<script setup lang="ts">
import { provide, ref } from 'vue';
import dlist from './list.vue'

const items = ref([
  {
    title: 'Steam 好友聊天',
    index: 0,
    children: [
      {
        title: 'Steam 聊天图片上传',
        index: 1,
        children: [
          {
            title: 'Steam 等级3',
            index: 2
          }
        ]
      }
    ]
  },
  {
    title: 'Steam 图片',
    index: 0
  },
  {
    title: 'Steam 更新',
    index: 0
  },
  {
    title: 'Steam 社区',
    index: 0,
    children: [
      {
        title: 'Steam 留言讨论',
        index: 1
      },
      {
        title: 'Steam 社区（解锁访问限制）',
        index: 1
      },
      {
        title: 'Steam 社区图片上传',
        index: 1
      }
    ]
  },
  {
    title: 'Steam 商店',
    index: 0,
    children: [
      {
        title: 'Steam 商店（解锁访问限制）',
        index: 1
      }
    ]
  }
])

provide('setToggle', () => {
  
})
</script>

<template>
  <dlist :items="items" />
</template>

<style scoped></style>
