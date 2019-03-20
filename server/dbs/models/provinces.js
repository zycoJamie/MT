import mongoose from 'mongoose'
const Schema=mongoose.Schema
const Province=new Schema({
    code:{
        type:String,
        require:true
    },
    sheng:{
        type:String,
        require:true
    },
    di:{
        type:String,
        require:true
    },
    xian:{
        type:String,
        require:true
    },
    level:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
},{
    collection:'provinces'
})

export default mongoose.model('Provice',Province)