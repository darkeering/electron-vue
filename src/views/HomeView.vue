<script setup lang="ts">
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
    title: '2023年国游销量年榜正式发布',
    auth: '国游销量榜',
    desc: '2023年国产游戏销量榜单',
    left: '2024-01-22',
    right: '-87%',
    src: getAssetsFile('河边露营')
  }
]
</script>

<template>
  <div class="home">
    <div class="home-container">
      <Alert />
      <h2>欢迎使用 Dar Toolkit</h2>
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
        <Card class="card" v-for="card in news" :card="card"></Card>
      </div>
      <div class="title">
        <h1>精选</h1>
        <button>访问DarGame商城</button>
      </div>
      <div class="new">
        <Card class="card" v-for="choose in chooses" :card="choose"></Card>
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
</style>
