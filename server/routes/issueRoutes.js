const express = require('express');
const router = express.Router();
const IssuesCreatedModel = require('../Models/IssuesCreated');


router.get('/issuedata', (req, res) => {
    IssuesCreatedModel.find({})
    .then(issues=>res.json(issues))
    .catch(err=>res.json(err))
});

router.get('/getIssuedata/:id', (req, res) => {
    const id =req.params.id;
    IssuesCreatedModel.findById({_id:id})
    .then(issues=>res.json(issues))
    .catch(err=>res.json(err))
});

router.post('/createIssue', (req, res) => {
    IssuesCreatedModel.create(req.body)
    .then(issues=>res.json(issues))
    .catch(err=>res.json(err))
});

router.put('/updateIssue/:id', (req, res) => {
    const id =req.params.id;
    IssuesCreatedModel.findByIdAndUpdate({_id:id},{
        empId:req.body.empId, reason:req.body.reason,
        empsname:req.body.empsname, asset_type:req.body.asset_type,
        issue_date:req.body.issue_date,ret_date:req.body.ret_date
    })
    .then(issues=>res.json(issues))
    .catch(err=>res.json(err))
});

router.delete('/deleteIssue/:id', (req, res) => {
    const id =req.params.id;
    IssuesCreatedModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
});

module.exports = router;
