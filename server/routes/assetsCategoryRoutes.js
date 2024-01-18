const express = require('express');
const router = express.Router();
const AssetsCategoryModel = require('../Models/AssetsCategory');

router.get('/categorydata', (req, res) => {
    AssetsCategoryModel.find({})
    .then(assetscategorys=>res.json(assetscategorys))
    .catch(err=>res.json(err))
});

router.get('/getCategory/:id', (req, res) => {
    const id =req.params.id;
    AssetsCategoryModel.findById({_id:id})
    .then(assetscategorys=>res.json(assetscategorys))
    .catch(err=>res.json(err))
});

router.post('/createCategory', (req, res) => {
    AssetsCategoryModel.create(req.body)
    .then(assetscategorys=>res.json(assetscategorys))
    .catch(err=>res.json(err))
});

router.put('/updateCategory/:id', (req, res) => {
    const id =req.params.id;
    AssetsCategoryModel.findByIdAndUpdate({_id:id},{
        categoryname:req.body.categoryname
        })
    .then(assetscategorys=>res.json(assetscategorys))
    .catch(err=>res.json(err))
});

router.delete('/deleteCategory/:id', (req, res) => {
    const id =req.params.id;
    AssetsCategoryModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
});

module.exports = router;