
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Data ==>', req.params)
    res.send({ user: [], message: "success" })
})

module.exports = router;