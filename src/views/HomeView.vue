<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Alert from '../components/alert.vue'
import Card from '../components/card.vue'
import { getAssetsFile } from '../util'

const news = [
  {
    title: '2023年国游销量年榜正式发布',
    auth: '国游销量榜',
    desc: '2023年国产游戏销量榜单',
    left: '2024-01-22',
    src: getAssetsFile('河边露营')
  },
  {
    title: '喵喵汪汪大胜利！《萌宠拆拆乐》来袭！',
    auth: '萌宠拆拆乐制作组',
    desc: '喵喵汪汪大胜利！超解压萌宠拆家派对游戏《萌宠拆拆乐》来袭！',
    left: '2024-01-21',
    src: getAssetsFile('宫崎骏风格')
  },
  {
    title: '帕斯亚活动中央公示及领取方法',
    auth: '福利官',
    desc: '中奖的伙伴们要及时领取<br />超过公示时间就没办法领取了',
    left: '2024-01-19',
    src: getAssetsFile('多人办公')
  }
]

const chooses = [
  {
    title: '幻兽帕鲁/（国区礼物不是激活码）',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('河边露营')
  },
  {
    title: '雷神加速器',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('酷炫快递员')
  },
  {
    title: '猛兽派对',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('节日')
  },
  {
    title: '绝地求生',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('恐龙陪读')
  },
  {
    title: '战神4',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('思考')
  },
  {
    title: '战神4',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('思考')
  },
  {
    title: '怪物猎人',
    auth: '多人｜冒险｜休闲',
    desc: '',
    left: '<del>￥68.00</del>￥9.90',
    right: '-87%',
    src: getAssetsFile('思考')
  }
]
const menus = [
  {
    title: '起始页',
    src: 'home'
  },
  {
    title: '网络加速',
    src: 'Thunder'
  },
  {
    title: '帐号切换',
    src: 'icon-crowd'
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
  }
]
let index = ref(0)
const start = computed(() => index.value * 4)
const end = computed(() => {
  return (index.value + 1) * 4 > chooses.length ? chooses.length : (index.value + 1) * 4
})
function next() {
  if (end.value >= chooses.length) {
    index.value = 0
    return
  }
  index.value++
}
function previous() {
  if (start.value <= 0) {
    index.value = Math.ceil(chooses.length / 4) - 1
    return
  }
  index.value--
}

onMounted(() => {
  let container = document.querySelector('.aaa')!
  let items = document.querySelectorAll('.bbb')
  let baseWidth = items[0].clientWidth + 20
  let nodeLayout: { y: number; x: number }[][] = []
  //一行可以放多少个
  let column = Math.floor(container.clientWidth / baseWidth)
  reset()
  function reset() {
    nodeLayout = []
    let row = Math.ceil(items.length / column)
    for (let i = 0; i < row; i++) {
      nodeLayout.push([])
    }
    items.forEach((node: any, index) => {
      //y轴坐标
      const y = Math.floor(index / column)
      //x轴坐标
      const x = index % column
      //生成视图对应的实例容器
      node.x = x
      node.y = y
      node.isNode = true
      nodeLayout[y].push(node)
    })
    //填充对象 方便后面变换顺序
    for (let i = 0; i < column; i++) {
      if (!nodeLayout[row - 1][i]) {
        nodeLayout[row - 1][i] = { y: row - 1, x: i }
      }
    }
    //设置top left
    changStyle(nodeLayout)
  }
  function changStyle(Layout: any[]) {
    Layout.forEach((arr: any[]) => {
      arr.forEach(
        (node: { isNode: any; y: number; x: number; style: { top: string; left: string } }) => {
          if (node.isNode) {
            if (node.y > 0) {
              resetTop(getNode(node.x, node.y - 1), node)
            } else {
              node.style.top = `${20}px`
            }
            node.style.left = `${node.x * baseWidth + 20}px`
          }
        }
      )
    })
  }
  function getNode(x: string | number, y: number) {
    if (!nodeLayout[y]) {
      return '不存在该节点'
    }
    // @ts-ignore
    if (!nodeLayout[y][x]) {
      return '不存在该节点'
    }
    // @ts-ignore
    return nodeLayout[y][x]
  }
  function resetTop(
    preNode: { style: { top: any }; clientHeight: number },
    node: { style: { top: string } }
  ) {
    let str = preNode.style.top
    let preTop = str.slice(0, str.length - 2) * 1
    node.style.top = `${preTop + preNode.clientHeight + 20}px`
  }
  function resetLeft(preNode: { style: { left: any } }, node: { style: { left: string } }) {
    let str = preNode.style.left
    let preLeft = str.slice(0, str.length - 2) * 1
    node.style.left = `${preLeft}px`
  }
  window.onresize = function () {
    const newColumn = Math.floor(container.clientWidth / baseWidth)
    if (newColumn !== column) {
      column = newColumn
      requestAnimationFrame(reset)
    }
  }
})
</script>

