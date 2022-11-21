const mongoose=require('mongoose')

const uri='mongodb://localhost:27017/shopping'

const connectMongo=()=>{
mongoose.connect(uri,{
    useNewUrlParser:true,   
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',()=>{
    console.log('database connected')
})
}

module.exports=connectMongo