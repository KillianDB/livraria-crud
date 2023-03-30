const express = require('express')
const { showHome, showFormAdd } = require('./controllers/geralController')
const router = express.Router()

router.get('/', showHome);
router.get('/livros/criar', showFormAdd);

module.exports = router;