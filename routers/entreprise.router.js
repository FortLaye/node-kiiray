const entrepriseRouter = require('express').Router();
const entrepriseCtrl = require('../controllers/entreprise.controller');

entrepriseRouter.get('/entreprises', entrepriseCtrl.getEntreprises);
entrepriseRouter.get('/entreprises/:id', entrepriseCtrl.getEntrepriseById);


module.exports = entrepriseRouter;