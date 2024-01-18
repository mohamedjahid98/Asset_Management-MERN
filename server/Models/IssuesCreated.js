const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    empId:String,
    empsname: String,
    asset_type: String,
    issue_date: Date,
    ret_date: Date,
    reason: String
});


const Issue = mongoose.model('Issue', IssueSchema);

module.exports = Issue;
