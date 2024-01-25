const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');


router.post('/createUser',userController.createUser);
router.get('/getUserData',userController.getUserData);

router.post('/logout',authenticationMiddleware, userController.logout);



module.exports = router;