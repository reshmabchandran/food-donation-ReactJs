const express = require('express')
const ClothRouter = express.Router()
const cloth = require('../../model/clothData')
const login=require('../../model/loginData')
const checkAuth = require("../../middleware/check-auth")


ClothRouter.post('/add-cloth', checkAuth, (req, res) => {
    var item = {
        login_id: req.userData.userId,
        gender: req.body.gender,
        type: req.body.type,
        quantity: req.body.quantity,
        status:0
    }
    var data = cloth(item)
    data.save()
    return res.status(200).json({
        success: true,
        error: false,
        message: "cloth Added Successfully !"
    })
})

ClothRouter.get('/view-cloth', (req, res) => {
//     cloth.find()
//         .then(function (data) {
//             if (data == 0) {
//                 return res.status(401).json({
//                     success: false,
//                     error: true,
//                     message: "No Item Found!"
//                 })
//             }
//             else {
//                 return res.status(200).json({
//                     success: true,
//                     error: false,
//                     data: data
//                 })
//             }
//         })

// })

login.aggregate([
    {
        $lookup:
        {
            from:'register_tbs',
            localField:'_id',
            foreignField:'login_id',
            as:'registerData'
        }               
    },
    {
    $lookup:
        {
            from:'cloth_tbs',
            localField:'_id',
            foreignField:'login_id',
            as:'clothData' 
        }  
    }
]).then(function(data){
    res.status(200).json({
        success:true,
        error:false,
        details:data
    })
})
})


ClothRouter.get('/view-user-cloth', checkAuth, (req, res) => {
    //var id = req.userData.userId
    cloth.find()
        .then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        })

})

ClothRouter.get('/edit/:id', (req, res) => {
    const id = req.params.id
    cloth.findOne({ _id: id })
        .then(function (data) {
            return res.status(200).json({
                success: true,
                error: false,
                message: data
            })
        })
})


ClothRouter.post('/update-cloth', (req, res) => {
    var items = {
        gender: req.body.gender,
        type: req.body.type,
        quantity: req.body.quantity,
        id: req.body.id
    }
    cloth.updateOne({ _id: items.id }, { $set: items })
        .then(function () {
            cloth.find().then(function (bin) {
                res.status(200).json({
                    success: true,
                    error: false,
                    message: 'Cloth Details updated!',

                })
            })

        })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})


ClothRouter.get('/delete-cloth/:id', (req, res) => {
    const id = req.params.id
    cloth.deleteOne({ _id: id })
        .then(function () {
            res.status(200).json({
                success: true,
                error: false,
                message: 'Item deleted!'
            })
        })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})


module.exports = ClothRouter