import Router from 'koa-router'
import axios from './utils/axios'

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

export default router