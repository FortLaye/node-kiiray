const model = require('../database/models/index');

// Retourne l'ensmble des entreprises
exports.getEntreprises = (req, res, next) => {
    model.Entreprise.findAll()
         .then(entreprises => {
             res.status(200).json(entreprises);
         })
        .catch(error => res.status(500).json({ error }))
}

// Retourne un objet Entreprise
exports.getEntrepriseById = (req, res, next) => {
    const id = Number(req.params.id);
    model.Entreprise.findOne({ where: { id: id }})
        .then(entreprise => {
            res.status(200).json(entreprise)
        })
        .catch(error => res.status(500).json({error}));
}

// Création d'une entreprise
exports.createEntreprise = (req, res, next) => {
    
}

