<template>
    <div class="m-detail-list">
        <ul>
            <li>{{list.filter(item=>item.photos.length>0).length}}款套餐</li>
            <item v-for="(item,idx) in list" :meta="item" :key="idx"/>
        </ul>
    </div>
</template>
    
<script>
import Item from '@components/detail/item'
export default {
    components:{
        Item
    },
    prpos:{
        list:{
            type:Array,
            default:[]
        }
    }
}
</script>
    
<style lang='scss'>
    
</style>