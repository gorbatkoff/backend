const router = require('express').Router(); // import routes
const { users } = require('../models/index');


router.post('/users', async (req, res) => {
    try {

        const user = await users.create({
            login: req.body.login,
            password: req.body.password
        })

        return res.send(user);
        
    } catch (e) {
        return res.sendStatus(400);
    }
})

module.exports = router;