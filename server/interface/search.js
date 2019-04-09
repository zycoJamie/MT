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

router.get('/resultsByKeywords',async ctx =>{
    const { city, keyword } = ctx.query
    const { status, data: { count, pois }} = await axios.get(`${Config.signUrl}/search/resultsByKeywords`, {
      params: {
        city,
        keyword,
        sign:Config.sign
      }
    })
    ctx.body = {
      count: status === 200 ? count : 0,
      pois: status === 200 ? pois : []
    }
})

router.get('/products',async (ctx)=>{
    let keyword=ctx.query.keyword || '旅游'
    let city=ctx.query.city || '北京'
    let {status,data:{product,more}}=await axios.get(`${Config.signUrl}/search/products`,{
        params:{
            keyword,
            city,
            sign:Config.sign
        }
    })

    if(status===200){
        ctx.body={
            product,
            more:ctx.isAuthenticated() ? more:[],
            login:ctx.isAuthenticated()
        }
    }else{
        ctx.body={
            product:{},
            more:[],
            login:ctx.isAuthenticated()
        }
    }
})

export default router