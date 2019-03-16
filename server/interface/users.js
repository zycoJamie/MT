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
        const saveCode = await Store.hget(`nodemail:${username}`,'code')
        const saveExpire=await Store.hget(`nodemail:${username}`,'expire')
        if(saveCode===code){
            if(new Date().getTime()-saveExpire>0){
                ctx.body={
                    code:-1,
                    msg:'验证码以过期，请重新尝试'
                }
                return false
            }
        }else{
            ctx.body={
                code:-1,
                msg:'请输入正确验证码'
            }
            return false
        }
    }else{
        ctx.body={
            code:-1,
            msg:'请填写验证码'
        }
        return false
    }

    let user=await User.find({username})
    if(user.length){
        ctx.body={
            code:-1,
            msg:'已经注册'
        }
        return false
    }
    let nuser = await User.create({
        username,
        password,
        email
    })
    if(nuser){
        let res = await axios.post('/users/signin',{
            username,
            password
        })
        if(res.data && res.data.code===0){
            ctx.body={
                code:0,
                msg:'注册成功',
                user:res.data.user
            }
        }else{
            ctx.body={
                code:-1,
                msg:'error'
            }
        }
    }else{
        ctx.body={
            code:-1,
            msg:'注册失败'
        }
    }
})

router.post('/signin',async (ctx,next)=>{
    return Passport.authenticate('local',function(err,user,info,status){
        if(err){
            ctx.body={
                code:-1,
                msg:'err'
            }
        }else{
            if(user){
                ctx.body={
                    code:0,
                    msg:'登录成功',
                    user
                }
                return ctx.login(user)
            }else{
                ctx.body={
                    code:1,
                    msg:info
                }
            }
        }
    })(ctx,next)
})