const express = require("express");

const router = express.Router();

router.get('/artists', (req, res) => {
    res.json(["john", "tom"]);
});

module.export = router;