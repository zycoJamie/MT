<template>
    <div class="page-cart">
        <el-row>
            <el-col v-if="1||cart.length" :span="24" class="m-cart">
                <list :cartData="cart"/>
                <p>应付金额：<em class="money">￥{{total}}</em></p>
                <div class="post"><el-button type="primary" round @click="submit">提交订单</el-button></div>
            </el-col>
            <el-col v-else class="empty">购物车为空</el-col>
        </el-row>
    </div>
</template>
    
<script>
import List from '@/components/cart/list'
export default {
    components:{
        List
    },
    data(){
        return {
            cart:[]
        }
    },
    computed:{
        total(){
            var total=0
            this.cart.forEach(item=>total+=item.count*item.price)
            return total
        }
    },
    methods:{
        submit:async function(){
            let self=this
            const {status,data:{code,id}}=await self.$axios.post('/order/createOrder',{
                count:self.cart[0].count,
                price:self.cart[0].price,
                id:self.cartNo
            })
            if(status===200 && code ===0){
                self.$alert(`恭喜您，已成功下单，订单号：${id}`,'下单成功',{
                    confirmButtonText:'确定',
                    callback:action=>{
                        location.href='/order'
                    }
                })
            }
        }
    },
    async asyncData(ctx){
        let {status,data:{code,data:{name,price}}}=await ctx.$axios.post('/cart/getCart',{
            id:ctx.query.id
        })
        if(status===200 && code===0 && name){
            return {
                cart:[
                    {
                        name,
                        price,
                        count:1
                    }
                ],
                cartNo:ctx.query.id
            }
        }else{
            return {
                cart:[],
                cartNo:''
            }
        }
    }
}
</script>
    
<style lang='scss'>
    @import '@/assets/css/cart/index.scss';
</style>