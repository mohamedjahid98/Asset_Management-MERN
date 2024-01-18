const mongoose = require('mongoose');

const AssetsCategorySchema = new mongoose.Schema({
    categoryname: String
});



const AssetsCategory = mongoose.model('AssetsCategory', AssetsCategorySchema);

module.exports = AssetsCategory;
