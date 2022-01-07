const express = require('express')
const BookRouter = express.Router()
const book = require('../../model/bookData')
const checkAuth = require("../../middleware/check-auth")


BookRouter.post('/add-book', checkAuth, (req, res) => {
    var item = {
        login_id: req.userData.userId,
        category: req.body.category,
        language: req.body.language,
        status:0 
    }
    var data = book(item)
    data.save()
    return res.status(200).json({
        success: true,
        error: false,
        message: "Book Added Successfully !"
    })
})

BookRouter.get('/view-book', (req, res) => {
    book.find()
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

BookRouter.get('/view-user-books', checkAuth, (req, res) => {
    var id = req.userData.userId
   
    book.find()
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


BookRouter.get('/view-user-book', checkAuth, (req, res) => {
     var id = req.userData.userId
     console.log(id)
    book.find({login_id:id})
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

BookRouter.get('/edit/:id', (req, res) => {
    const id = req.params.id
    book.findOne({ _id: id })
        .then(function (data) {
            return res.status(200).json({
                success: true,
                error: false,
                message: data
            })
        })
})



BookRouter.post('/update-book', (req, res) => {
    var items = {
        category: req.body.category,
        language: req.body.language,
        id: req.body.id
    }
    book.updateOne({ _id: items.id }, { $set: items })
        .then(function () {
            book.find().then(function (bin) {
                res.status(200).json({
                    success: true,
                    error: false,
                    message: 'Book Details updated!',

                })
            })

        })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})


BookRouter.get('/delete-book/:id', (req, res) => {
    const id = req.params.id
    book.deleteOne({ _id: id })
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


module.exports = BookRouter