<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" 
    placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-select v-model="cvalue" 
    :disabled="!city.length"
    placeholder="城市">
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-autocomplete
    v-model="input"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入城市中文或拼音"
    @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
import _ from 'lodash'
import pinyin from 'pinyin'
export default {
  data(){
      return {
          province:[],
          pvalue:'',
          city:[],
          cvalue:'',
          input:'',
          allCities:[],
          citypy:[]
      }
  },
  watch:{
      pvalue:async function(newPvalue) {
          let self=this
          console.log(self)
          let {status,data:{citys}}=await self.$axios.get(`/geo/getProvince/${newPvalue}`)
          if(status===200){
            self.city=citys.map(item=>{
            return {
                value:item.id,
                label:item.name
            }
          })
          self.cvalue=''
          }
      }
  },
  mounted: async function(){
      let self=this;
      let {status,data:{provinces}}= await self.$axios.get(`/geo/getProvince`)
      if(status===200){
          self.province=provinces.map(item=>{
              return {
                  value:item.id,
                  label:item.name
              }
          })
      }else{
          self.province=[]
      }
  },
  methods:{
      querySearchAsync:_.debounce(async function(query,callback){
          self=this
          if(/^[a-zA-Z]{1,}$/g.test(query)){
              query=query.toLowerCase()
              if(self.citypy.length){
                  let py=self.citypy.filter(item=>{
                      return item.py.indexOf(query)!=-1
                  })
                  callback(py.map(item=>{
                      return {
                          value:item.name
                      }
                  }))
              }else{
                  let {status,data:{cityPinyin}}= await self.$axios.get(`/geo/city/pinyin`)
                  if(status===200){
                      self.citypy=cityPinyin
                      let py=self.citypy.filter(item=>{
                          return item.py.indexOf(query)!=-1
                      })
                      callback(py.map(item=>{return {value:item.name}}))
                  }
              }
          }else{
           if(self.allCities.length){
              let cities=self.allCities.filter(item=>{
                  return item.value.indexOf(query)!=-1
              })
              callback(cities)
            }else{
              let {status,data:{city}} = await self.$axios.get(`/geo/city`)
              if(status===200){
                  self.allCities=city.map(item=>{
                      return {
                          value:item.name,
                      }
                  })
                  callback(self.allCities.filter(item=>item.value.indexOf(query)!=-1))
              }else{
                  self.allCities=[]
                  callback([])
              }
            }   
          }
      },300),
      handleSelect(item){
          console.log(item.value)
          location.href='/'
      }
  }
};
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss';
</style>


