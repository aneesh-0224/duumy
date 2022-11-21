const express = require('express')
const router = express.Router()
const Review = require('../models/Review')
const Item = require('../models/Item')

router.get('/',(req,res)=>{
    res.send('inside review route')
})
router.get('/all',(req,res)=>{
    res.send('inside all review route')
})

router.post('/newReview/:id',async(req,res)=>{
    console.log('inside new Review')
    const {id}=req.params
    const {description}=req.body
    const review =await Review.insertMany({description})

    const item=await Item.findById(id)
    console.log('the item is',item,review)
    
    // if (Array.isArray(item.review)) {
    //     item.review.push(review);
    // } else {
    //     item.review = [];
    //     item.review.push(review);
    // }

    // await item.save()

    // await Item.findOneAndUpdate(
    //     { _id:id }, 
    //     { $push: review },
    //    function (error, success) {
    //          if (error) {
    //              console.log(error);
    //          } else {
    //              console.log(success);
    //          }
    //      })

    res.redirect(`/item/${id}`)
})

router.get('/edit/:id/:iid',async(req,res)=>{
    const {id,iid} = req.params
    const review=await Review.findById(id)
    const desc=review.description
    res.render('review/edit',{id,iid,desc})
})

router.post('/edit/:id/:iid',async(req,res)=>{
    const {id,iid} = req.params
    const {description}=req.body

    const review=await Review.findByIdAndUpdate(id,{description})

    res.redirect(`/item/${iid}`)
})

router.post('/delete/:id/:iid',async(req,res)=>{
    const {id,iid} = req.params
    const review =await Review.findByIdAndDelete(id)
    res.redirect(`/item/${iid}`)
})

module.exports = router