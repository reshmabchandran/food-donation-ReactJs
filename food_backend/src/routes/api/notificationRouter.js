const express = require('express')
const NotificationRouter = express.Router()
const notification = require('../../model/notificationData')
const register = require('../../model/registerData')
const login = require('../../model/loginData')
const food = require('../../model/foodData')
const cloth = require('../../model/clothData')
const book = require('../../model/bookData')
const checkAuth = require("../../middleware/check-auth")


NotificationRouter.post('/add-notification', checkAuth, (req, res) => {
    var  type = req.body.type;
    var data = {
        buyer_id: req.userData.userId,
        seller_id: req.body.login_id,
        product_id: req.body.product_id,
        status:0 
    }
    if(type==="food"){
        food.updateOne({_id:req.body.product_id},{$set:{status:1}}).then(()=>{
            console.log("hai")
        })
    }
    if(type==="cloth"){
        cloth.updateOne({_id:req.body.product_id},{$set:{status:1}}).then(()=>{
            console.log("hello")
        })
    }
    if(type==="book"){
        book.updateOne({_id:req.body.product_id},{$set:{status:1}})
    }

    console.log("DATA",data)
    var item = notification(data)
    item.save()
    return res.status(200).json({
        success: true,
        error: false,
        message: "Success!",
        details:data
    })
})



NotificationRouter.get('/vol-notification', (req, res) => {
    notification.aggregate([
        {
            $lookup:
            {
                from: 'register_tbs',
                localField: 'buyer_id',
                foreignField: 'login_id',
                as: 'buyerData'
            }
        },
        {
            $lookup:
            {
                from: 'register_tbs',
                localField: 'seller_id',
                foreignField: 'login_id',
                as: 'sellerData'
            }
        },
        {
            $lookup:
            {
                from: 'food_tbs',
                localField: 'product_id',
                foreignField: '_id',
                as: 'foodData'
            }
        },
        {
            $lookup:
            {
                from: 'cloth_tbs',
                localField: 'product_id',
                foreignField: '_id',
                as: 'clothData'
            }
        },
        {
            $lookup:
            {
                from: 'book_tbs',
                localField: 'product_id',
                foreignField: '_id',
                as: 'bookData'
            }
        }
    ]).then((details) => {
        res.json({
            data: details,

        })


    })

})


NotificationRouter.get('/view-user-notification',checkAuth, (req, res) => {
    var id = req.userData.userId
    console.log("idddd",id)
    notification.aggregate([
        {
            $lookup:
            {
                from: 'register_tbs',
                localField: 'buyer_id',
                foreignField: 'login_id',
                as: 'buyerData'
            }
        },
        {
            $lookup:
            {
                from: 'food_tbs',
                localField: 'product_id',
                foreignField: '_id',
                as: 'foodData'
            }
        },
        {
            $lookup:
            {
                from: 'cloth_tbs',
                localField: 'product_id',
                foreignField: '_id',
                as: 'clothData'
            }
        },
        {
            $lookup:
            {
                from: 'book_tbs',
                localField: 'product_id',
                foreignField: '_id',
                as: 'bookData'
            }
        },
    ]).then((details) => {
        res.json({
            data: details,

        })


    })

})


NotificationRouter.post('/vol-accept',(req,res)=>{
    const id = req.body.id
    notification.updateOne({_id:id},{$set:{status:1}})
    .then(()=>{
            res.status(200).json({
            success:true,
            error:false,
            message:'accepted',
        
        })
    })
    
})



module.exports = NotificationRouter