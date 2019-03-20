import Router from 'koa-router'
import axios from 'axios'
import Config from '../dbs/config'

const router=new Router({
    prefix:'/search'
})

router.get('/top',async ctx=>{
    let {status,data:{top}}=await axios.get(`${Config.signUrl}/search/top`,{
        params:{
            input:ctx.query.input,
            city:ctx.query.city,
            sign:Config.sign
        }
    })
    ctx.body={
        top:status===200?top:[]
    }
})

router.get('/hotPlace',async ctx=>{
    let city=ctx.query.city
    let {status,data:{result}}=await axios.get(`${Config.signUrl}/search/hotPlace`,{
        params:{
            city:city.replace('市',''),
            sign:Config.sign
        }
    })
    ctx.body={
        result:status===200?result.slice(0,5):[]
    }
})

export default router