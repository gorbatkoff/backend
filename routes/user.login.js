const router = require('express').Router(); // import routes
const { body } = require('express-validator');
const { errorsHandler } = require('../errorsHandler');
const { users } = require('../models/index');

router.post('/login',
    // body('login').notEmpty().withMessage('Login is empty')
    //     .isLength({ min: 4 }).withMessage("Login's length should be more then 3"),

    // body('password').notEmpty().withMessage('Password is empty')
    //     .isLength({ min: 4 }).withMessage("Passwords's length should be more then 3"),
    // errorsHandler,
    async (req, res) => {
        try {

            let login = req.body.login;

            const isExist = await users.findOne({
                where: {login}
            });

            if (!isExist) {
                return res.status(400).send({ message: `We couldn't find this login ` });
            }
            
            return res.status(400).send({ message: 'wrong password' });

            // return res.send(user);

        } catch (e) {
            return res.sendStatus(400).json({ message: e.message });
        }
    }
)

module.exports = router;