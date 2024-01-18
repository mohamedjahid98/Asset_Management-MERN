const express = require('express');
const router = express.Router();
const AssetsMasModel = require('../Models/AssetsMastar');


router.get('/assetsdata', (req, res) => {
    AssetsMasModel.find({})
    .then(assetsmaster=>res.json(assetsmaster))
    .catch(err=>res.json(err))
});

router.get('/getAssetsmas/:id', (req, res) => {
    const id =req.params.id;
    AssetsMasModel.findById({_id:id})
    .then(assetsmaster=>res.json(assetsmaster))
    .catch(err=>res.json(err))
});

router.post('/createAssetsmas', (req, res) => {
    AssetsMasModel.create(req.body)
    .then(assetsmaster=>res.json(assetsmaster))
    .catch(err=>res.json(err))
});

router.put('/updateAssetsmas/:id', (req, res) => {
    const id =req.params.id;
    AssetsMasModel.findByIdAndUpdate({_id:id},{
        serial_no:req.body.serial_no, asset_type:req.body.asset_type, 
        make:req.body.make, model:req.body.model, 
        purchase_date:req.body.purchase_date, purchase_cost:req.body.purchase_cost
    })
    .then(assetsmaster=>res.json(assetsmaster))
    .catch(err=>res.json(err))
});

router.delete('/deleteAssetsmas/:id', (req, res) => {
    const id =req.params.id;
    AssetsMasModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
});

module.exports = router;
