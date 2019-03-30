<template>
  <div class="m-products-list">
    <dl>
      <dd v-for="(item,idx) in nav" :key="idx" 
      :class="[item.active===true?'s-nav-active':'']"
      @click="select(item.txt,idx)">{{item.txt}}</dd>
    </dl>
    <ul>
       <item v-for="(item,idx) in list" :key="idx" :meta="item"/> 
    </ul>
  </div>
</template>

<script>
import item from "@/components/products/product";
export default {
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          acitve: false
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false
        }
      ]
    };
  },
  components:{
      item
  },
  props:{
      list:{
          type:Array,
          default:[]
      }
  },
  methods:{
      select(txt,idx){
          let self=this
          if(txt==="价格最低"){
              self.list.sort((a,b)=>{
                  return a.price-b.price
              })
          }else if(txt==="人气最高"){
              self.list.sort((a,b)=>{
                  return b.comment-a.comment
              })
          }else if(txt==="评价最高"){
              self.list.sort((a,b)=>{
                  return b.rate-a.rate
              })
          }else if(txt==="智能排序"){
              self.list.sort((a,b)=>{
                  return a.name.charCodeAt(0)-b.name.charCodeAt(0)
              })
          }
          self.nav.forEach(item=>{
              if(item.txt===txt){
                  item.acitve=true
              }else{
                  item.acitve=false
              }
          })
      }
  }
};
</script>

<style lang="scss">
</style>


