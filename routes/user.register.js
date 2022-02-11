const router = require('express').Router(); // import routes
const { body } = require('express-validator');
const { errorsHandler } = require('../errorsHandler');
const { users } = require('../models/index');


router.post('/register',
    body('login').notEmpty().withMessage('nickname is empty').isLength({min: 4}).withMessage("Login's Length should be more then 3"),
    body('password').notEmpty().withMessage('password is empty').isLength({min: 4}).withMessage("Password's length should be more then 3"),
    errorsHandler,
    async (req, res) => {
        try {

            let login = req.body.login;

            const isUserAlreadyExist = await users.findOne({
                where: {login}
            });

            if (!isUserAlreadyExist) {
                return res.status(400).send({ message: 'This user already exist' });
            }

            let user = await users.create({
                login: req.body.login,
                password: req.body.password
            })

            return res.send(user);

        } catch (e) {
            return res.sendStatus(400).json({ message: e.message});
        }
    })

module.exports = router;