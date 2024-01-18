const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    empname: String,
    email: String,
    dept: String,
    position: String,
    mobile_no: Number
});



const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
