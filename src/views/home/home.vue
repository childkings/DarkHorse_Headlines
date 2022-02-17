<template>
  <div>
    <div class="home_header">黑马头条</div>
    <div class="home_body">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="container" v-for="item  in tempList" :key="item.art_id">
            <div class="news_box_type1" v-if="item.cover.type == 0">
              <div>{{item.title+item.art_id}}</div>
              <div>作者&nbsp;{{item.aut_name}} {{item.comm_count}}评论&nbsp;&nbsp;发布日期{{item.pubdate | countDate}}</div>
            </div>
            <div class="news_box_type2" v-else-if="item.cover.type == 1">
              <div>{{item.title+item.art_id}} <img :src="item.cover.images" alt=""></div>
              <div>作者&nbsp;{{item.aut_name}} {{item.comm_count}}评论&nbsp;&nbsp;发布日期{{item.pubdate | countDate}}</div>
            </div>
            <div class="news_box_type3" v-else>
              <div>{{item.title+item.art_id}}</div>
              <div><img :src="item.cover.images[0]" alt=""><img :src="item.cover.images[1]" alt=""><img :src="item.cover.images[2]" alt=""></div>
              <div>作者&nbsp;{{item.aut_name}} {{item.comm_count}}评论&nbsp;&nbsp;发布日期{{item.pubdate | countDate}}</div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  data() {
    return {
      list: [],
      tempList: [],
      loading: true,
      finished: false,
      refreshing: false,
      tempNum: 10
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.tempList = []
          this.tempNum = 10
          this.refreshing = false
        }
        for (let i = this.tempNum - 10; i < this.tempNum; i++) {
          this.tempList.push(this.list[i])
        }
        this.tempNum += 10
        this.loading = false
        if (this.tempList.length >= this.list.length) {
          this.finished = true
        }
      }, 1000)
    },
    async initArticleList() {
      const { data: res } = await request.get('/articles', {
        params: {
          _page: this.giveParams._page,
          _limit: this.giveParams._limit
        }
      })
      this.list = res
      for (let i = this.tempNum - 10; i < this.tempNum; i++) {
        this.tempList.push(this.list[i])
      }
      this.tempNum += 10
      this.loading = false
    },
    giveParams() {
      return {
        _page: 1,
        _limit: 1
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      this.initArticleList()
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  },
  created() {
    this.initArticleList()
  },
  filters: {
    countDate(val) {
      const date = new Date()
      if (date.getFullYear() - val.substr(0, 4) > 0) {
        return date.getFullYear() - val.slice(0, 4) + '年前'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .home_header {
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: rgb(1, 117, 255);
    color: white;
    font-size: 16px;
  }
  .home_body {
    padding:50px 0;
    .container {
      padding: 10px;
      >div {
        >div:last-child {
          padding: 5px 0;
          color: rgb(171, 171, 171);
          font-size: 13px
        }
      }
      .news_box_type1 {
      }
      .news_box_type2 {
        >div:first-child {
          display: flex;
          justify-content: space-between;
        }
        img {
          width: 120px;
        }
      }
      .news_box_type3 {
        >div:nth-child(2) {
          width: 100%;
          display: flex;
          justify-content: space-between;
          img {
            width: 30%;
          }
        }
      }
    }
  }
</style>
