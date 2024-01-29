<script setup lang="ts">
import router from '@/router';
import {getAssetsFile} from '../util'
import { ref } from 'vue'

const menus = ref([
  {
    title: '起始页',
    src: 'home',
    active: true,
    id: '/'
  },
  {
    title: '网络加速',
    src: 'Thunder',
    id: '/net'
  },
  {
    title: '帐号切换',
    src: 'icon-crowd',
    id: '/auth'
  },
  {
    title: '库存游戏',
    src: 'game'
  },
  {
    title: '本地令牌',
    src: 'MicrosoftAuthenticator'
  },
  {
    title: 'Steam挂卡',
    src: 'cards'
  },
  {
    title: '游戏工具',
    src: 'gongju'
  },
  {
    title: '插件商店',
    src: 'mall'
  },
  {
    title: '设置',
    src: 'setting'
  },
])

const setActive = (menu: any) => {
  menus.value.forEach(m => {
    m.active = false
    if(menu.title === m.title) m.active = true
  })
  router.push(menu.id)
}


</script>

<template>
  <div>
    <ul>
      <li v-for="menu in menus.slice(0, -2)" :key="menu.title" :class="{ active: menu.active }" @click="() => setActive(menu)">
        <img :src="getAssetsFile(menu.src)" alt="" />
        <span v-if="!menu.active"> {{ menu.title }} </span>
      </li>
    </ul>
    <ul>
      <li v-for="menu in menus.slice(-2)" :key="menu.title" :class="{ active: menu.active }" @click="() => setActive(menu)">
        <img :src="getAssetsFile(menu.src)" alt="" />
        <span v-if="!menu.active"> {{ menu.title }} </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul {
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 25px;
    }
  }
}
li.active {
  background-color: #262f35;
  &::before {
      content: "";
      display: inline-block;
      position: absolute;
      height: 24px;
      width: 4px;
      border-radius: 4px;
      background-color: #49baf5;
      left: 4px;
    }
}

li:hover {
  background-color: #212b30;
  color: #fff;
}
</style>
