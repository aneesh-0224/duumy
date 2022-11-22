const mongoose= require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review',
    }
})

module.exports = mongoose.model('Item',itemSchema)