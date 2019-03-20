import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import search from './modules/search'

Vue.use(Vuex)

const store=()=>new Vuex.Store({
    modules:{
        geo,search
    },
    actions:{
        async nuxtServerInit({commit},{req,app}){
            const {
                data:{
                    province, 
                    city
                }
            }=await app.$axios.get('/geo/getPosition')
            console.log(`${province}:${city}`)
            commit('geo/setPosition',{city,province})
            const {
                data:{
                    result
                }
            }=await app.$axios.get('/search/hotPlace',{
                params:{
                    city:app.store.state.geo.position.city
                }
            })
            commit('search/setHotPlace',result)
        }
    }
})

export default store