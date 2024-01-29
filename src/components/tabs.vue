<script setup lang="ts">
import { getAssetsFile } from '@/util'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
const tabs: any = ref(null)
const toogleButton: any = ref(null)
const dropDown: any = ref(null)
const pos = ref({
  x: 0,
  y: 0
})
const showTabs = ref([
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  }
])
const moreTabs: any = ref([])
const show = ref(false)
onMounted(() => {
  fn()
})
async function toogle() {
  show.value = !show.value
  if (!show.value) return
  await nextTick()
  const info = toogleButton.value.getBoundingClientRect()
  const _info = dropDown.value.getBoundingClientRect()
  if (info.x + _info.width > window.innerWidth) {
    pos.value.x =
      info.x -
      (info.x + _info.width - window.innerWidth) -
      (window.innerWidth - info.x - info.width)
    pos.value.y = info.y + info.height
  } else {
    pos.value.x = info.x
    pos.value.y = info.y + info.height
  }
}

function fn1(e: any) {
  if (!toogleButton.value.contains(e.target)) {
    show.value = false
  }
}

document.addEventListener('click', fn1)

function fn() {
  const parentNodeInfo = tabs.value.parentNode.getBoundingClientRect()
  const lastInfo = tabs.value.childNodes[tabs.value.childNodes.length - 1].getBoundingClientRect()
  if (lastInfo.right > parentNodeInfo.right) {
    const count = Math.ceil((lastInfo.right - parentNodeInfo.width) / 210)
    for (let i = 0; i < count; i++) {
      if (showTabs.value.length > 1) {
        moreTabs.value.unshift(showTabs.value.pop())
      }
    }
  }

  if (lastInfo.right + 210 < parentNodeInfo.right && moreTabs.value.length > 0) {
    showTabs.value.push(moreTabs.value.shift())
  }
  if (show.value) {
    const info = toogleButton.value.getBoundingClientRect()
    const _info = dropDown.value.getBoundingClientRect()
    if (info.x + _info.width > window.innerWidth) {
      pos.value.x =
        info.x -
        (info.x + _info.width - window.innerWidth) -
        (window.innerWidth - info.x - info.width)
      pos.value.y = info.y + info.height
    } else {
      pos.value.x = info.x
      pos.value.y = info.y + info.height
    }
  }
}
window.addEventListener('resize', fn)
onUnmounted(() => {
  document.removeEventListener('click', fn1)
  window.removeEventListener('resize', fn)
})
</script>

<template>
  <ul class="flex align-center" ref="tabs">
    <li class="tab" v-for="tab in showTabs" :key="tab.id">
      <img class="icon" :src="getAssetsFile('steam')" alt="" />
      <span class="label">Steam {{ tab.id }}</span>
      <img class="delete" :src="getAssetsFile('delete')" alt="" />
    </li>
    <li class="add flex align-center" ref="toogleButton" @click="() => toogle()">
      <img :src="getAssetsFile('more')" alt="" />
    </li>
    <li class="add flex align-center">
      <img :src="getAssetsFile('plus')" alt="" />
    </li>
  </ul>

  <Teleport to="body">
    <ul
      v-if="show"
      ref="dropDown"
      class="drop-down"
      :style="{ top: pos.y ? pos.y + 'px' : 'unset', left: pos.x ? pos.x + 'px' : 'unset' }"
    >
      <li v-for="tab in moreTabs" :key="tab.id" class="drop-down-item">Steam {{ tab.id }}</li>
    </ul>
  </Teleport>
</template>

<style scoped>
.tab {
  display: flex;
  align-items: center;
  width: 200px;
  background-color: #2c3439;
  padding: 6px 10px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  margin-right: 10px;
  flex-shrink: 0;
  &:hover {
    background-color: #343c3f;
  }
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
  margin-right: 10px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  img {
    width: 20px;
  }
  &:hover {
    background-color: #343c3f;
  }
}
.drop-down {
  margin-top: 8px;
  position: fixed;
  z-index: 1;
  background-color: #2f3539;
  border-radius: 6px;
  transition: left 0.5s;

  .drop-down-item {
    text-wrap: nowrap;
    color: #fff;
    padding: 4px 8px;
    border-radius: 6px;
    cursor: pointer;
    min-width: 120px;

    &:hover {
      background-color: #404b53;
    }
  }
}
</style>
