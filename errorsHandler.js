const { validationResult } = require('express-validator');

const errorsHandler = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.errors.map((error) => error.msg).join(''),
        });
    }

    next();
}


module.exports = {
    errorsHandler,
};
