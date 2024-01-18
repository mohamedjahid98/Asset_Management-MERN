const express = require('express');
const router = express.Router();
const ScrapAssestModel = require('../Models/ScrapAssest');


router.get('/scrapdata', (req, res) => {
    ScrapAssestModel.find({})
    .then(scrapasset=>res.json(scrapasset))
    .catch(err=>res.json(err))
});

router.get('/getscrap/:id', (req, res) => {
    const id =req.params.id;
    ScrapAssestModel.findById({_id:id})
    .then(scrapasset=>res.json(scrapasset))
    .catch(err=>res.json(err))
});

router.post('/createScrap', (req, res) => {
    ScrapAssestModel.create(req.body)
    .then(scrapasset=>res.json(scrapasset))
    .catch(err=>res.json(err))
});

router.put('/updateScrap/:id', (req, res) => {
    const id =req.params.id;
    ScrapAssestModel.findByIdAndUpdate({_id:id},{
        asset_type:req.body.asset_type,  
        scrap_date:req.body.scrap_date, reason:req.body.reason
    })
    .then(scrapasset=>res.json(scrapasset))
    .catch(err=>res.json(err))
});

router.delete('/deleteScrap/:id', (req, res) => {
    const id =req.params.id;
    ScrapAssestModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
});

module.exports = router;
