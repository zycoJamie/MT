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
        console.log("自动登录")
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

router.post('/verify',async (ctx,next)=>{
    console.log('into verify')
    let username=ctx.request.body.username
    const saveExpire=await Store.hget(`nodemail:${username}`,'expire')
    if(saveExpire && new Date().getTime-saveExpire<0){
        ctx.body={
            code:-1,
            msg:'验证请求过于频繁'
        }
        return false
    }
    let transporter=nodeMailer.createTransport({
        host:Email.smtp.host,
        port:587,
        secure:false,
        auth:{
            user:Email.smtp.user,
            pass:Email.smtp.pass
        }
    })
    let ko = {
        code:Email.code(),
        expire:Email.expire,
        email:ctx.request.body.email,
        user:ctx.request.body.username
    }
    let mailOptions={
        from:`美团注册邮件 <${Email.smtp.user}>`,
        to:ko.email,
        subject:'美团注册码',
        html:`您的美团注册码${ko.code}，请查收`
    }
    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(`error`)
        }else{
            Store.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
        }
    })
    ctx.body={
        code:0,
        msg:'验证码已发送，可能会有延迟，有效期1分钟'
    }
})

router.get('/exit',async (ctx,next)=>{
    await ctx.logout()
    if(!ctx.isAuthenticated()){
        ctx.body={
            code:0,
        }
    }else{
        ctx.body={
            code:-1
        }
    }
})

router.get('/getUser',async (ctx)=>{
    if(ctx.isAuthenticated()){
        const {username,email}=ctx.session.passport.user
        ctx.body={
            username,
            email
        }
    }else{
        ctx.body={
            user:'',
            email:''
        }
    }
})

export default router