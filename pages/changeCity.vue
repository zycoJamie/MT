<template>
    <div class="page-changeCity">
        <el-row>
            <el-col><i-select></i-select></el-col>
        </el-row>
        <el-row>
            <el-col><category></category></el-col>
        </el-row>
        <el-row>
            <el-col>3</el-col>
        </el-row>
    </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
import category from '@/components/changeCity/category'
export default {
    components:{
        iSelect,category
    }
}
</script>

<style lang="scss">

</style>


