<template>
<div>
    <el-carousel>
        <el-carousel-item height="100px" v-for="(item,idx) in banner" :key="idx">
            <nuxt-link :to="item.url"><img :src="item.img"/></nuxt-link>
        </el-carousel-item>

    </el-carousel>
</div>
</template>

<script>
export default {
    data(){
        return {
            banner:[
                {
                    url:'#',
                    img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
                },
                {
                    url:'#',
                    img:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
                },
                {
                    url:'#',
                    img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                }
            ]
        }
    }
}
</script>

<style lang='css'>

</style>