import Router from 'koa-router'
import Order from '../dbs/models/order'
import Cart from '../dbs/models/cart'
import Config from '../dbs/config'
import axios from '../interface/utils/axios'
import md5 from 'crypto-js/md5'

const router = new Router({
  prefix: '/order'
})

router.post('/createOrder', async ctx => {
  let {
    id,
    price,
    count
  } = ctx.request.body
  let time = Date()
  let orderId = md5(Math.random() * 1000 + time).toString()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: '请先登录'
    }
  } else {
    const cart = await Cart.findOne({
      cartNo: id
    })
    const order = new Order({
      id: orderId,
      count,
      total: price * count,
      time,
      user: ctx.session.passport.user,
      name: cart.detail[0].name,
      img: cart.detail[0].imgs,
      status: 0
    })
    try {
      const result = await order.save()
      if (result) {
        await cart.remove()
        ctx.body = {
          code: 0,
          id: order.id
        }
      } else {
        ctx.body = {
          code: -1
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1
      }
    }
  }
})

router.post('/getOrders', async ctx => {
  if (ctx.isAuthenticated()) {
    try {
      const result = await Order.find({
        user: ctx.session.passport.user
      })
      if (result) {
        ctx.body = {
          list: result,
          code: 0
        }
      } else {
        ctx.body = {
          code: -1,
          list: []
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        list: []
      }
    }
  } else {
    ctx.body = {
      code: -1,
      list: [],
      msg: '请先登录'
    }
  }
})


export default router
