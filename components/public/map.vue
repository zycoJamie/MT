<template>
    <div :id="id"
    :style="{width:width+'px',height:height+'px',margin:'34px auto'}"
    class="m-map">

    </div>
</template>

<script>
export default {
    props:{
        width:{
            type:Number,
            default:300
        },
        height:{
            type:Number,
            default:300
        },
        point:{
            type:Array,
            default:[116.46,39.92]
        }
    },
    data(){
        return {
            id:`map`,
            key:''  //高德开放平台apiKey
        }
    },
    watch:{
        point:function(nv,ov){
            this.map.setCenter(nv)
            this.marker.setPosition(nv)
        }
    },
    mounted(){
        const self=this
        this.id=`map${Math.random().toString().slice(4,6)}`
        window.onmaploaded=()=>{
            const map=new window.AMap.Map(self.id,{
                resizeEnable:true,
                zoom:11,
                center:self.point
            })
            self.map=map
            window.AMap.plugin('AMap.ToolBar',()=>{
                const toolbar=new window.AMap.ToolBar()
                map.addControl(toolbar)
                const marker=new window.AMap.Marker({
                    icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                    position:self.point
                })
                self=marker
                marker.setMap(map)
            })
        }
        //异步加载 js api
        const url=`https://webapi.amap.com/maps?v=1.4.13&key=${self.key}值&callback=onmaploaded`
        const jsapi=document.createElement('script')
        jsapi.src=url
        jsapi.charset='utf-8'
        document.head.appendChild(jsapi)
    }

}
</script>

<style lang="scss">

</style>


