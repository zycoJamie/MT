import Router from 'koa-router'
import axios from 'axios'
import Config from '../dbs/config'

const router=new Router({
    prefix:'/category'
})

router.get('/crumbs', async ctx => {
    const { status, data: { areas, types }} = await axios.get(`${Config.signUrl}/categroy/crumbs`, {
      params: {
        city: ctx.query.city.replace('市', '') || '北京',
        sign:Config.sign
       }
    })
    ctx.body = {
       areas: status === 200 ? areas : [],
       types: status === 200 ? types : []
    }
})

export default router