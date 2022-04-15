var express = require('express');
var router = express.Router();

const cursoController = require('../controller/cursoController')

/* GET home page. */
router.get('/', cursoController.curso);

module.exports = router;