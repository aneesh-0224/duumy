const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const Review = require('../models/Review')

router.get('/',(req,res)=>{
    res.send('inside item routes')
})
router.get('/all',async(req,res)=>{
    const items= await Item.find({})
    res.render('item/allItems',{items})
})

router.get('/newItem',(req,res)=>{
    res.render('item/newItem')
})

router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const item=await Item.findById(id).populate('review')
    console.log(item)
    const reviews=await Review.find({})
    res.render('item/item',{item,reviews})
})

router.post('/newItem',async(req,res)=>{
    const {name,category,quantity,price}=req.body
    const item=await Item.insertMany({name,quantity,category,price})
    res.redirect('/item/all')
})

router.get('/delete/:id',async(req,res)=>{
    const {id}=req.params
    const item =await Item.findByIdAndDelete(id)
    res.redirect('/item/all')
})
module.exports = router