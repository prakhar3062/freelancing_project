const express = require("express");
const router = express.Router();
const {GetAccountDetails}=require('../controllers/login')
const {AddAccountDetails} = require('../controllers/login')

router.post('/details',AddAccountDetails)
router.get('/getDetails',GetAccountDetails)

module.exports = router