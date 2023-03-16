const express = require('express')
const { showHome } = require('./controllers/geralController')
const router = express.Router()

router.get('/', showHome)


module.exports = router;