<script setup lang="ts">
import { getAssetsFile } from '@/util';
import { nextTick, ref } from 'vue';
const toogleButton: any = ref(null)
const dropDown: any = ref(null)
const pos = ref({
  x: 0,
  y: 0
})
const show = ref(false)

const tabs = ref([
  {
    title: '网络加速',
    active: true,
  },
  {
    title: '脚本配置',
  },
])
function setActive(tab: any) {
  tabs.value.forEach(t => {
    t.active = false
    if (t.title === tab.title) t.active = true
  })
}
async  function toogle() {
  show.value = !show.value
  await nextTick()
  const info = toogleButton.value.getBoundingClientRect()
  console.log(info);
  const _info = dropDown.value.getBoundingClientRect()
  if (info.x + _info.width > window.innerWidth) {
    console.log(true);
    pos.value.x = info.x - (info.x + _info.width - window.innerWidth) - (window.innerWidth - info.x - info.width)
    pos.value.y = info.y + info.height
  }
}
</script>

<template>
  <div style="position: relative;">
    <ul class="tabs">
      <li :class="{ active: tab.active }" v-for="tab in tabs" :key="tab.title" @click="() => setActive(tab)">
        <span>{{ tab.title }}</span>
      </li>
    </ul>
    <div class="title">
      <div class="logo">
        <img :src="getAssetsFile('Thunder')" alt="">
      </div>
      <div class="desc">
        <h1 style="color: #fff;">网络加速</h1>
        <a>作者：Darkeering</a>
        <p style="font-size: 12px;">提供一些游戏相关网站服务的加速以及脚本注入功能</p>
      </div>
      <ul class="actions">
        <li>
          <img :src="getAssetsFile('Top Speed')" alt="">
          <button>一键加速</button>
        </li>
        <li>
          <img :src="getAssetsFile('refresh')" alt="">
          <button>刷新</button>
        </li>
        <li>
          <img style="transform: scale(1.4);" :src="getAssetsFile('setting-1')" alt="">
          <button>加速设置</button>
        </li>
        <li ref="toogleButton">
          <button @click="() => toogle()">
            <img style="transform: scale(1.4); margin: 0;" :src="getAssetsFile('more')" alt="">
          </button>
        </li>
      </ul>
    </div>
  </div>
  <Teleport to="body">
    <ul v-if="show" ref="dropDown" class="drop-down" :style="{ top: pos.y + 'px', left: pos.x + 'px' }">
      <li class="drop-down-item">
        Version 3.7373737
      </li>
    </ul>
  </Teleport>
</template>

<style scoped>
.tabs {
  display: inline-flex;
  background-color: #191a1d;
  border: 1px solid #3f4043;
  border-radius: 6px;
  overflow: hidden;
  color: #fff;
  position: absolute;
  right: 10px;
  top: 10px;

  li {
    padding: 4px 5px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.25s;
    position: relative;

    span {
      display: flex;
      align-items: center;
      border-radius: 6px;
      padding: 2px 6px;
      transition: all 0.25s;
    }

    span:hover {
      background-color: #262729;
    }

    &.active {
      background-color: #28292b;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        height: 4px;
        width: 24px;
        border-radius: 4px;
        background-color: #49baf5;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
        animation: bar;
        animation-duration: 0.25s;
      }

      span {
        background-color: #28292b;
      }
    }
  }
}

.title {
  position: absolute;
  top: 50px;
  left: 30px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr 4fr;
}

.logo {
  width: 120px;
  height: 120px;
  background-color: #1e2021;
  border-radius: 6px;
  display: grid;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
  }
}

.desc {
  display: grid;
  align-items: end;
  margin-left: 10px;
}

.actions {
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  align-items: end;
  margin-right: 20px;

  li {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 6px 10px;
    margin-left: 6px;

    button {
      background-color: transparent;
      display: flex;
      padding: 0;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
    }

    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }

    &:hover {
      background-color: #2f3539;
    }
  }
}

.drop-down {
  margin-top: 8px;
  position: fixed;
  z-index: 1;
  background-color: #404b53;
  border-radius: 6px;

  .drop-down-item {
    text-wrap: nowrap;
    color: #fff;
    padding: 4px 8px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #2f3539;
    }
  }
}


@keyframes bar {
  0% {
    width: 0;
  }

  80% {
    width: 30px;
  }

  100% {
    width: 24px;
  }
}
</style>
