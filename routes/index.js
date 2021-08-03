const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  return res.render('index');
});

/** GET item; Add item to cart   */
router.get('/shop/:itemId', async function (req, res) {
  res.redirect('/');

});

module.exports = router;
