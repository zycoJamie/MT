<template>
    <div class="m-product-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,idx) in types" :key="idx">
                <iselect :name="item.type" :list="item.module"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,idx) in areas" :key="idx">
                <iselect :name="item.type" :list="item.module"/>
            </dd>
        </dl>
    </div>
</template>

<script>
import iselect from '@/components/products/iselect'
export default {
    components:{
        iselect
    },
    props:{
        types:{
            type:Array,
            default:[]
        },
        areas:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style lang="scss">

</style>