<template>
  <div class="home">
    <div class="home-container">
      <Alert />
      <div class="title">
        <h1>欢迎使用 Dar Toolkit</h1>
        <button>查看更多</button>
      </div>
      <div class="welcome">
        <div class="img">
          <img :src="getAssetsFile('呼啸幽灵')" />
        </div>
        <div>
          <p>发现问题请在Github上提交</p>
          <p style="color: #fff; font-size: 24px">3.0开始测试啦！</p>
          <button>阅读更多</button>
        </div>
      </div>
      <div class="title">
        <h1>最新消息</h1>
        <button>查看更多</button>
      </div>
      <div class="new">
        <Card class="card" v-for="card in news" :key="card.title" :card="card"></Card>
      </div>
      <div class="title">
        <h1>精选</h1>
        <button>访问DarGame商城</button>
      </div>
      <div class="lunbo">
        <i class="before" @click="() => previous()">&lt;</i>
        <div :style="{
          transform: `translateX(${-100 * index}%)`,
          transition: 'all 0.75s ease-in-out'
        }">
          <Card class="game" v-for="choose in chooses" :key="choose.title" :card="choose"></Card>
        </div>
        <i class="after" @click="() => next()">></i>
      </div>
      <div class="title">
        <h1>已安装功能</h1>
      </div>
      <div>
        <ul class="aaa">
          <li class="bbb" v-for="menu in menus" :key="menu.title">
            <img :src="getAssetsFile(menu.src)" alt="" />
            <span> {{ menu.title }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  width: 100%;
}

.home-container {
  width: 90%;
  max-width: 1240px;
  margin-top: 32px;

  h2 {
    color: #fff;
    margin-top: 10px;
  }

  h1 {
    color: #fff;
  }
}

.welcome {
  display: flex;
  background-color: #353b3e;
  height: 360px;
  margin-top: 16px;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  .img {
    width: 50%;
    min-width: 620px;
    overflow: hidden;
    height: 100%;
    margin: 0;

    img {
      width: 100%;
      transition: all 0.25s;
    }
  }

  div {
    align-self: center;
    margin-left: 12px;
  }

  button {
    color: #fff;
    background-color: #0078d4;
    display: flex;
    align-items: center;
    justify-items: center;
    border-style: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
  }
}

.title {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #91e2f9;
    background-color: transparent;
    border-style: none;
    padding: 6px 8px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #2f3539;
    }
  }
}

.new {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .card {
    width: 32.5%;
  }
}

.lunbo {
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  .before {
    position: absolute;
    z-index: 1;
    font-size: 24px;
    line-height: 36px;
    height: 36px;
    width: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    opacity: 0.5;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .after {
    position: absolute;
    z-index: 1;
    font-size: 24px;
    line-height: 36px;
    height: 36px;
    width: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    opacity: 0.5;
    border-radius: 50%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .game {
    display: inline-block;
    width: 23.5%;
    height: 300px;
    margin-right: 2%;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}

ul {
  margin-top: 12px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  li {
    position: absolute;
    transition: all 0.3s;
    will-change: transform;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-right: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    color: #fff;
    padding: 20px;
    background-color: #303538;
    transition: all 0.3s;

    img {
      width: 75px;
    }
  }

  li:hover {
    background-color: #353b3f;
  }
}</style>
