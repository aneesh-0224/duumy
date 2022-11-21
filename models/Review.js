const mongoose= require('mongoose')

const reviewSchema = new mongoose.Schema({
    date:{
        type:Date
    },
    description:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Review',reviewSchema)