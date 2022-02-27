const express = require('express');

const {SaveReport} = require('../controllers/report')
const {GetReport} =require('../controllers/report')
const router = express.Router();


router.post('/account',SaveReport);
router.get('/getblock',GetReport)
module.exports = router;