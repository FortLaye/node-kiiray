const model = require('../database/models/index');
const jwt = require('jsonwebtoken');

// getting all users
exports.getUsers = (req, res, next) => {
    model.User.findAll()
        .then(
        users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({message: error});
        })
}

// get one user by her id
exports.getUserById = (req, res, next) => {
    const idUser = Number(req.params.id);
    model.User.findOne({where: {id : idUser}})
         .then(user => {
             res.status(200).json(user)
         })
        .catch(error => res.status(500).json({error}));
}

exports.login = (req, res, next) => {
    model.User.findOne({where: { email: req.body.login }})
         .then(userFound => {
             if (userFound){
                 if (userFound.password === req.body.password){
                    res.status(200).json({
                        token: jwt.sign(
                        {userId: userFound.id},
                        'SECRET_KEY_API',
                        {expiresIn: '1h'})
                    })
                 }else{
                     res.status(401).json({message: 'Login or password incorrect !'})
                 }
             }else{
                 res.status(401).json({message: 'Login or password incorrect !'})
             }
         })
        .catch(error => res.status(500).json({error}))
}

exports.signUp = (req, res, next) => {
    const user = {
        ... req.body,
        role: 'ADHERANT',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    model.User.create(user)
        .then(userCreated => {
            res.status(201).json(userCreated)
        })
        .catch(error => {
            res.status(500).json({ error })
        })

}
