var express = require('express');
var router = express.Router();

const professorController = require('../controller/professorController')

/* GET home page. */
router.get('/:id', professorController.professor);

module.exports = router;