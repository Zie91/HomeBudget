const express = require('express');
const router = express.Router();

const testFile = {
    value: "PONG"
}
// @route GET api/items
// @dess get all items
// @access public

router.get('/', (req,res) => {
    res.send(testFile);
});

module.exports = router;