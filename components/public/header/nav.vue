<template>
<div class="m-nav">
    <ul class="nav">
        <li class="list">
            <nuxt-link to="/my">我的美团</nuxt-link>
            <dl>
                <dd><nuxt-linke to="/order">我的订单</nuxt-linke></dd>
                <dd><nuxt-linke to="/order">我的收藏</nuxt-linke></dd>
                <dd><nuxt-linke to="/order">抵用券</nuxt-linke></dd>
                <dd><nuxt-linke to="/order">账户设置</nuxt-linke></dd>
            </dl>
        </li>
        <li class="order">
            <nuxt-link to="/order">手机APP</nuxt-link>
        </li>
        <li class="list bd">
            <nuxt-link to="/center">商家中心</nuxt-link>
            <dl>
                <dd>
                    <nuxt-linke to="/userCenter">登录商家中心</nuxt-linke>
                </dd>
                <dd>
                    <nuxt-link to="/coop">我想合作</nuxt-link>
                </dd>
                <dd>
                    <nuxt-link to="/wap">免费手机开店</nuxt-link>
                </dd>
                <dd>
                    <nuxt-link to="/kaipiao">商家申请开票</nuxt-link>
                </dd>
            </dl>
        </li>
        <li class="list site">
            <nuxt-link to="/site">网站导航</nuxt-link>
            <div class="subContainer">
                <dl class="hotel">
                    <dt>酒店旅游</dt>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                    <dd>国际机票</dd>
                </dl>
                <dl class="food">
                    <dt>吃小食</dt>
                    <dd>火腿</dd>
                    <dd>火腿</dd>
                    <dd>火腿</dd>
                    <dd>火腿</dd>
                    <dd>火腿</dd>
                    <dd>火腿</dd>
                </dl>
                <dl class="movie">
                    <dt>看电影</dt>
                    <dd>热门电影</dd>
                    <dd>热门电影</dd>
                    <dd>热门电影</dd>
                    <dd>热门电影</dd>
                    <dd>热门电影</dd>
                    <dd>热门电影</dd>
                </dl>
                <dl class="app">
                    <dt>手机应用</dt>
                    <dd>
                        <a href="#">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                            alt="美团app"
                            title="美团app"/>
                        </a>
                    </dd>
                </dl>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style lang='css'>

</style>