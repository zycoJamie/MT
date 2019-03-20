import Router from 'koa-router'
import axios from './utils/axios'
import Province from '../dbs/models/provinces'

const key = '' //高德开放平台apiKey

let router = new Router({
    prefix: '/geo'
})

router.get('/getPosition', async ctx => {
    let { data: {status,province, city} } = await axios.get(`https://restapi.amap.com/v3/ip?key=${key}`,)
    console.log(status)
    console.log(province)
    if(status==="1"){
        ctx.body={
            province,
            city
        }
    }else{
        ctx.body={
            province:'',
            city:''
        }
    }
})

router.get('/getProvince',async ctx=>{
    let province=await Province.find()
    province=province.map(item=>{
        return {
            code:item.code,
            name:item.name
        }
    })
    ctx.body={
        provinces:province
    }
})

export default router