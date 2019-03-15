import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import Passport from './utils/passport'
import axios from './utils/axios'
import Email from '../dbs/config'
import User from '../dbs/models/users'

let router=new Router({
    prefix:'/users'
})

let Store=new Redis().client

router.post('/signup',async ctx=>{
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body

    if(code){
        const saveCode = await Store.hget(``)
    }
})