import Router from 'koa-router'
import axios from './utils/axios'
import Config from '../dbs/config'
import Province from '../dbs/models/provinces'
import pinyin from 'pinyin'

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
   /*  let province=await Province.find()
    province=province.map(item=>{
        return {
            code:item.code,
            name:item.name
        }
    }) */
    
    let {status,data:{province}}=await axios.get(`${Config.signUrl}/geo/province?sign=${Config.sign}`)
    if(status===200){
        ctx.body={
            provinces:province
        }
    }else{
        ctx.body={
            provinces:[]
        }
    }
    
})

router.get('/getProvince/:id',async ctx=>{
    let {status,data:{city}}= await axios.get(`${Config.signUrl}/geo/province/${ctx.params.id}?sign=${Config.sign}`)
    if(status===200){
        ctx.body={
            citys:city
        }
    }else{
        ctx.body={
            citys:[]
        }
    }
})

router.get('/city',async ctx=>{
    let {status,data:{city}}= await axios.get(`${Config.signUrl}/geo/city?sign=${Config.sign}`)
    if(status===200){
        ctx.body={
            city
        }
    }else{
        ctx.body={
            city:[]
        }
    }
})

router.get('/city/pinyin',async ctx=>{
    let {status,data:{city}}= await axios.get(`${Config.signUrl}/geo/city?sign=${Config.sign}`)
    if(status===200){
        let cityPinyin=city.map(item=>{
            let cat=''
            pinyin(item.name,{
                heteronym:true,
                segment:true,
                style:pinyin.STYLE_NORMAL
            }).forEach(item=>{
                if(item.length){
                    cat=cat.concat(item[0])
                }
            })
            return {
                id:item.id,
                name:item.name,
                py:cat
            }
        })
        ctx.body={
            cityPinyin
        }
    }else{
        ctx.body={
            cityPinyin:[]
        }
    }
})

export default router