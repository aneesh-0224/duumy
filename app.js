const express=require('express')
const connectMongo= require('./models/db')
const app=express()
const path=require('path')
const ejsMate= require('ejs-mate')
const methodOverride= require('method-override')
const itemRoutes= require('./routes/item')
const reviewRoutes= require('./routes/review')
const userRoutes=require('./routes/user')
connectMongo()

app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/item',itemRoutes)
app.use('/review',reviewRoutes)
app.use('/user',userRoutes)

app.get('/',(req,res)=>{
    res.redirect('/user/signup')
})

app.listen(5000,()=>{
    console.log(`server started at port 5000`)
})