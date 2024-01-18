const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const assetsCategoryRoutes = require('./routes/assetsCategoryRoutes');
const assetsmasRoutes = require('./routes/assetsmasRoutes');
const issueRoutes = require('./routes/issueRoutes');
const scrapAssetRoutes = require('./routes/scrapAssetRoutes');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Assest_Management", { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/auth', authRoutes);
app.use('/employee', employeeRoutes);
app.use('/category', assetsCategoryRoutes);
app.use('/assets', assetsmasRoutes);
app.use('/issues', issueRoutes);
app.use('/scrap', scrapAssetRoutes);


app.listen(3001, ()=>{
    console.log('Server is Running..')
})

