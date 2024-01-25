const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');


router.get('/getTodos',todosController.getTodos);
router.get('/getTodos/:id',todosController.getSpecificTodos);


module.exports = router;