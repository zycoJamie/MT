import Router from 'koa-router'
import Cart from '../dbs/models/cart'
import md5 from 'crypto-js/md5'

let router=new Router({
    prefix:'/cart'
})

router.post('/create',async ctx=>{
    if(!ctx.isAuthenticated()){
        ctx.body={
            code:-1,
            msg:'please login'
        }
    }else{
        const time=Date()
        const cartNo=md5(Math.random()*1000+time).toString()
        console.log("cartNo:"+cartNo)
        const {params:{id,detail}}=ctx.request.body
        const cart=new Cart({
            id,
            cartNo,
            time,
            user:ctx.session.passport.user,
            detail
        })
        const result=await cart.save()
        console.log("cart save :"+result)
        if(result){
            ctx.body={
                code:0,
                msg:'',
                id:cartNo
            }
        }else{
            ctx.body={
                code:-1,
                msg:'fail'
            }
        }
    }
})

router.post('/getCart',async ctx=>{
    let {id}=ctx.request.body
    try{
        let result=await Cart.findOne({cartNo:id})
        ctx.body={
            code:0,
            data:result?result.detail[0]:{}
        }
    }catch(e){
        ctx.body={
            code:-1,
            data:{}
        }
    }
})

export default router