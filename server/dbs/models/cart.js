import mongoose from 'mongoose'
var Schema=mongoose.Schema
const Cart=new Schema({
    id:{
        type:String,
        require:true
    },
    detail:{
        type:Array,
        require:true
    },
    cartNo:{
        type:String,
        require:true
    },
    user:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    }
},{
    collection:'carts'
})

export default mongoose.model("Cart",Cart)