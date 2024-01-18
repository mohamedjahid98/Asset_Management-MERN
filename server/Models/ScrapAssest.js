const mongoose = require('mongoose');

const ScrapAssetSchema = new mongoose.Schema({
    asset_type: String,
    scrap_date: Date,
    reason: String
});



const ScrapAsset = mongoose.model('ScrapAsset', ScrapAssetSchema);

module.exports = ScrapAsset;
