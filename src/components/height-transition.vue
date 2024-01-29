<script setup lang="ts">
const hieghtTransitionStyle = `all .25s ease`
let timer: any;
function onBeforeEnter(el: any) {
  el.style.transition = hieghtTransitionStyle
  el.style.height = 0
  el.style.opacity = 0
}

function onEnter(el: any, done: any) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
  el.style.opacity = 1
  timer = setTimeout(() => {
    done()
    el.style.height = 'unset'
  }, 500)
}

function onBeforeLeave(el: any) {
  clearTimeout(timer)
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
}

function onLeave(el: any, done: any) {
  el.style.height = 0
  el.style.opacity = 0
  timer = setTimeout(() => {
    done()
  }, 500)
}
</script>

<template>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
  >
    <slot></slot>
  </Transition>
</template>

<style scoped></style>
