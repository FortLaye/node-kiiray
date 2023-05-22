const userCtrl = require('../controllers/user.controller');
const router = require('express').Router();

router.post('/security/login', userCtrl.login);
router.get('/users', userCtrl.getUsers);
router.post('/users', userCtrl.signUp);
router.get('/users/:id', userCtrl.getUserById);

module.exports = router;

