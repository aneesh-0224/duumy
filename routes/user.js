const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt=require('jsonwebtoken')

router.get('/signup',(req,res)=>{
        res.render('user/signup')
})

router.post('/signup',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const user=await User.insertMany({name,email,password})

        res.redirect('/item/all')
    }
    catch(err){
        res.redirect('/user/signup')
    }
})

router.get('/login',(req,res)=>{
    res.render('user/login')
})
router.post('/login',async(req,res)=>{
    // try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            console.log('bruuu')
            res.redirect('/user/login')
        }
        if(user.password==password){
        res.redirect('/item/all')
        }
        else{
            console.log('lamoo')
            console.log(user.password,password)
            res.redirect('/user/login')
        }
    // }
    // catch(err){
    //     res.redirect('/user/login')
    // }
})

module.exports=router