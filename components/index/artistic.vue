<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd v-for="item in havingStyle" 
      :key="item.type" 
      :class="{'active':kind===item.type}"
      :id="item.type">{{item.type}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,idx) in cur.child" :key="idx">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" :alt="item.title">
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li style="width:100%">
                <span class="price">￥{{item.price}}</span>
                <span class="pos" style="float:right"><span>{{item.local}}</span></span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "全部",
      havingStyle: [
        {
          type: "全部",
          child: [
            {
              img:
                "https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            }
          ]
        },
        {
          type: "约会聚餐",
          child: [
            {
              img:
                "https://p0.meituan.net/deal/bf5fdeadf77d7feda9cbb3352d1ddb19236499.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p0.meituan.net/deal/bf5fdeadf77d7feda9cbb3352d1ddb19236499.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p0.meituan.net/deal/bf5fdeadf77d7feda9cbb3352d1ddb19236499.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p0.meituan.net/deal/bf5fdeadf77d7feda9cbb3352d1ddb19236499.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p0.meituan.net/deal/bf5fdeadf77d7feda9cbb3352d1ddb19236499.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p0.meituan.net/deal/bf5fdeadf77d7feda9cbb3352d1ddb19236499.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            }
          ]
        },
        {
          type: "丽人SPA",
          child: [
            {
              img:
                "https://p1.meituan.net/tdchotel/642a2a393c335bd0624fb81074baccf5103512.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/tdchotel/642a2a393c335bd0624fb81074baccf5103512.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/tdchotel/642a2a393c335bd0624fb81074baccf5103512.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/tdchotel/642a2a393c335bd0624fb81074baccf5103512.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/tdchotel/642a2a393c335bd0624fb81074baccf5103512.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            },
            {
              img:
                "https://p1.meituan.net/tdchotel/642a2a393c335bd0624fb81074baccf5103512.jpg@368w_208h_1e_1c",
              title: "幸福西饼",
              smallText: "简介",
              price: "200",
              local: "会展中心"
            }
          ]
        }
      ]
    };
  },
  computed: {
    cur() {
      return this.havingStyle.filter(item => item.type === this.kind)[0];
    }
  },
  methods: {
    over(e) {
        console.log('mouseover'+e.target.id)
      if (e.target.id != undefined && e.target.id != '') {
        this.kind = e.target.id;
      } else if(!this.kind){
          this.kind = "全部"
      }
    }
  }
};
</script>

<style lang='css'>
</style>